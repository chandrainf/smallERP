const SatuanService = require('../../../services/satuanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  satuanImport(data: SatuanInput!, importHash: String!): Boolean
`;

const resolver = {
  satuanImport: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.satuanImport,
    );

    await new SatuanService(context).import(
      args.data,
      args.importHash,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
