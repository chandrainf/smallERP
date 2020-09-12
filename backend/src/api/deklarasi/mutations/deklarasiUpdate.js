const DeklarasiService = require('../../../services/deklarasiService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  deklarasiUpdate(id: String!, data: DeklarasiInput!): Deklarasi!
`;

const resolver = {
  deklarasiUpdate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.deklarasiEdit,
    );

    return new DeklarasiService(context).update(
      args.id,
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
