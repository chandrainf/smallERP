const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const CashPaymentService = require('../../../services/cashPaymentService');

const schema = `
  cashPaymentAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  cashPaymentAutocomplete: async (
    root,
    args,
    context,
    info,
  ) => {
    new PermissionChecker(context).validateHas(
      permissions.cashPaymentAutocomplete,
    );

    return new CashPaymentService(
      context,
    ).findAllAutocomplete(args.query, args.limit);
  },
};

exports.schema = schema;
exports.resolver = resolver;
