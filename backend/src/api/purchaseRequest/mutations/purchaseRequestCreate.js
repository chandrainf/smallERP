const PurchaseRequestService = require('../../../services/purchaseRequestService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  purchaseRequestCreate(data: PurchaseRequestInput!): PurchaseRequest!
`;

const resolver = {
  purchaseRequestCreate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.purchaseRequestCreate,
    );

    return new PurchaseRequestService(context).create(
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
