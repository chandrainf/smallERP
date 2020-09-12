const schema = `
  type KasKeluarPage {
    rows: [KasKeluar!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
