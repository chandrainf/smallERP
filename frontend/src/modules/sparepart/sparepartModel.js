import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import StringField from 'modules/shared/fields/stringField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import RelationToManyField from 'modules/shared/fields/relationToManyField';
import IntegerField from 'modules/shared/fields/integerField';
import ImagesField from 'modules/shared/fields/imagesField';

function label(name) {
  return i18n(`entities.sparepart.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  partNumber: new StringField(
    'partNumber',
    label('partNumber'),
    {
      required: true,
    },
  ),
  item: new StringField('item', label('item'), {
    required: true,
  }),
  merk: new StringField('merk', label('merk'), {}),
  satuan: new RelationToManyField(
    'satuan',
    label('satuan'),
    {},
  ),
  harga: new IntegerField('harga', label('harga'), {
    required: true,
  }),
  stok: new IntegerField('stok', label('stok'), {
    required: true,
  }),
  foto: new ImagesField(
    'foto',
    label('foto'),
    'sparepart/foto',
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
