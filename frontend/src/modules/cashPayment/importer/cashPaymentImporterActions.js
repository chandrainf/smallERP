import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/cashPayment/importer/cashPaymentImporterSelectors';
import CashPaymentService from 'modules/cashPayment/cashPaymentService';
import fields from 'modules/cashPayment/importer/cashPaymentImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'CASH_PAYMENT_IMPORTER',
  selectors,
  CashPaymentService.import,
  fields,
  i18n('entities.cashPayment.importer.fileName'),
);
