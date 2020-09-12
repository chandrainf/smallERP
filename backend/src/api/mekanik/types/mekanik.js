const schema = `
  type Mekanik {
    id: String!
    mekanik: String!
    proyeks: [ Proyek! ]
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
