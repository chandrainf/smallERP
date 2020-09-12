import model from 'modules/supplier/supplierModel';

const { fields } = model;

export default [
  fields.id,
  fields.namaSupplier,
  fields.alamat,
  fields.telepon1,
  fields.telepon2,
  fields.email,
  fields.createdAt,
  fields.updatedAt,
];
