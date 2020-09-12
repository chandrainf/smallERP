import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/keluhan/importer/keluhanImporterSelectors';
import KeluhanService from 'modules/keluhan/keluhanService';
import fields from 'modules/keluhan/importer/keluhanImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'KELUHAN_IMPORTER',
  selectors,
  KeluhanService.import,
  fields,
  i18n('entities.keluhan.importer.fileName'),
);
