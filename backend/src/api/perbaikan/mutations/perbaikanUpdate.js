const PerbaikanService = require('../../../services/perbaikanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  perbaikanUpdate(id: String!, data: PerbaikanInput!): Perbaikan!
`;

const resolver = {
  perbaikanUpdate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.perbaikanEdit,
    );

    return new PerbaikanService(context).update(
      args.id,
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
