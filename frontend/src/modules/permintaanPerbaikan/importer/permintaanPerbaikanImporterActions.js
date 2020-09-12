import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/permintaanPerbaikan/importer/permintaanPerbaikanImporterSelectors';
import PermintaanPerbaikanService from 'modules/permintaanPerbaikan/permintaanPerbaikanService';
import fields from 'modules/permintaanPerbaikan/importer/permintaanPerbaikanImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'PERMINTAAN_PERBAIKAN_IMPORTER',
  selectors,
  PermintaanPerbaikanService.import,
  fields,
  i18n('entities.permintaanPerbaikan.importer.fileName'),
);
