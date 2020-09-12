const schema = `
  type ProyekPage {
    rows: [Proyek!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
