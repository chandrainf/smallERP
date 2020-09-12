const PurchaseRequestService = require('../../../services/purchaseRequestService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  purchaseRequestFind(id: String!): PurchaseRequest!
`;

const resolver = {
  purchaseRequestFind: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.purchaseRequestRead,
    );

    return new PurchaseRequestService(context).findById(
      args.id,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
