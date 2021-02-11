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
        checking: true,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
