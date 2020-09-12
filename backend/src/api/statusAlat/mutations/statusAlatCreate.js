const StatusAlatService = require('../../../services/statusAlatService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  statusAlatCreate(data: StatusAlatInput!): StatusAlat!
`;

const resolver = {
  statusAlatCreate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.statusAlatCreate,
    );
    return new StatusAlatService(context).create(args.data);
  },
};

exports.schema = schema;
exports.resolver = resolver;
