import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/supplier/importer/supplierImporterSelectors';
import SupplierService from 'modules/supplier/supplierService';
import fields from 'modules/supplier/importer/supplierImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'SUPPLIER_IMPORTER',
  selectors,
  SupplierService.import,
  fields,
  i18n('entities.supplier.importer.fileName'),
);
