const SparepartService = require('../../../services/sparepartService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  sparepartCreate(data: SparepartInput!): Sparepart!
`;

const resolver = {
  sparepartCreate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.sparepartCreate,
    );

    return new SparepartService(context).create(args.data);
  },
};

exports.schema = schema;
exports.resolver = resolver;
