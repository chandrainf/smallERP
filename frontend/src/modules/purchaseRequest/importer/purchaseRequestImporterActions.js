import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/purchaseRequest/importer/purchaseRequestImporterSelectors';
import PurchaseRequestService from 'modules/purchaseRequest/purchaseRequestService';
import fields from 'modules/purchaseRequest/importer/purchaseRequestImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'PURCHASE_REQUEST_IMPORTER',
  selectors,
  PurchaseRequestService.import,
  fields,
  i18n('entities.purchaseRequest.importer.fileName'),
);
