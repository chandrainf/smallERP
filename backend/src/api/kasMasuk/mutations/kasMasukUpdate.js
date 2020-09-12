const KasMasukService = require('../../../services/kasMasukService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  kasMasukUpdate(id: String!, data: KasMasukInput!): KasMasuk!
`;

const resolver = {
  kasMasukUpdate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.kasMasukEdit,
    );

    return new KasMasukService(context).update(
      args.id,
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
