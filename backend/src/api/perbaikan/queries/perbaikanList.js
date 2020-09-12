const PerbaikanService = require('../../../services/perbaikanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  perbaikanList(filter: PerbaikanFilterInput, limit: Int, offset: Int, orderBy: PerbaikanOrderByEnum): PerbaikanPage!
`;

const resolver = {
  perbaikanList: async (root, args, context, info) => {
    new PermissionChecker(context).validateHas(
      permissions.perbaikanRead,
    );

    return new PerbaikanService(context).findAndCountAll({
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
