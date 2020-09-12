const schema = `
  type SparepartPage {
    rows: [Sparepart!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
