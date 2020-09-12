const SupplierService = require('../../../services/supplierService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  supplierFind(id: String!): Supplier!
`;

const resolver = {
  supplierFind: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.supplierRead,
    );

    return new SupplierService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
