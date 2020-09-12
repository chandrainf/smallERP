import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import StringField from 'modules/shared/fields/stringField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import ImagesField from 'modules/shared/fields/imagesField';
import DateField from 'modules/shared/fields/dateField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';

function label(name) {
  return i18n(`entities.keluhan.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  keluhan: new StringField('keluhan', label('keluhan'), {
    required: true,
  }),
  analisa: new StringField('analisa', label('analisa'), {
    required: true,
  }),
  foto: new ImagesField(
    'foto',
    label('foto'),
    'keluhan/foto',
    {},
  ),
  tindakan: new StringField('tindakan', label('tindakan'), {
    required: true,
  }),
  pemeriksaan: new DateField(
    'pemeriksaan',
    label('pemeriksaan'),
  ),
  keterangan: new StringField(
    'keterangan',
    label('keterangan'),
  ),
  pemeriksaanRange: new DateTimeRangeField(
    'pemeriksaanRange',
    label('pemeriksaanRange'),
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
