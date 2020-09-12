const DeklarasiService = require('../../../services/deklarasiService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  deklarasiList(filter: DeklarasiFilterInput, limit: Int, offset: Int, orderBy: DeklarasiOrderByEnum): DeklarasiPage!
`;

const resolver = {
  deklarasiList: async (root, args, context, info) => {
    new PermissionChecker(context).validateHas(
      permissions.deklarasiRead,
    );

    return new DeklarasiService(context).findAndCountAll({
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
