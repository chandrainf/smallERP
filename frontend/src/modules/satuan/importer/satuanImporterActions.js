import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/satuan/importer/satuanImporterSelectors';
import SatuanService from 'modules/satuan/satuanService';
import fields from 'modules/satuan/importer/satuanImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'SATUAN_IMPORTER',
  selectors,
  SatuanService.import,
  fields,
  i18n('entities.satuan.importer.fileName'),
);
