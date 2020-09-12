const SupplierService = require('../../../services/supplierService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  supplierCreate(data: SupplierInput!): Supplier!
`;

const resolver = {
  supplierCreate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.supplierCreate,
    );

    return new SupplierService(context).create(args.data);
  },
};

exports.schema = schema;
exports.resolver = resolver;
