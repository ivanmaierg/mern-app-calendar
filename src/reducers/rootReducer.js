import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';

const rootReducer = combinerReducers({
  ui: uiReducer,
});
export default rootReducer;
