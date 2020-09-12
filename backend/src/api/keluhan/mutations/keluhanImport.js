const KeluhanService = require('../../../services/keluhanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  keluhanImport(data: KeluhanInput!, importHash: String!): Boolean
`;

const resolver = {
  keluhanImport: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.keluhanImport,
    );

    await new KeluhanService(context).import(
      args.data,
      args.importHash,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
