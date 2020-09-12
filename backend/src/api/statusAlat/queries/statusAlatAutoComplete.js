const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const StatusAlatService = require('../../../services/statusAlatService');

const schema = `
  statusAlatAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  statusAlatAutocomplete: async (
    root,
    args,
    context,
    info,
  ) => {
    new PermissionChecker(context).validateHas(
      permissions.statusAlatAutocomplete,
    );

    return new StatusAlatService(
      context,
    ).findAllAutocomplete(args.query, args.limit);
  },
};

exports.schema = schema;
exports.resolver = resolver;
