const schema = `
  input KeluhanFilterInput {
    keluhan: String
    analisa: String
    tindakan: String
    pemeriksaanRange: [ String ]
    keterangan: String
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
