const SupplierService = require('../../../services/supplierService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  supplierUpdate(id: String!, data: SupplierInput!): Supplier!
`;

const resolver = {
  supplierUpdate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.supplierEdit,
    );

    return new SupplierService(context).update(
      args.id,
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
