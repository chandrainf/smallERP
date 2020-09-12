const KasMasukService = require('../../../services/kasMasukService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  kasMasukDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  kasMasukDestroy: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.kasMasukDestroy,
    );

    await new KasMasukService(context).destroyAll(args.ids);

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
