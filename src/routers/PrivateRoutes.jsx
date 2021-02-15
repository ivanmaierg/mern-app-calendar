/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoutes = ({ isLoggedIn, component: Component, ...rest }) => {
  console.log(isLoggedIn);
  return (
    <Route {...rest}>
      {(props) => (isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      ))}
    </Route>
  );
};

PrivateRoutes.propTypes = {
  component: PropTypes.func.isRequired,
};
export default PrivateRoutes;
