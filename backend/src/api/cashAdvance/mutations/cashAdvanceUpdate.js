const CashAdvanceService = require('../../../services/cashAdvanceService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  cashAdvanceUpdate(id: String!, data: CashAdvanceInput!): CashAdvance!
`;

const resolver = {
  cashAdvanceUpdate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.cashAdvanceEdit,
    );

    return new CashAdvanceService(context).update(
      args.id,
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
