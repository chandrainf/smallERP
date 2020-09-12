import list from 'modules/mekanik/list/mekanikListReducers';
import form from 'modules/mekanik/form/mekanikFormReducers';
import view from 'modules/mekanik/view/mekanikViewReducers';
import destroy from 'modules/mekanik/destroy/mekanikDestroyReducers';
import importerReducer from 'modules/mekanik/importer/mekanikImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
