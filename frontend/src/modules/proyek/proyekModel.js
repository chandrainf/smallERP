import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import StringField from 'modules/shared/fields/stringField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import RelationToManyField from 'modules/shared/fields/relationToManyField';
//import RelationToOneField from 'modules/shared/fields/relationToOneField';

function label(name) {
  return i18n(`entities.proyek.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  kodeProyek: new IdField(
    'kodeProyek',
    label('kodeProyek'),
    {
      required: true,
      min: 2,
      max: 80,
    },
  ),
  namaProyek: new StringField(
    'namaProyek',
    label('namaProyek'),
    {
      required: true,
      min: 2,
      max: 255,
    },
  ),
  lokasi: new StringField('lokasi', label('lokasi'), {
    required: true,
    min: 2,
    max: 255,
  }),
  alat: new RelationToManyField('alat', label('alat'), {}),
  mekaniks: new RelationToManyField(
    'mekaniks',
    label('mekaniks'),
    {},
  ),
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
