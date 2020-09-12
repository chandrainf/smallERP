const schema = `
  type Proyek {
    id: String!
    kodeProyek: String!
    namaProyek: String!
    lokasi: String!
    alat: [DaftarAlat]
    mekaniks: [ Mekanik! ]
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
