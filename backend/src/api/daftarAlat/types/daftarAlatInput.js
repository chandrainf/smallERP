const schema = `
  input DaftarAlatInput {
    kodeAlat: String!
    namaAlat: String!
    merk: String
    model: String
    kapasitas: String
    nomorRangka: String
    nomorMesin: String
    nomorPlat: String
    tahunPembuatan: String!
    tahunRegistrasi: String
    kepemilikan: DaftarAlatKepemilikanEnum!
    status: DaftarAlatStatusEnum!
    proyek: [ String! ]
    SIA: String
    STNK: String
    pajak: String
    KIR: String
    foto: [ FileInput! ]
    
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
