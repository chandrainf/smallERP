const schema = `
  type KeluhanPage {
    rows: [Keluhan!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
