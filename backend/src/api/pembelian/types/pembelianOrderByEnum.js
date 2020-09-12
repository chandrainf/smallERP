const schema = `
  enum PembelianOrderByEnum {
    id_ASC
    id_DESC
    name_ASC
    name_DESC
    createdAt_ASC
    createdAt_DESC
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
