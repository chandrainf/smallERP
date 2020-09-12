const PermintaanPerbaikanService = require('../../../services/permintaanPerbaikanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  permintaanPerbaikanCreate(data: PermintaanPerbaikanInput!): PermintaanPerbaikan!
`;

const resolver = {
  permintaanPerbaikanCreate: async (
    root,
    args,
    context,
  ) => {
    new PermissionChecker(context).validateHas(
      permissions.permintaanPerbaikanCreate,
    );

    return new PermintaanPerbaikanService(context).create(
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
