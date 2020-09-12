const schema = `
  type PerbaikanPage {
    rows: [Perbaikan!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
