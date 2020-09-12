import list from 'modules/cashPayment/list/cashPaymentListReducers';
import form from 'modules/cashPayment/form/cashPaymentFormReducers';
import view from 'modules/cashPayment/view/cashPaymentViewReducers';
import destroy from 'modules/cashPayment/destroy/cashPaymentDestroyReducers';
import importerReducer from 'modules/cashPayment/importer/cashPaymentImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
