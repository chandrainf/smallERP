const StatusAlatService = require('../../../services/statusAlatService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  statusAlatDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  statusAlatDestroy: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.statusAlatDestroy,
    );

    await new StatusAlatService(context).destroyAll(
      args.ids,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
