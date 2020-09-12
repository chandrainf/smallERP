const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const MekanikService = require('../../../services/mekanikService');

const schema = `
  mekanikAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  mekanikAutocomplete: async (
    root,
    args,
    context,
    info,
  ) => {
    new PermissionChecker(context).validateHas(
      permissions.mekanikAutocomplete,
    );

    return new MekanikService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
