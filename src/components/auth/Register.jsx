/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startRegister } from '../../actions/auth';
import useForm from '../../hooks/useForm';

const Register = ({ handleDisplay }) => {
  const dispatch = useDispatch();
  const [formRegisterValues, handleRegisterInputChange] = useForm({
    rName: 'marito',
    rEmail: 'nando@gmail.com',
    rPassword1: '1234567',
    rPassword2: '1234567',
  });
  const {
    rName, rEmail, rPassword1, rPassword2,
  } = formRegisterValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (rPassword1 !== rPassword2) {
      return Swal.fire('Error', 'Las Contraseñas deben de ser iguales', 'error');
    }
    return dispatch(startRegister(rEmail, rName, rPassword1));
  };
  return (
    <div className="container login-container">
      <div className="login-form-2">
        <h3>Registro</h3>
        <form onSubmit={handleRegister}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              value={rName}
              onChange={handleRegisterInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Correo"
              value={rEmail}
              onChange={handleRegisterInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              value={rPassword1}
              onChange={handleRegisterInputChange}
            />
          </div>

          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Repita la contraseña"
              value={rPassword2}
              onChange={handleRegisterInputChange}
            />
          </div>
          <div className="form-group mb-4 d-flex justify-content-center">
            <input type="submit" className="btnSubmit" value="Crear cuenta" />
            <div>
              <button type="button" onClick={handleDisplay}>Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
