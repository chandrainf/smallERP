import model from 'modules/sparepart/sparepartModel';

const { fields } = model;

export default [
  fields.id,
  fields.partNumber,
  fields.item,
  fields.merk,
  fields.satuan,
  fields.harga,
  fields.stok,
  fields.foto,
  fields.createdAt,
  fields.updatedAt,
];
