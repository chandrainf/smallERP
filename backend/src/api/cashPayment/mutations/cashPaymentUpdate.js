const CashPaymentService = require('../../../services/cashPaymentService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  cashPaymentUpdate(id: String!, data: CashPaymentInput!): CashPayment!
`;

const resolver = {
  cashPaymentUpdate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.cashPaymentEdit,
    );

    return new CashPaymentService(context).update(
      args.id,
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
