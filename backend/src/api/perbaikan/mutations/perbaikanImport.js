const PerbaikanService = require('../../../services/perbaikanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  perbaikanImport(data: PerbaikanInput!, importHash: String!): Boolean
`;

const resolver = {
  perbaikanImport: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.perbaikanImport,
    );

    await new PerbaikanService(context).import(
      args.data,
      args.importHash,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
