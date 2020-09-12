const StatusAlatService = require('../../../services/statusAlatService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  statusAlatImport(data: StatusAlatInput!, importHash: String!): Boolean
`;

const resolver = {
  statusAlatImport: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.statusAlatImport,
    );

    await new StatusAlatService(context).import(
      args.data,
      args.importHash,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
