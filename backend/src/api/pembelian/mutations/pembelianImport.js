const PembelianService = require('../../../services/pembelianService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  pembelianImport(data: PembelianInput!, importHash: String!): Boolean
`;

const resolver = {
  pembelianImport: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.pembelianImport,
    );

    await new PembelianService(context).import(
      args.data,
      args.importHash,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
