const PurchaseRequestService = require('../../../services/purchaseRequestService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  purchaseRequestImport(data: PurchaseRequestInput!, importHash: String!): Boolean
`;

const resolver = {
  purchaseRequestImport: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.purchaseRequestImport,
    );

    await new PurchaseRequestService(context).import(
      args.data,
      args.importHash,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
