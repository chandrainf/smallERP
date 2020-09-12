const KasKeluarService = require('../../../services/kasKeluarService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  kasKeluarCreate(data: KasKeluarInput!): KasKeluar!
`;

const resolver = {
  kasKeluarCreate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.kasKeluarCreate,
    );

    return new KasKeluarService(context).create(args.data);
  },
};

exports.schema = schema;
exports.resolver = resolver;
