const KasMasukService = require('../../../services/kasMasukService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  kasMasukFind(id: String!): KasMasuk!
`;

const resolver = {
  kasMasukFind: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.kasMasukRead,
    );

    return new KasMasukService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
