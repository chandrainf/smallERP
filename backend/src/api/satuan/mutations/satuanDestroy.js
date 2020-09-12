const SatuanService = require('../../../services/satuanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  satuanDestroy(ids: [String!]!): Boolean
`;

const resolver = {
  satuanDestroy: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.satuanDestroy,
    );

    await new SatuanService(context).destroyAll(args.ids);

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
