const KeluhanService = require('../../../services/keluhanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  keluhanFind(id: String!): Keluhan!
`;

const resolver = {
  keluhanFind: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.keluhanRead,
    );

    return new KeluhanService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
