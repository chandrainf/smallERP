const KasKeluarService = require('../../../services/kasKeluarService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  kasKeluarDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  kasKeluarDestroy: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.kasKeluarDestroy,
    );

    await new KasKeluarService(context).destroyAll(
      args.ids,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
