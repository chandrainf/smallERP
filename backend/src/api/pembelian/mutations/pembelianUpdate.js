const PembelianService = require('../../../services/pembelianService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  pembelianUpdate(id: String!, data: PembelianInput!): Pembelian!
`;

const resolver = {
  pembelianUpdate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.pembelianEdit,
    );

    return new PembelianService(context).update(
      args.id,
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
