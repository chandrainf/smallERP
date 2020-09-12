const CashPaymentService = require('../../../services/cashPaymentService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  cashPaymentFind(id: String!): CashPayment!
`;

const resolver = {
  cashPaymentFind: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.cashPaymentRead,
    );

    return new CashPaymentService(context).findById(
      args.id,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
