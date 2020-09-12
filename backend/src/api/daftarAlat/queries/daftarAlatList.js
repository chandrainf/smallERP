const DaftarAlatService = require('../../../services/daftarAlatService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  daftarAlatList(filter: DaftarAlatFilterInput, limit: Int, offset: Int, orderBy: DaftarAlatOrderByEnum): DaftarAlatPage!
`;

const resolver = {
  daftarAlatList: async (root, args, context, info) => {
    new PermissionChecker(context).validateHas(
      permissions.daftarAlatRead,
    );

    return new DaftarAlatService(context).findAndCountAll({
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
