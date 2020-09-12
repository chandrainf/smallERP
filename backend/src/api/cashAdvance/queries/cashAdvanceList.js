const CashAdvanceService = require('../../../services/cashAdvanceService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  cashAdvanceList(filter: CashAdvanceFilterInput, limit: Int, offset: Int, orderBy: CashAdvanceOrderByEnum): CashAdvancePage!
`;

const resolver = {
  cashAdvanceList: async (root, args, context, info) => {
    new PermissionChecker(context).validateHas(
      permissions.cashAdvanceRead,
    );

    return new CashAdvanceService(context).findAndCountAll({
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
