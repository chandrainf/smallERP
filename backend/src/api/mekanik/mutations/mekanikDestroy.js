const MekanikService = require('../../../services/mekanikService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  mekanikDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  mekanikDestroy: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.mekanikDestroy,
    );

    await new MekanikService(context).destroyAll(args.ids);

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
