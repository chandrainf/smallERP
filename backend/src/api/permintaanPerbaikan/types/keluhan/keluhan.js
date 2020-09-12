const schema = `
  type Keluhan {
    id: String!
    keluhan: String!
    analisa: String!
    foto: [ FileInput! ]
    tindakan: String
    penyelesaian: String
    keterangan: String
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {
  Keluhan: {
    id: (instance) => instance._id,
  },
};

exports.schema = schema;
exports.resolver = resolver;
