const SatuanService = require('../../../services/satuanService');
const PermissionChecker = require('../../../services/iam/permissionChecker');
const permissions = require('../../../security/permissions')
  .values;

const schema = `
  satuanCreate(data: SatuanInput!): Satuan!
`;

const resolver = {
  satuanCreate: async (root, args, context) => {
    new PermissionChecker(context).validateHas(
      permissions.satuanCreate,
    );
    return new SatuanService(context).create(args.data);
  },
};

exports.schema = schema;
exports.resolver = resolver;
