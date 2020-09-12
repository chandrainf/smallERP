import list from 'modules/keluhan/list/keluhanListReducers';
import form from 'modules/keluhan/form/keluhanFormReducers';
import view from 'modules/keluhan/view/keluhanViewReducers';
import destroy from 'modules/keluhan/destroy/keluhanDestroyReducers';
import importerReducer from 'modules/keluhan/importer/keluhanImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
