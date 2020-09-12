const schema = `
  type Sparepart {
    id: String!
    partNumber: String
    item: String
    merk: String
    satuan: [ Satuan! ]
    harga: Int
    stok: Int
    foto: [ File! ] 
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
