const SupplierService = require('../../../services/supplierService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  supplierImport(data: SupplierInput!, importHash: String!): Boolean
`;

const resolver = {
  supplierImport: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.supplierImport,
    );

    await new SupplierService(context).import(
      args.data,
      args.importHash,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
