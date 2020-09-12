const PerbaikanService = require('../../../services/perbaikanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  perbaikanDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  perbaikanDestroy: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.perbaikanDestroy,
    );

    await new PerbaikanService(context).destroyAll(
      args.ids,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
