const schema = `
  input KasKeluarInput {
    alamat: String
    telepon1: String
    telepon2: String
    email: String
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
