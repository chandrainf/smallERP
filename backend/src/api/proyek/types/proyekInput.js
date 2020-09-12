const schema = `
  input ProyekInput {
    kodeProyek: String!
    namaProyek: String!
    lokasi: String!
    alat: [String]
    proyek: [ String! ]
    mekaniks: [ String! ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
