const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const SatuanService = require('../../../services/satuanService');

const schema = `
  satuanAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  satuanAutocomplete: async (root, args, context, info) => {
    new PermissionChecker(context).validateHas(
      permissions.satuanAutocomplete,
    );

    return new SatuanService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
