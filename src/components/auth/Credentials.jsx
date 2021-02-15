import React, { useState } from 'react';
import LoginScreen from './LoginScreen';
import Register from './Register';
import './login.css';

const Credentials = () => {
  const [display, setDisplay] = useState(true);

  const handleDisplay = (e) => {
    e.preventDefault();
    setDisplay(!display);
  };
  if (display) {
    return <LoginScreen handleDisplay={handleDisplay} />;
  }

  return (<Register handleDisplay={handleDisplay} />
  );
};

export default Credentials;
