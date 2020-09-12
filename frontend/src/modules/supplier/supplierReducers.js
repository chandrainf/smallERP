import list from 'modules/supplier/list/supplierListReducers';
import form from 'modules/supplier/form/supplierFormReducers';
import view from 'modules/supplier/view/supplierViewReducers';
import destroy from 'modules/supplier/destroy/supplierDestroyReducers';
import importerReducer from 'modules/supplier/importer/supplierImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
