import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/daftarAlat/importer/daftarAlatImporterSelectors';
import DaftarAlatService from 'modules/daftarAlat/daftarAlatService';
import fields from 'modules/daftarAlat/importer/daftarAlatImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'DAFTAR_ALAT_IMPORTER',
  selectors,
  DaftarAlatService.import,
  fields,
  i18n('entities.daftarAlat.importer.fileName'),
);
