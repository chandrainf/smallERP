const SupplierService = require('../../../services/supplierService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  supplierList(filter: SupplierFilterInput, limit: Int, offset: Int, orderBy: SupplierOrderByEnum): SupplierPage!
`;

const resolver = {
  supplierList: async (root, args, context, info) => {
    new PermissionChecker(context).validateHas(
      permissions.supplierRead,
    );

    return new SupplierService(context).findAndCountAll({
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
