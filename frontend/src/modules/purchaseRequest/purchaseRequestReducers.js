import list from 'modules/purchaseRequest/list/purchaseRequestListReducers';
import form from 'modules/purchaseRequest/form/purchaseRequestFormReducers';
import view from 'modules/purchaseRequest/view/purchaseRequestViewReducers';
import destroy from 'modules/purchaseRequest/destroy/purchaseRequestDestroyReducers';
import importerReducer from 'modules/purchaseRequest/importer/purchaseRequestImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
