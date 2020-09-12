const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const KasMasukService = require('../../../services/kasMasukService');

const schema = `
  kasMasukAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  kasMasukAutocomplete: async (
    root,
    args,
    context,
    info,
  ) => {
    new PermissionChecker(context).validateHas(
      permissions.kasMasukAutocomplete,
    );

    return new KasMasukService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
