const MekanikService = require('../../../services/mekanikService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  mekanikUpdate(id: String!, data: MekanikInput!): Mekanik!
`;

const resolver = {
  mekanikUpdate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.mekanikEdit,
    );

    return new MekanikService(context).update(
      args.id,
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
