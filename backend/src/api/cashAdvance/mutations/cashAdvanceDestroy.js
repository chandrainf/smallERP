const CashAdvanceService = require('../../../services/cashAdvanceService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  cashAdvanceDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  cashAdvanceDestroy: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.cashAdvanceDestroy,
    );

    await new CashAdvanceService(context).destroyAll(
      args.ids,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
