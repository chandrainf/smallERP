const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const ProyekService = require('../../../services/proyekService');

const schema = `
  proyekAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  proyekAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context).validateHas(
      permissions.proyekAutocomplete,
    );

    return new ProyekService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
