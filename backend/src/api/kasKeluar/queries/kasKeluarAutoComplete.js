const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const KasKeluarService = require('../../../services/kasKeluarService');

const schema = `
  kasKeluarAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  kasKeluarAutocomplete: async (
    root,
    args,
    context,
    info,
  ) => {
    new PermissionChecker(context).validateHas(
      permissions.kasKeluarAutocomplete,
    );

    return new KasKeluarService(
      context,
    ).findAllAutocomplete(args.query, args.limit);
  },
};

exports.schema = schema;
exports.resolver = resolver;
