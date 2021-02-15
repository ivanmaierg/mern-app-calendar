/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import { fetchWithToken } from '../helpers/fetch';
import types from '../types/types';

const eventAddNew = (event) => ({
  type: types.eventAddNew,
  payload: event,
});
const eventStartAddNew = (event) => async (dispatch, getState) => {
  const { uid, name } = getState().auth;
  try {
    const resp = await fetchWithToken('events', event, 'POST');
    const body = await resp.json();
    console.log(body);
    if (body.ok) {
      event.id = body.event.id;
      event.user = {
        id: uid,
        name,
      };
      dispatch(eventAddNew(event));
      console.log(event);
    }
  } catch (err) {
    console.log(err);
  }
};

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

const eventLoaded = (events) => ({
  type: types.eventLoaded,
  payload: events,
});
const eventStartLoading = () => (dispatch) => {

};

export {
  eventStartAddNew,
  eventStartLoading,
  eventSetActive,
  eventClearActiveEvent,
  eventUpdated,
  eventDeleted,
};
