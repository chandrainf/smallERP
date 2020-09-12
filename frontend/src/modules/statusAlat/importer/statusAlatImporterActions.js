import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/statusAlat/importer/statusAlatImporterSelectors';
import StatusAlatService from 'modules/statusAlat/statusAlatService';
import fields from 'modules/statusAlat/importer/statusAlatImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'STATUS_ALAT_IMPORTER',
  selectors,
  StatusAlatService.import,
  fields,
  i18n('entities.statusAlat.importer.fileName'),
);
