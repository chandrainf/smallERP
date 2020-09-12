const DaftarAlatService = require('../../../services/daftarAlatService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  daftarAlatCreate(data: DaftarAlatInput!): DaftarAlat!
`;

const resolver = {
  daftarAlatCreate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.daftarAlatCreate,
    );

    return new DaftarAlatService(context).create(args.data);
  },
};

exports.schema = schema;
exports.resolver = resolver;
