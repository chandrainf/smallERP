const MekanikService = require('../../../services/mekanikService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  mekanikFind(id: String!): Mekanik!
`;

const resolver = {
  mekanikFind: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.mekanikRead,
    );

    return new MekanikService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
