import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/kasMasuk/importer/kasMasukImporterSelectors';
import KasMasukService from 'modules/kasMasuk/kasMasukService';
import fields from 'modules/kasMasuk/importer/kasMasukImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'KAS_MASUK_IMPORTER',
  selectors,
  KasMasukService.import,
  fields,
  i18n('entities.kasMasuk.importer.fileName'),
);
