const CashPaymentService = require('../../../services/cashPaymentService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  cashPaymentDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  cashPaymentDestroy: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.cashPaymentDestroy,
    );

    await new CashPaymentService(context).destroyAll(
      args.ids,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
