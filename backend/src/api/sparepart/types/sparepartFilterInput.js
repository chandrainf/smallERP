const schema = `
  input SparepartFilterInput {
    partNumber: String
    item: String
    merk: String
    harga: Int
    stok: Int 
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
