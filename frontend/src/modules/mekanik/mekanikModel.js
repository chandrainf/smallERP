import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import StringField from 'modules/shared/fields/stringField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import RelationToManyField from 'modules/shared/fields/relationToManyField';
//import RelationToOneField from 'modules/shared/fields/relationToOneField';
function label(name) {
  return i18n(`entities.mekanik.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  mekanik: new StringField('mekanik', label('mekanik'), {
    required: true,
    min: 2,
    max: 80,
  }),
  proyeks: new RelationToManyField(
    'proyeks',
    label('proyeks'),
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
