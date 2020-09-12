const schema = `
  enum SupplierOrderByEnum {
    id_ASC
    id_DESC
    namaSupplier_ASC
    namaSupplier_DESC
    alamat_ASC
    alamat_DESC
    telepon1_ASC
    telepon2_DESC
    email_ASC
    email_DESC
    createdAt_ASC
    createdAt_DESC
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
