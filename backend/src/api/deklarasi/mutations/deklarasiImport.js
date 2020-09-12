const DeklarasiService = require('../../../services/deklarasiService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  deklarasiImport(data: DeklarasiInput!, importHash: String!): Boolean
`;

const resolver = {
  deklarasiImport: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.deklarasiImport,
    );

    await new DeklarasiService(context).import(
      args.data,
      args.importHash,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
