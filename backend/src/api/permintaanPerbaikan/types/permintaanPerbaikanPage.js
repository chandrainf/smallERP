const schema = `
  type PermintaanPerbaikanPage {
    rows: [PermintaanPerbaikan!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
