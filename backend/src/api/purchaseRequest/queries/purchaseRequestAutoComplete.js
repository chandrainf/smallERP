const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const PurchaseRequestService = require('../../../services/purchaseRequestService');

const schema = `
  purchaseRequestAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  purchaseRequestAutocomplete: async (
    root,
    args,
    context,
    info,
  ) => {
    new PermissionChecker(context).validateHas(
      permissions.purchaseRequestAutocomplete,
    );

    return new PurchaseRequestService(
      context,
    ).findAllAutocomplete(args.query, args.limit);
  },
};

exports.schema = schema;
exports.resolver = resolver;
