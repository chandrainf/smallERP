const ProyekService = require('../../../services/proyekService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  proyekFind(id: String!): Proyek!
`;

const resolver = {
  proyekFind: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.proyekRead,
    );

    return new ProyekService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
