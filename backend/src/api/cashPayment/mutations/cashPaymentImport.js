const CashPaymentService = require('../../../services/cashPaymentService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  cashPaymentImport(data: CashPaymentInput!, importHash: String!): Boolean
`;

const resolver = {
  cashPaymentImport: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.cashPaymentImport,
    );

    await new CashPaymentService(context).import(
      args.data,
      args.importHash,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
