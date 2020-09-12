const SupplierService = require('../../../services/supplierService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  supplierDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  supplierDestroy: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.supplierDestroy,
    );

    await new SupplierService(context).destroyAll(args.ids);

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
