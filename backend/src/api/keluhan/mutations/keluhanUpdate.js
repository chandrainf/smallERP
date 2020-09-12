const KeluhanService = require('../../../services/keluhanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  keluhanUpdate(id: String!, data: KeluhanInput!): Keluhan!
`;

const resolver = {
  keluhanUpdate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.keluhanEdit,
    );

    return new KeluhanService(context).update(
      args.id,
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
