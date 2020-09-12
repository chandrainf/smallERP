const PerbaikanService = require('../../../services/perbaikanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  perbaikanCreate(data: PerbaikanInput!): Perbaikan!
`;

const resolver = {
  perbaikanCreate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.perbaikanCreate,
    );

    return new PerbaikanService(context).create(args.data);
  },
};

exports.schema = schema;
exports.resolver = resolver;
