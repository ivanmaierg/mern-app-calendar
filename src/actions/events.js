import types from '../types/types';

const eventAddNew = (event) => ({
  type: types.eventAddNew,
  payload: event,
});
const eventSetActive = (event) => ({
  type: types.eventSetActive,
  payload: event,
});
const eventClearActiveEvent = () => ({
  type: types.eventClearActiveEvent,
});
const eventUpdated = (event) => ({
  type: types.eventUpdated,
  payload: event,
});
const eventDeleted = () => ({
  type: types.eventDeleted,
});

export {
  eventAddNew,
  eventSetActive,
  eventClearActiveEvent,
  eventUpdated,
  eventDeleted,
};
