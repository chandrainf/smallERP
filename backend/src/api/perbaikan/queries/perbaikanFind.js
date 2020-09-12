const PerbaikanService = require('../../../services/perbaikanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  perbaikanFind(id: String!): Perbaikan!
`;

const resolver = {
  perbaikanFind: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.perbaikanRead,
    );

    return new PerbaikanService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
