const schema = `
  type SupplierPage {
    rows: [Supplier!]!
    count: Int!
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
