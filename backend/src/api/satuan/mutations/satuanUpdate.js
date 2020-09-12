const SatuanService = require('../../../services/satuanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  satuanUpdate(id: String!, data: SatuanInput!): Satuan!
`;

const resolver = {
  satuanUpdate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.satuanEdit,
    );

    return new SatuanService(context).update(
      args.id,
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
