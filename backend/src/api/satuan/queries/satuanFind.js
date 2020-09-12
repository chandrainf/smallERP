const SatuanService = require('../../../services/satuanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  satuanFind(id: String!): Satuan!
`;

const resolver = {
  satuanFind: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.satuanRead,
    );

    return new SatuanService(context).findById(args.id);
  },
};

exports.schema = schema;
exports.resolver = resolver;
