const PermintaanPerbaikanService = require('../../../services/permintaanPerbaikanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  permintaanPerbaikanImport(data: PermintaanPerbaikanInput!, importHash: String!): Boolean
`;

const resolver = {
  permintaanPerbaikanImport: async (
    root,
    args,
    context,
  ) => {
    new PermissionChecker(context).validateHas(
      permissions.permintaanPerbaikanImport,
    );

    await new PermintaanPerbaikanService(context).import(
      args.data,
      args.importHash,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
