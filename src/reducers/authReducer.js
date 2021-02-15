/* eslint-disable no-unused-vars */
import types from '../types/types';

const initialState = {
  checking: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        ...action.payload,
        checking: false,
      };
    case types.authRegister:
      return {
        ...state,
        checking: false,
        ...action.payload,
      };
    case types.authCheckingFinish:
      return {
        ...state,
        checking: false,
      };
    case types.authLogout:
      return {
        checking: false,
      };
    default:
      return state;
  }
};
export default authReducer;
