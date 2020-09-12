const schema = `
  type SatuanPage {
    rows: [Satuan!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
