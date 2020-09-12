const schema = `
  input DaftarAlatFilterInput {
    kodeAlat: String
    namaAlat: String
    merk: String
    model: String
    tahunPembuatanRange: [ String ]
    status: DaftarAlatStatusEnum
    kepemilikan: DaftarAlatKepemilikanEnum
    SIARange: [ String ]
    STNKRange: [ String ]
    pajakRange: [ String ]
    KIRRange: [ String ]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
