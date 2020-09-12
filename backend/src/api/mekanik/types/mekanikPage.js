const schema = `
  type MekanikPage {
    rows: [Mekanik!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
