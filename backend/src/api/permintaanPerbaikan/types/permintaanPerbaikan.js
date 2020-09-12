const schema = `
  type PermintaanPerbaikan {
    id: String!
    daftarAlat : [ DaftarAlat! ]
    proyek: [ Proyek! ]
    mekanik: [ Mekanik! ]
    diketahui: String
    disetujui: String
    keluhan: [ Keluhan! ]
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
