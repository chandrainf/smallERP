const StatusAlatService = require('../../../services/statusAlatService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  statusAlatList(filter: StatusAlatFilterInput, limit: Int, offset: Int, orderBy: StatusAlatOrderByEnum): StatusAlatPage!
`;

const resolver = {
  statusAlatList: async (root, args, context, info) => {
    new PermissionChecker(context).validateHas(
      permissions.statusAlatRead,
    );

    return new StatusAlatService(context).findAndCountAll({
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
