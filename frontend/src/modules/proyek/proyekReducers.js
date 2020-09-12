import list from 'modules/proyek/list/proyekListReducers';
import form from 'modules/proyek/form/proyekFormReducers';
import view from 'modules/proyek/view/proyekViewReducers';
import destroy from 'modules/proyek/destroy/proyekDestroyReducers';
import importerReducer from 'modules/proyek/importer/proyekImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
