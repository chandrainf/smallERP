const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const DeklarasiService = require('../../../services/deklarasiService');

const schema = `
  deklarasiAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  deklarasiAutocomplete: async (
    root,
    args,
    context,
    info,
  ) => {
    new PermissionChecker(context).validateHas(
      permissions.deklarasiAutocomplete,
    );

    return new DeklarasiService(
      context,
    ).findAllAutocomplete(args.query, args.limit);
  },
};

exports.schema = schema;
exports.resolver = resolver;
