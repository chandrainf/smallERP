const CashAdvanceService = require('../../../services/cashAdvanceService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  cashAdvanceImport(data: CashAdvanceInput!, importHash: String!): Boolean
`;

const resolver = {
  cashAdvanceImport: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.cashAdvanceImport,
    );

    await new CashAdvanceService(context).import(
      args.data,
      args.importHash,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
