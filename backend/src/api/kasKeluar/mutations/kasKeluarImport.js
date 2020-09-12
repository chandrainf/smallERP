const KasKeluarService = require('../../../services/kasKeluarService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  kasKeluarImport(data: KasKeluarInput!, importHash: String!): Boolean
`;

const resolver = {
  kasKeluarImport: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.kasKeluarImport,
    );

    await new KasKeluarService(context).import(
      args.data,
      args.importHash,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
