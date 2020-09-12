const PermintaanPerbaikanService = require('../../../services/permintaanPerbaikanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  permintaanPerbaikanDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  permintaanPerbaikanDestroy: async (
    root,
    args,
    context,
  ) => {
    new PermissionChecker(context).validateHas(
      permissions.permintaanPerbaikanDestroy,
    );

    await new PermintaanPerbaikanService(
      context,
    ).destroyAll(args.ids);

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
