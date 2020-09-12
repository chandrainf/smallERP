const CashPaymentService = require('../../../services/cashPaymentService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  cashPaymentCreate(data: CashPaymentInput!): CashPayment!
`;

const resolver = {
  cashPaymentCreate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.cashPaymentCreate,
    );
    return new CashPaymentService(context).create(
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
