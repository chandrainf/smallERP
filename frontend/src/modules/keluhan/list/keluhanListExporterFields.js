import model from 'modules/keluhan/keluhanModel';

const { fields } = model;

export default [
  fields.id,
  fields.keluhan,
  fields.analisa,
  fields.foto,
  fields.tindakan,
  fields.pemeriksaan,
  fields.keterangan,
  fields.createdAt,
  fields.updatedAt,
];
