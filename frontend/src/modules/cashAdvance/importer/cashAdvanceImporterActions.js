import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/cashAdvance/importer/cashAdvanceImporterSelectors';
import CashAdvanceService from 'modules/cashAdvance/cashAdvanceService';
import fields from 'modules/cashAdvance/importer/cashAdvanceImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'CASH_ADVANCE_IMPORTER',
  selectors,
  CashAdvanceService.import,
  fields,
  i18n('entities.cashAdvance.importer.fileName'),
);
