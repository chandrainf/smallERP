const DaftarAlatService = require('../../../services/daftarAlatService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  daftarAlatUpdate(id: String!, data: DaftarAlatInput!): DaftarAlat!
`;

const resolver = {
  daftarAlatUpdate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.daftarAlatEdit,
    );

    return new DaftarAlatService(context).update(
      args.id,
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
