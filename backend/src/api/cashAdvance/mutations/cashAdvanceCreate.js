const CashAdvanceService = require('../../../services/cashAdvanceService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  cashAdvanceCreate(data: CashAdvanceInput!): CashAdvance!
`;

const resolver = {
  cashAdvanceCreate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.cashAdvanceCreate,
    );
    return new CashAdvanceService(context).create(
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
