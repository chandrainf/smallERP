import model from 'modules/proyek/proyekModel';

const { fields } = model;

export default [
  fields.id,
  fields.kodeProyek,
  fields.namaProyek,
  fields.lokasi,
  fields.alat,
  fields.proyek,
  fields.mekaniks,
  fields.createdAt,
  fields.updatedAt,
];
