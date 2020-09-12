const SparepartService = require('../../../services/sparepartService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  sparepartList(filter: SparepartFilterInput, limit: Int, offset: Int, orderBy: SparepartOrderByEnum): SparepartPage!
`;

const resolver = {
  sparepartList: async (root, args, context, info) => {
    new PermissionChecker(context).validateHas(
      permissions.sparepartRead,
    );

    return new SparepartService(context).findAndCountAll({
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
