const StatusAlatService = require('../../../services/statusAlatService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  statusAlatUpdate(id: String!, data: StatusAlatInput!): StatusAlat!
`;

const resolver = {
  statusAlatUpdate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.statusAlatEdit,
    );

    return new StatusAlatService(context).update(
      args.id,
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
