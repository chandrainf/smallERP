const schema = `
  type DeklarasiPage {
    rows: [Deklarasi!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
