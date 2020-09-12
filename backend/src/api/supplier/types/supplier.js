const schema = `
  type Supplier {
    id: String!
    namaSupplier: String!
    alamat: String!
    telepon1 : String!
    telepon2 : String
    email : String
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
