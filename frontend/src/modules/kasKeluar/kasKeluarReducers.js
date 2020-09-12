import list from 'modules/kasKeluar/list/kasKeluarListReducers';
import form from 'modules/kasKeluar/form/kasKeluarFormReducers';
import view from 'modules/kasKeluar/view/kasKeluarViewReducers';
import destroy from 'modules/kasKeluar/destroy/kasKeluarDestroyReducers';
import importerReducer from 'modules/kasKeluar/importer/kasKeluarImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
