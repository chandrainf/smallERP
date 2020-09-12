const KasMasukService = require('../../../services/kasMasukService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  kasMasukImport(data: KasMasukInput!, importHash: String!): Boolean
`;

const resolver = {
  kasMasukImport: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.kasMasukImport,
    );

    await new KasMasukService(context).import(
      args.data,
      args.importHash,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
