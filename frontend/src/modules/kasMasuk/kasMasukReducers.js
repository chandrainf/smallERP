import list from 'modules/kasMasuk/list/kasMasukListReducers';
import form from 'modules/kasMasuk/form/kasMasukFormReducers';
import view from 'modules/kasMasuk/view/kasMasukViewReducers';
import destroy from 'modules/kasMasuk/destroy/kasMasukDestroyReducers';
import importerReducer from 'modules/kasMasuk/importer/kasMasukImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
