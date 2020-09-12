const DeklarasiService = require('../../../services/deklarasiService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  deklarasiFind(id: String!): Deklarasi!
`;

const resolver = {
  deklarasiFind: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.deklarasiRead,
    );

    return new DeklarasiService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
