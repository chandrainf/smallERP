const ProyekService = require('../../../services/proyekService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  proyekImport(data: ProyekInput!, importHash: String!): Boolean
`;

const resolver = {
  proyekImport: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.proyekImport,
    );

    await new ProyekService(context).import(
      args.data,
      args.importHash,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
