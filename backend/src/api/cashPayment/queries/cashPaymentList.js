const CashPaymentService = require('../../../services/cashPaymentService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  cashPaymentList(filter: CashPaymentFilterInput, limit: Int, offset: Int, orderBy: CashPaymentOrderByEnum): CashPaymentPage!
`;

const resolver = {
  cashPaymentList: async (root, args, context, info) => {
    new PermissionChecker(context).validateHas(
      permissions.cashPaymentRead,
    );

    return new CashPaymentService(context).findAndCountAll({
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
