const schema = `
  input SparepartInput {
    partNumber: String!
    item: String!
    merk: String
    satuan: [ String! ]
    harga: Int
    stok: Int
    foto: [ FileInput! ] 
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
