import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import StringField from 'modules/shared/fields/stringField';
import DateTimeField from 'modules/shared/fields/dateTimeField';

function label(name) {
  return i18n(`entities.supplier.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  namaSupplier: new StringField(
    'namaSupplier',
    label('namaSupplier'),
    {
      required: true,
      max: 255,
    },
  ),
  alamat: new StringField('alamat', label('alamat'), {
    required: true,
    max: 255,
  }),
  telepon1: new StringField('telepon1', label('telepon1'), {
    required: true,
    max: 24,
  }),
  telepon2: new StringField('telepon2', label('telepon2'), {
    max: 24,
  }),
  email: new StringField('email', label('email'), {
    max: 80,
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
