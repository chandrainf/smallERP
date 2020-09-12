const schema = `
  input PurchaseRequestInput {
    alamat: String
    telepon1: String
    telepon2: String
    email: String
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
