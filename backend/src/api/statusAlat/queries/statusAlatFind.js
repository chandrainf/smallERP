const StatusAlatService = require('../../../services/statusAlatService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  statusAlatFind(id: String!): StatusAlat!
`;

const resolver = {
  statusAlatFind: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.statusAlatRead,
    );

    return new StatusAlatService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
