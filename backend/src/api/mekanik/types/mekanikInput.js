const schema = `
  input MekanikInput {
    mekanik: String!
    proyeks: [ String! ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
