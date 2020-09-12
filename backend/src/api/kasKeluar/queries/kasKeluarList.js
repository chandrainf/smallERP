const KasKeluarService = require('../../../services/kasKeluarService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;
const graphqlSelectRequestedAttributes = require('../../shared/utils/graphqlSelectRequestedAttributes');

const schema = `
  kasKeluarList(filter: KasKeluarFilterInput, limit: Int, offset: Int, orderBy: KasKeluarOrderByEnum): KasKeluarPage!
`;

const resolver = {
  kasKeluarList: async (root, args, context, info) => {
    new PermissionChecker(context).validateHas(
      permissions.kasKeluarRead,
    );

    return new KasKeluarService(context).findAndCountAll({
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
