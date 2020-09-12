const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const DaftarAlatService = require('../../../services/daftarAlatService');

const schema = `
  daftarAlatAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  daftarAlatAutocomplete: async (
    root,
    args,
    context,
    info,
  ) => {
    new PermissionChecker(context).validateHas(
      permissions.daftarAlatAutocomplete,
    );

    return new DaftarAlatService(
      context,
    ).findAllAutocomplete(args.query, args.limit);
  },
};

exports.schema = schema;
exports.resolver = resolver;
