const schema = `
  type KasMasukPage {
    rows: [KasMasuk!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
