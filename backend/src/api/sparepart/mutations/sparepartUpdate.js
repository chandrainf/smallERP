const SparepartService = require('../../../services/sparepartService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  sparepartUpdate(id: String!, data: SparepartInput!): Sparepart!
`;

const resolver = {
  sparepartUpdate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.sparepartEdit,
    );

    return new SparepartService(context).update(
      args.id,
      args.data,
    );
  },
};

exports.schema = schema;
exports.resolver = resolver;
