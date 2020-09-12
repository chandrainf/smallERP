const schema = `
  type DaftarAlat {
    id: String!
    kodeAlat: String!
    namaAlat: String!
    merk: String
    model: String
    kapasitas: String
    nomorRangka: String
    nomorMesin: String
    nomorPlat: String
    tahunPembuatan: String
    tahunRegistrasi: String
    proyek: [ Proyek! ]
    status: DaftarAlatStatusEnum!
    kepemilikan: DaftarAlatKepemilikanEnum!
    SIA: String
    STNK: String
    pajak: String
    KIR: String
    foto: [ File! ]
    createdAt: DateTime
    updatedAt: DateTime
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
