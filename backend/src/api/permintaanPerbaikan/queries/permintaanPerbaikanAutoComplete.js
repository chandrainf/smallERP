const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const PermintaanPerbaikanService = require('../../../services/permintaanPerbaikanService');

const schema = `
  permintaanPerbaikanAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  permintaanPerbaikanAutocomplete: async (
    root,
    args,
    context,
    info,
  ) => {
    new PermissionChecker(context).validateHas(
      permissions.permintaanPerbaikanAutocomplete,
    );

    return new PermintaanPerbaikanService(
      context,
    ).findAllAutocomplete(args.query, args.limit);
  },
};

exports.schema = schema;
exports.resolver = resolver;
