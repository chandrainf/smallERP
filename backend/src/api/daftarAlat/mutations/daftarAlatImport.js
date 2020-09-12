const DaftarAlatService = require('../../../services/daftarAlatService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  daftarAlatImport(data: DaftarAlatInput!, importHash: String!): Boolean
`;

const resolver = {
  daftarAlatImport: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.daftarAlatImport,
    );

    await new DaftarAlatService(context).import(
      args.data,
      args.importHash,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
