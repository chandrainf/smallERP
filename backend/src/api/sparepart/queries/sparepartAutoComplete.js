const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const SparepartService = require('../../../services/sparepartService');

const schema = `
  sparepartAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  sparepartAutocomplete: async (
    root,
    args,
    context,
    info,
  ) => {
    new PermissionChecker(context).validateHas(
      permissions.sparepartAutocomplete,
    );

    return new SparepartService(
      context,
    ).findAllAutocomplete(args.query, args.limit);
  },
};

exports.schema = schema;
exports.resolver = resolver;
