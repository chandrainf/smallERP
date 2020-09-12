const KeluhanService = require('../../../services/keluhanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  keluhanList(filter: KeluhanFilterInput, limit: Int, offset: Int, orderBy: KeluhanOrderByEnum): KeluhanPage!
`;

const resolver = {
  keluhanList: async (root, args, context, info) => {
    new PermissionChecker(context).validateHas(
      permissions.keluhanRead,
    );

    return new KeluhanService(context).findAndCountAll({
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
