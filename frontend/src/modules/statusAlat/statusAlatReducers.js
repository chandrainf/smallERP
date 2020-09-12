import list from 'modules/statusAlat/list/statusAlatListReducers';
import form from 'modules/statusAlat/form/statusAlatFormReducers';
import view from 'modules/statusAlat/view/statusAlatViewReducers';
import destroy from 'modules/statusAlat/destroy/statusAlatDestroyReducers';
import importerReducer from 'modules/statusAlat/importer/statusAlatImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
