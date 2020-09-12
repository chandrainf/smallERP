const DaftarAlatService = require('../../../services/daftarAlatService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  daftarAlatDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  daftarAlatDestroy: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.daftarAlatDestroy,
    );

    await new DaftarAlatService(context).destroyAll(
      args.ids,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
