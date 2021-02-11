/* eslint-disable no-undef */

import { fetchWithoutToken } from '../helpers/fetch';
import types from '../types/types';

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});
const startLogin = (email, password) => async (dispatch) => {
  console.log(email, password);
  const resp = await fetchWithoutToken('auth', { email, password }, 'POST');
  const body = await resp.json();

  if (body.ok) {
    localStorage.setItem('token', body.token);
    localStorage.setItem('token-init-date', new Date().getTime());
    dispatch(login({ uid: body.uid, name: body.name }));
  }
};

export default startLogin;
