const SatuanService = require('../../../services/satuanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  satuanList(filter: SatuanFilterInput, limit: Int, offset: Int, orderBy: SatuanOrderByEnum): SatuanPage!
`;

const resolver = {
  satuanList: async (root, args, context, info) => {
    new PermissionChecker(context).validateHas(
      permissions.satuanRead,
    );

    return new SatuanService(context).findAndCountAll({
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
