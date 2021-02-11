/* eslint-disable no-unused-vars */
import moment from 'moment';

import types from '../types/types';

const intialState = {
  events: [],
  activeEvent: null,
};

const calendarReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      };
    case types.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case types.eventClearActiveEvent:
      return {
        ...state,
        activeEvent: null,
      };
    case types.eventUpdated:
      return {
        ...state,
        // eslint-disable-next-line arrow-parens
        events: state.events.map(event => (event.id === action.payload.id
          ? action.payload : event)),
      };
    case types.eventDeleted:
      return {
        ...state,
        events: state.events.filter((e) => e.id !== state.activeEvent.id),
      };

    default:
      return state;
  }
};

export default calendarReducer;
