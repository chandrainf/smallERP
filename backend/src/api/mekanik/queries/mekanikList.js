const MekanikService = require('../../../services/mekanikService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  mekanikList(filter: MekanikFilterInput, limit: Int, offset: Int, orderBy: MekanikOrderByEnum): MekanikPage!
`;

const resolver = {
  mekanikList: async (root, args, context, info) => {
    new PermissionChecker(context).validateHas(
      permissions.mekanikRead,
    );

    return new MekanikService(context).findAndCountAll({
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
