const SparepartService = require('../../../services/sparepartService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  sparepartImport(data: SparepartInput!, importHash: String!): Boolean
`;

const resolver = {
  sparepartImport: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.sparepartImport,
    );

    await new SparepartService(context).import(
      args.data,
      args.importHash,
    );

    return true;
  },
};

exports.schema = schema;
exports.resolver = resolver;
