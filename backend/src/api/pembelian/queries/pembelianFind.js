const PembelianService = require('../../../services/pembelianService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  pembelianFind(id: String!): Pembelian!
`;

const resolver = {
  pembelianFind: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.pembelianRead,
    );

    return new PembelianService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
