import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/kasKeluar/importer/kasKeluarImporterSelectors';
import KasKeluarService from 'modules/kasKeluar/kasKeluarService';
import fields from 'modules/kasKeluar/importer/kasKeluarImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'KAS_KELUAR_IMPORTER',
  selectors,
  KasKeluarService.import,
  fields,
  i18n('entities.kasKeluar.importer.fileName'),
);
