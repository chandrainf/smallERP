const PurchaseRequestService = require('../../../services/purchaseRequestService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  purchaseRequestUpdate(id: String!, data: PurchaseRequestInput!): PurchaseRequest!
`;

const resolver = {
  purchaseRequestUpdate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.purchaseRequestEdit,
    );

    return new PurchaseRequestService(context).update(
      args.id,
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
