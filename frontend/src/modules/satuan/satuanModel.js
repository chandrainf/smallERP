import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import StringField from 'modules/shared/fields/stringField';
import DateTimeField from 'modules/shared/fields/dateTimeField';

function label(name) {
  return i18n(`entities.satuan.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  nama: new StringField('nama', label('nama'), {
    required: true,
    min: 2,
    max: 255,
  }),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
};

export default {
  fields,
};
