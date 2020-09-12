const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const SupplierService = require('../../../services/supplierService');

const schema = `
  supplierAutocomplete(query: String, limit: Int): [AutocompleteOption!]!
`;

const resolver = {
  supplierAutocomplete: async (
    root,
    args,
    context,
    info,
  ) => {
    new PermissionChecker(context).validateHas(
      permissions.supplierAutocomplete,
    );

    return new SupplierService(context).findAllAutocomplete(
      args.query,
      args.limit,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
