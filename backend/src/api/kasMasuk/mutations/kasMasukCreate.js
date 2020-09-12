const KasMasukService = require('../../../services/kasMasukService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  kasMasukCreate(data: KasMasukInput!): KasMasuk!
`;

const resolver = {
  kasMasukCreate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.kasMasukCreate,
    );

    return new KasMasukService(context).create(args.data);
  },
};

exports.schema = schema;
exports.resolver = resolver;
