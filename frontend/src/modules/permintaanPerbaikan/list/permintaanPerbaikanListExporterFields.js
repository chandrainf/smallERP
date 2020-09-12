import model from 'modules/permintaanPerbaikan/permintaanPerbaikanModel';

const { fields } = model;

export default [
  fields.id,
  fields.daftarAlat,
  fields.proyek,
  fields.mekanik,
  fields.diketahui,
  fields.disetujui,
  fields.createdAt,
  fields.updatedAt,
];
