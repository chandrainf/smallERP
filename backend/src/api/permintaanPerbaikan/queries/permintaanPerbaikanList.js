const PermintaanPerbaikanService = require('../../../services/permintaanPerbaikanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  permintaanPerbaikanList(filter: PermintaanPerbaikanFilterInput, limit: Int, offset: Int, orderBy: PermintaanPerbaikanOrderByEnum): PermintaanPerbaikanPage!
`;

const resolver = {
  permintaanPerbaikanList: async (
    root,
    args,
    context,
    info,
  ) => {
    new PermissionChecker(context).validateHas(
      permissions.permintaanPerbaikanRead,
    );

    return new PermintaanPerbaikanService(
      context,
    ).findAndCountAll({
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
