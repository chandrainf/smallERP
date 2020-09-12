const schema = `
  enum StatusAlatOrderByEnum {
    id_ASC
    id_DESC
    status_ASC
    status_DESC
    createdAt_ASC
    createdAt_DESC
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
