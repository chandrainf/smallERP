import list from 'modules/permintaanPerbaikan/list/permintaanPerbaikanListReducers';
import form from 'modules/permintaanPerbaikan/form/permintaanPerbaikanFormReducers';
import view from 'modules/permintaanPerbaikan/view/permintaanPerbaikanViewReducers';
import destroy from 'modules/permintaanPerbaikan/destroy/permintaanPerbaikanDestroyReducers';
import importerReducer from 'modules/permintaanPerbaikan/importer/permintaanPerbaikanImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
