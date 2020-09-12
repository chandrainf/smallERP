const DeklarasiService = require('../../../services/deklarasiService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  deklarasiCreate(data: DeklarasiInput!): Deklarasi!
`;

const resolver = {
  deklarasiCreate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.deklarasiCreate,
    );
    return new DeklarasiService(context).create(args.data);
  },
};

exports.schema = schema;
exports.resolver = resolver;
