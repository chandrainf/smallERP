const ProyekService = require('../../../services/proyekService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  proyekDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  proyekDestroy: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.proyekDestroy,
    );

    await new ProyekService(context).destroyAll(args.ids);

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
