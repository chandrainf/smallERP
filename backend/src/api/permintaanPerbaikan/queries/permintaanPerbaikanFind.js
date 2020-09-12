const PermintaanPerbaikanService = require('../../../services/permintaanPerbaikanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  permintaanPerbaikanFind(id: String!): PermintaanPerbaikan!
`;

const resolver = {
  permintaanPerbaikanFind: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.permintaanPerbaikanRead,
    );

    return new PermintaanPerbaikanService(context).findById(
      args.id,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
