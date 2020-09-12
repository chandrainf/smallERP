const schema = `
  type PurchaseRequestPage {
    rows: [PurchaseRequest!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
