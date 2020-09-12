import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import StringField from 'modules/shared/fields/stringField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';
import DateField from 'modules/shared/fields/dateField';
import RelationToManyField from 'modules/shared/fields/relationToManyField';
import ImagesField from 'modules/shared/fields/imagesField';
import DateRangeField from 'modules/shared/fields/dateRangeField';

function label(name) {
  return i18n(`entities.daftarAlat.fields.${name}`);
}
function enumeratorLabel(name, value) {
  return i18n(
    `entities.daftarAlat.enumerators.${name}.${value}`,
  );
}

const fields = {
  id: new IdField('id', label('id')),
  kodeAlat: new StringField('kodeAlat', label('kodeAlat'), {
    required: true,
  }),
  namaAlat: new StringField('namaAlat', label('namaAlat'), {
    required: true,
  }),
  merk: new StringField('merk', label('merk'), {}),
  model: new StringField('model', label('model'), {}),
  kapasitas: new StringField(
    'kapasitas',
    label('kapasitas'),
    {},
  ),
  nomorRangka: new StringField(
    'nomorRangka',
    label('nomorRangka'),
    {},
  ),
  nomorMesin: new StringField(
    'nomorMesin',
    label('nomorMesin'),
    {},
  ),
  nomorPlat: new StringField(
    'nomorPlat',
    label('nomorPlat'),
    {},
  ),
  tahunPembuatan: new DateField(
    'tahunPembuatan',
    label('tahunPembuatan'),
    {},
  ),
  tahunRegistrasi: new DateField(
    'tahunRegistrasi',
    label('tahunRegistrasi'),
    {},
  ),
  proyek: new RelationToManyField(
    'proyek',
    label('proyek'),
    {},
  ),
  status: new EnumeratorField(
    'status',
    label('status'),
    [
      {
        id: 'BEKERJA',
        label: enumeratorLabel('status', 'BEKERJA'),
      },
      {
        id: 'STANDBY',
        label: enumeratorLabel('status', 'STANDBY'),
      },
      {
        id: 'RUSAK',
        label: enumeratorLabel('status', 'RUSAK'),
      },
      {
        id: 'MAINTENANCE',
        label: enumeratorLabel('status', 'MAINTENANCE'),
      },
      {
        id: 'PERBAIKAN',
        label: enumeratorLabel('status', 'PERBAIKAN'),
      },
    ],
    {},
  ),
  kepemilikan: new EnumeratorField(
    'kepemilikan',
    label('kepemilikan'),
    [
      {
        id: 'Perusahaan',
        label: enumeratorLabel('kepemilikan', 'Perusahaan'),
      },
      {
        id: 'Rental',
        label: enumeratorLabel('kepemilikan', 'Rental'),
      },
    ],
    { required: true },
  ),
  SIA: new DateField('SIA', label('SIA'), {}),
  STNK: new DateField('STNK', label('STNK'), {}),
  pajak: new DateField('pajak', label('pajak'), {}),
  KIR: new DateField('KIR', label('KIR'), {}),
  foto: new ImagesField(
    'foto',
    label('foto'),
    'daftarAlat/foto',
    {},
  ),
  SIARange: new DateRangeField(
    'SIARange',
    label('SIARange'),
  ),
  pajakRange: new DateRangeField(
    'pajakRange',
    label('pajakRange'),
  ),
  KIRRange: new DateRangeField(
    'KIRRange',
    label('KIRRange'),
  ),
  tahunPembuatanRange: new DateRangeField(
    'tahunPembuatanRange',
    label('tahunPembuatanRange'),
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
