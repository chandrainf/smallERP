const KasMasukService = require('../../../services/kasMasukService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  kasMasukList(filter: KasMasukFilterInput, limit: Int, offset: Int, orderBy: KasMasukOrderByEnum): KasMasukPage!
`;

const resolver = {
  kasMasukList: async (root, args, context, info) => {
    new PermissionChecker(context).validateHas(
      permissions.kasMasukRead,
    );

    return new KasMasukService(context).findAndCountAll({
      ...args,
      requestedAttributes: graphqlSelectRequestedAttributes(
        info,
        'rows',
      ),
    });
  },
};

exports.schema = schema;
exports.resolver = resolver;
