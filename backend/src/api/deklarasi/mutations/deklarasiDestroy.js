const DeklarasiService = require('../../../services/deklarasiService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  deklarasiDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  deklarasiDestroy: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.deklarasiDestroy,
    );

    await new DeklarasiService(context).destroyAll(
      args.ids,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
