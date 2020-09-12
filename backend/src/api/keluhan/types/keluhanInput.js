const schema = `
  input KeluhanInput {
    keluhan: String!
    analisa: String!
    foto: [ FileInput! ]
    tindakan: String
    pemeriksaan: String!
    keterangan: String
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
