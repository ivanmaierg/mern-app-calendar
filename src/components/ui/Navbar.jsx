/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';

const Navbar = () => {
  const name = useSelector((state) => state.auth.name);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">{name}</span>
      <button type="submit" className="btn btn-outline-danger" onClick={handleLogout}>
        <i className="fas fa-sign-out-alt" />
        Salir
      </button>
    </div>
  );
};

export default Navbar;
