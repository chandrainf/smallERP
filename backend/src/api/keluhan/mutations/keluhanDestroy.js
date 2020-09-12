const KeluhanService = require('../../../services/keluhanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  keluhanDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  keluhanDestroy: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.keluhanDestroy,
    );

    await new KeluhanService(context).destroyAll(args.ids);

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
