import list from 'modules/deklarasi/list/deklarasiListReducers';
import form from 'modules/deklarasi/form/deklarasiFormReducers';
import view from 'modules/deklarasi/view/deklarasiViewReducers';
import destroy from 'modules/deklarasi/destroy/deklarasiDestroyReducers';
import importerReducer from 'modules/deklarasi/importer/deklarasiImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
