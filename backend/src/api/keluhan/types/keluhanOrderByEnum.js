const schema = `
  enum KeluhanOrderByEnum {
    id_ASC
    id_DESC
    keluhan_ASC
    keluhan_DESC
    analisa_ASC
    analisa_DESC
    tindakan_ASC
    tindakan_DESC
    pemeriksaan_ASC
    pemeriksaan_DESC 
    keterangan_ASC
    keterangan_DESC
    createdAt_ASC
    createdAt_DESC
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
