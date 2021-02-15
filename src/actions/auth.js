/* eslint-disable no-undef */
import Swal from 'sweetalert2';
import { fetchWithoutToken, fetchWithToken } from '../helpers/fetch';
import types from '../types/types';

const login = (user) => ({
  type: types.authLogin,
  payload: { uid: user.uid, name: user.name },
});
const logout = () => ({ type: types.authLogout });
const startLogout = () => (dispatch) => {
  localStorage.clear();
  dispatch(logout());
};
const register = (user) => ({
  type: types.authRegister,
  payload: { name: user.name, email: user.email, password: user.password },
});
const startLogin = (email, password) => async (dispatch) => {
  const resp = await fetchWithoutToken('auth', { email, password }, 'POST');
  const body = await resp.json();
  if (body.ok) {
    localStorage.setItem('token', body.token);
    localStorage.setItem('token-init-date', new Date().getTime());
    dispatch(login({ uid: body.uid, name: body.name }));
  } else {
    Swal.fire('Error', body.msg, 'error');
  }
};
const startRegister = (email, password, name) => async (dispatch) => {
  const resp = await fetchWithoutToken('auth/new', { email, password, name }, 'POST');
  const body = await resp.json();
  if (body.ok) {
    localStorage.setItem('token', body.token);
    localStorage.setItem('token-init-date', new Date().getTime());
    dispatch(register({ uid: body.uid, name: body.name }));
  } else {
    Swal.fire('Error', body.msg, 'error');
  }
};
const checkingFinish = () => ({ type: types.authCheckingFinish });

const startChecking = () => async (dispatch) => {
  const resp = await fetchWithToken('auth/renew', {});
  const body = await resp.json();
  if (body.ok) {
    localStorage.setItem('token', body.token);
    localStorage.setItem('token-init-date', new Date().getTime());
    dispatch(login({ uid: body.uid, name: body.name }));
  } else {
    Swal.fire('Error', body.msg, 'error');
    dispatch(checkingFinish());
  }
};

export {
  startLogout, startLogin, startRegister, startChecking, checkingFinish,
};
