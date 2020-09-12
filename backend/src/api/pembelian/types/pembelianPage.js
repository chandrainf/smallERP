const schema = `
  type PembelianPage {
    rows: [Pembelian!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
