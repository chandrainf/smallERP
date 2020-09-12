const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const CashAdvanceService = require('../../../services/cashAdvanceService');

const schema = `
  cashAdvanceAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  cashAdvanceAutocomplete: async (
    root,
    args,
    context,
    info,
  ) => {
    new PermissionChecker(context).validateHas(
      permissions.cashAdvanceAutocomplete,
    );

    return new CashAdvanceService(
      context,
    ).findAllAutocomplete(args.query, args.limit);
  },
};

exports.schema = schema;
exports.resolver = resolver;
