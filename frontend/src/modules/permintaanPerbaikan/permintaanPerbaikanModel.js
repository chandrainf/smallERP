import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import StringField from 'modules/shared/fields/stringField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import RelationToManyField from 'modules/shared/fields/relationToManyField';
import ImagesField from 'modules/shared/fields/imagesField';
import DateField from 'modules/shared/fields/dateField';
import ShapeArrayField from 'modules/shared/fields/shapeArrayField';

function label(name) {
  return i18n(
    `entities.permintaanPerbaikan.fields.${name}`,
  );
}

const fields = {
  id: new IdField('id', label('id')),
  daftarAlat: new RelationToManyField(
    'daftarAlat',
    label('daftarAlat'),
    {},
  ),
  proyek: new RelationToManyField(
    'proyek',
    label('proyek'),
    {},
  ),
  mekanik: new RelationToManyField(
    'mekanik',
    label('mekanik'),
    {
      required: true,
    },
  ),
  diketahui: new StringField(
    'diketahui',
    label('diketahui'),
    { required: true },
  ),
  disetujui: new StringField(
    'disetujui',
    label('disetujui'),
    {
      required: true,
    },
  ),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  keluhan: new ShapeArrayField(
    'keluhan',
    label('keluhan'),
    {
      id: new IdField('id', label('id')),
      keluhan: new StringField(
        'keluhan.keluhan',
        'keluhan',
        {
          required: true,
        },
      ),
      analisa: new StringField(
        'keluhan.analisa',
        'analisa',
        {
          required: true,
        },
      ),
      foto: new ImagesField(
        'keluhan.foto',
        'foto',
        'permintaanPerbaikan/foto',
        {},
      ),
      tindakan: new StringField(
        'keluhan.tindakan',
        'tindakan',
        {
          required: true,
        },
      ),
      pemeriksaan: new DateField(
        'keluhan.pemeriksaan',
        'penyelesaian',
        {
          required: true,
        },
      ),
      keterangan: new StringField(
        'keluhan.keterangan',
        'keterangan',
        {},
      ),
    },
  ),
};

export default {
  fields,
};
