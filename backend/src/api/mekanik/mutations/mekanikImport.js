const MekanikService = require('../../../services/mekanikService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  mekanikImport(data: MekanikInput!, importHash: String!): Boolean
`;

const resolver = {
  mekanikImport: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.mekanikImport,
    );

    await new MekanikService(context).import(
      args.data,
      args.importHash,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
