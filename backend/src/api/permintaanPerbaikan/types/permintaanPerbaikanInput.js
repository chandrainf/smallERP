const schema = `
  input PermintaanPerbaikanInput {
    daftarAlat : [DaftarAlatInput]
    proyek: [ProyekInput]
    mekanik: [MekanikInput]
    diketahui: String
    disetujui: String
    keluhan: [KeluhanInput]
  }
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
