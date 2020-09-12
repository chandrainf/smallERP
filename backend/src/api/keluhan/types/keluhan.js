const schema = `
  type Keluhan {
    id: String!
    keluhan: String!
    analisa: String!
    foto: [ File! ]
    tindakan: String
    pemeriksaan: String
    keterangan: String
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
