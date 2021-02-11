/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import calendarReducer from './calendarReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  calendar: calendarReducer,
  auth: authReducer,
});
export default rootReducer;
