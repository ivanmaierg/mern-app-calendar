/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';
import useForm from '../../hooks/useForm';

const LoginScreen = ({ handleDisplay }) => {
  const dispatch = useDispatch();
  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: 'eduardo@gmail.com',
    lPassword: '1aasdsd',
  });

  const { lEmail, lPassword } = formLoginValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(lEmail, lPassword));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="lEmail"
                value={lEmail}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="lPassword"
                value={lPassword}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="form-group mb-4  d-flex justify-content-center">
              <input type="submit" className="btnSubmit" value="Login" />
              <div>
                new?
                <button type="button" onClick={handleDisplay}>Register</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
