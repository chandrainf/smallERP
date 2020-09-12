const DaftarAlatService = require('../../../services/daftarAlatService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  daftarAlatFind(id: String!): DaftarAlat!
`;

const resolver = {
  daftarAlatFind: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.daftarAlatRead,
    );

    return new DaftarAlatService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
