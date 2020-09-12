import list from 'modules/satuan/list/satuanListReducers';
import form from 'modules/satuan/form/satuanFormReducers';
import view from 'modules/satuan/view/satuanViewReducers';
import destroy from 'modules/satuan/destroy/satuanDestroyReducers';
import importerReducer from 'modules/satuan/importer/satuanImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
