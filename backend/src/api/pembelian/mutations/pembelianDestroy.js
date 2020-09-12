const PembelianService = require('../../../services/pembelianService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  pembelianDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  pembelianDestroy: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.pembelianDestroy,
    );

    await new PembelianService(context).destroyAll(
      args.ids,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
