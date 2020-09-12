const schema = `
  type DaftarAlatPage {
    rows: [DaftarAlat!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
