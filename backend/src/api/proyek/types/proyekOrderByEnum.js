const schema = `
  enum ProyekOrderByEnum {
    id_ASC
    id_DESC
    kodeProyek_ASC
    kodeProyek_DESC
    namaProyek_ASC
    namaProyek_DESC
    lokasi_ASC
    lokasi_DESC
    createdAt_ASC
    createdAt_DESC
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
