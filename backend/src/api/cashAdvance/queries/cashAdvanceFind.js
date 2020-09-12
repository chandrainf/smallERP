const CashAdvanceService = require('../../../services/cashAdvanceService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  cashAdvanceFind(id: String!): CashAdvance!
`;

const resolver = {
  cashAdvanceFind: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.cashAdvanceRead,
    );

    return new CashAdvanceService(context).findById(
      args.id,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
