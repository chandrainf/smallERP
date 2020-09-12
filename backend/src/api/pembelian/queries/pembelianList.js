const PembelianService = require('../../../services/pembelianService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  pembelianList(filter: PembelianFilterInput, limit: Int, offset: Int, orderBy: PembelianOrderByEnum): PembelianPage!
`;

const resolver = {
  pembelianList: async (root, args, context, info) => {
    new PermissionChecker(context).validateHas(
      permissions.pembelianRead,
    );

    return new PembelianService(context).findAndCountAll({
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
