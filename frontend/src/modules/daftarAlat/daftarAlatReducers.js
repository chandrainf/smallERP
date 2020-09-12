import list from 'modules/daftarAlat/list/daftarAlatListReducers';
import form from 'modules/daftarAlat/form/daftarAlatFormReducers';
import view from 'modules/daftarAlat/view/daftarAlatViewReducers';
import destroy from 'modules/daftarAlat/destroy/daftarAlatDestroyReducers';
import importerReducer from 'modules/daftarAlat/importer/daftarAlatImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
