import list from 'modules/sparepart/list/sparepartListReducers';
import form from 'modules/sparepart/form/sparepartFormReducers';
import view from 'modules/sparepart/view/sparepartViewReducers';
import destroy from 'modules/sparepart/destroy/sparepartDestroyReducers';
import importerReducer from 'modules/sparepart/importer/sparepartImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
