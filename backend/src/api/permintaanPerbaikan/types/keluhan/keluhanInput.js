const schema = `
  input KeluhanInput {
    id: String!
    keluhan: String!
    analisa: String!
    tindakan: String
    penyelesaian: String!
    keterangan: String
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
