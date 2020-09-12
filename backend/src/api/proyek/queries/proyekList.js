const ProyekService = require('../../../services/proyekService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  proyekList(filter: ProyekFilterInput, limit: Int, offset: Int, orderBy: ProyekOrderByEnum): ProyekPage!
`;

const resolver = {
  proyekList: async (root, args, context, info) => {
    new PermissionChecker(context).validateHas(
      permissions.proyekRead,
    );

    return new ProyekService(context).findAndCountAll({
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
