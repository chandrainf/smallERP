const schema = `
  input MekanikFilterInput {
    id: String
    mekanik: String
    proyeks: [ String! ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
