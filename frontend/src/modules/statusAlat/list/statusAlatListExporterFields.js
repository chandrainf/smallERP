import model from 'modules/statusAlat/statusAlatModel';

const { fields } = model;

export default [
  fields.id,
  fields.status,
  fields.createdAt,
  fields.updatedAt,
];
