const schema = `
  input ProyekFilterInput {
    id: String
    kodeProyek: String
    namaProyek: String
    lokasi: String
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
