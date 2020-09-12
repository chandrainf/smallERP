const PembelianService = require('../../../services/pembelianService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  pembelianCreate(data: PembelianInput!): Pembelian!
`;

const resolver = {
  pembelianCreate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.pembelianCreate,
    );

    return new PembelianService(context).create(args.data);
  },
};

exports.schema = schema;
exports.resolver = resolver;
