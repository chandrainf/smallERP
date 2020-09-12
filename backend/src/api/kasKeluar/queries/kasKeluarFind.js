const KasKeluarService = require('../../../services/kasKeluarService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  kasKeluarFind(id: String!): KasKeluar!
`;

const resolver = {
  kasKeluarFind: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.kasKeluarRead,
    );

    return new KasKeluarService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
