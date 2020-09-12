const KasKeluarService = require('../../../services/kasKeluarService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  kasKeluarUpdate(id: String!, data: KasKeluarInput!): KasKeluar!
`;

const resolver = {
  kasKeluarUpdate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.kasKeluarEdit,
    );

    return new KasKeluarService(context).update(
      args.id,
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
