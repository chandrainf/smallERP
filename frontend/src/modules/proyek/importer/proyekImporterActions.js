import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/proyek/importer/proyekImporterSelectors';
import ProyekService from 'modules/proyek/proyekService';
import fields from 'modules/proyek/importer/proyekImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'PROYEK_IMPORTER',
  selectors,
  ProyekService.import,
  fields,
  i18n('entities.proyek.importer.fileName'),
);
