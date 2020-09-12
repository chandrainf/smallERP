const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const PerbaikanService = require('../../../services/perbaikanService');

const schema = `
  perbaikanAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  perbaikanAutocomplete: async (
    root,
    args,
    context,
    info,
  ) => {
    new PermissionChecker(context).validateHas(
      permissions.perbaikanAutocomplete,
    );

    return new PerbaikanService(
      context,
    ).findAllAutocomplete(args.query, args.limit);
  },
};

exports.schema = schema;
exports.resolver = resolver;
