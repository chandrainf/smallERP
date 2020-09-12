const SparepartService = require('../../../services/sparepartService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  sparepartFind(id: String!): Sparepart!
`;

const resolver = {
  sparepartFind: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.sparepartRead,
    );

    return new SparepartService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
