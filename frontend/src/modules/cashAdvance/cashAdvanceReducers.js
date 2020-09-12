import list from 'modules/cashAdvance/list/cashAdvanceListReducers';
import form from 'modules/cashAdvance/form/cashAdvanceFormReducers';
import view from 'modules/cashAdvance/view/cashAdvanceViewReducers';
import destroy from 'modules/cashAdvance/destroy/cashAdvanceDestroyReducers';
import importerReducer from 'modules/cashAdvance/importer/cashAdvanceImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
