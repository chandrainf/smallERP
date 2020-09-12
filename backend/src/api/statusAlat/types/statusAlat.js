const schema = `
  type StatusAlat {
    id: String!
    status: String!
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
