const schema = `
  type CashAdvancePage {
    rows: [CashAdvance!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
