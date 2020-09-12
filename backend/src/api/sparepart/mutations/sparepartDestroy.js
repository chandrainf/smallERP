const SparepartService = require('../../../services/sparepartService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  sparepartDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  sparepartDestroy: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.sparepartDestroy,
    );

    await new SparepartService(context).destroyAll(
      args.ids,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
