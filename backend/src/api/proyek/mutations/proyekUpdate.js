const ProyekService = require('../../../services/proyekService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  proyekUpdate(id: String!, data: ProyekInput!): Proyek!
`;

const resolver = {
  proyekUpdate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.proyekEdit,
    );

    return new ProyekService(context).update(
      args.id,
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
