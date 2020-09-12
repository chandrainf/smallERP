import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/sparepart/importer/sparepartImporterSelectors';
import SparepartService from 'modules/sparepart/sparepartService';
import fields from 'modules/sparepart/importer/sparepartImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'SPAREPART_IMPORTER',
  selectors,
  SparepartService.import,
  fields,
  i18n('entities.sparepart.importer.fileName'),
);
