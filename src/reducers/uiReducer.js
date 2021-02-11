/* eslint-disable default-case */
import types from '../types/types';

const initialState = {
  modalOpen: false,
};

// eslint-disable-next-line consistent-return
export default (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenModal:
      return {
        ...state,
        modalOpen: true,
      };
    case types.uiCloseModal:
      return {
        ...state,
        modalOpen: false,
      };
    default:
      return state;
  }
};
