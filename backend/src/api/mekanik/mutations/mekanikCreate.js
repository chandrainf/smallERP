const MekanikService = require('../../../services/mekanikService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  mekanikCreate(data: MekanikInput!): Mekanik!
`;

const resolver = {
  mekanikCreate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.mekanikCreate,
    );

    return new MekanikService(context).create(args.data);
  },
};

exports.schema = schema;
exports.resolver = resolver;
