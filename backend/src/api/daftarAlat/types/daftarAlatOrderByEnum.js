const schema = `
  enum DaftarAlatOrderByEnum {
    id_ASC
    id_DESC
    kodeAlat_ASC
    kodeAlat_DESC
    namaAlat_ASC
    namaAlat_DESC
    merk_ASC
    merk_DESC
    model_ASC
    model_DESC
    kapasitas_ASC
    kapasitas_DESC
    nomorRangka_ASC
    nomorRangka_DESC
    nomorMesin_ASC
    nomorMesin_DESC
    nomorPlat_ASC
    nomorPlat_DESC
    tahunPembuatan_ASC
    tahunPembuatan_DESC
    tahunRegistrasi_ASC
    tahunRegistrasi_DESC
    kepemilikan_ASC
    kepemilikan_DESC
    status_ASC
    status_DESC
    SIA_ASC
    SIA_DESC
    STNK_ASC
    STNK_DESC
    pajak_ASC
    pajak_DESC
    KIR_ASC
    KIR_DESC
    createdAt_ASC
    createdAt_DESC
    
    
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
