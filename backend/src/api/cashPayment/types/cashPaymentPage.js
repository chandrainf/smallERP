const schema = `
  type CashPaymentPage {
    rows: [CashPayment!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
