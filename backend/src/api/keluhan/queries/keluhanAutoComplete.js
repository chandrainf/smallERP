const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const KeluhanService = require('../../../services/keluhanService');

const schema = `
  keluhanAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  keluhanAutocomplete: async (
    root,
    args,
    context,
    info,
  ) => {
    new PermissionChecker(context).validateHas(
      permissions.keluhanAutocomplete,
    );

    return new KeluhanService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
