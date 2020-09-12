const PurchaseRequestService = require('../../../services/purchaseRequestService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  purchaseRequestList(filter: PurchaseRequestFilterInput, limit: Int, offset: Int, orderBy: PurchaseRequestOrderByEnum): PurchaseRequestPage!
`;

const resolver = {
  purchaseRequestList: async (
    root,
    args,
    context,
    info,
  ) => {
    new PermissionChecker(context).validateHas(
      permissions.purchaseRequestRead,
    );

    return new PurchaseRequestService(
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
