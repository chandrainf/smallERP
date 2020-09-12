const ProyekService = require('../../../services/proyekService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  proyekCreate(data: ProyekInput!): Proyek!
`;

const resolver = {
  proyekCreate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.proyekCreate,
    );

    return new ProyekService(context).create(args.data);
  },
};

exports.schema = schema;
exports.resolver = resolver;
