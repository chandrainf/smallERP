const KeluhanService = require('../../../services/keluhanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  keluhanCreate(data: KeluhanInput!): Keluhan!
`;

const resolver = {
  keluhanCreate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.keluhanCreate,
    );

    return new KeluhanService(context).create(args.data);
  },
};

exports.schema = schema;
exports.resolver = resolver;
