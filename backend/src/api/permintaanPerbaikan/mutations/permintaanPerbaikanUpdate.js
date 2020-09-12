const PermintaanPerbaikanService = require('../../../services/permintaanPerbaikanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  permintaanPerbaikanUpdate(id: String!, data: PermintaanPerbaikanInput!): PermintaanPerbaikan!
`;

const resolver = {
  permintaanPerbaikanUpdate: async (
    root,
    args,
    context,
  ) => {
    new PermissionChecker(context).validateHas(
      permissions.permintaanPerbaikanEdit,
    );

    return new PermintaanPerbaikanService(context).update(
      args.id,
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
