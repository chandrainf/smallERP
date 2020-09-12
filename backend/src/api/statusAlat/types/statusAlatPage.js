const schema = `
  type StatusAlatPage {
    rows: [StatusAlat!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
