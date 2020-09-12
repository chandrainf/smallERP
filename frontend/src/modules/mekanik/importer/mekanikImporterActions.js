import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/mekanik/importer/mekanikImporterSelectors';
import MekanikService from 'modules/mekanik/mekanikService';
import fields from 'modules/mekanik/importer/mekanikImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'MEKANIK_IMPORTER',
  selectors,
  MekanikService.import,
  fields,
  i18n('entities.mekanik.importer.fileName'),
);
