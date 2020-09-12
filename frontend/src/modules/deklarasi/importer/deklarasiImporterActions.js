import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/deklarasi/importer/deklarasiImporterSelectors';
import DeklarasiService from 'modules/deklarasi/deklarasiService';
import fields from 'modules/deklarasi/importer/deklarasiImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'DEKLARASI_IMPORTER',
  selectors,
  DeklarasiService.import,
  fields,
  i18n('entities.deklarasi.importer.fileName'),
);
