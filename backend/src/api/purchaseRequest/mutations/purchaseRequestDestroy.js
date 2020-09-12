const PurchaseRequestService = require('../../../services/purchaseRequestService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  purchaseRequestDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  purchaseRequestDestroy: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.purchaseRequestDestroy,
    );

    await new PurchaseRequestService(context).destroyAll(
      args.ids,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
