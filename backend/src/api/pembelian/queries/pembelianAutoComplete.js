const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const pembelianService = require('../../../services/pembelianService');

const schema = `
  pembelianAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  pembelianAutocomplete: async (
    root,
    args,
    context,
    info,
  ) => {
    new PermissionChecker(context).validateHas(
      permissions.pembelianAutocomplete,
    );

    return new pembelianService(
      context,
    ).findAllAutocomplete(args.query, args.limit);
  },
};

exports.schema = schema;
exports.resolver = resolver;
