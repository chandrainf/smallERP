import model from 'modules/sparepart/sparepartModel';

const { fields } = model;

export default [
  fields.partNumber,
  fields.item,
  fields.merk,
  fields.satuan,
  fields.harga,
  fields.stok,
  fields.foto,
];
