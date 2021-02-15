import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router, Switch, Redirect,
} from 'react-router-dom';
import { startChecking } from '../actions/auth';
import Credentials from '../components/auth/Credentials';
import CalendarScreen from '../components/calendar/CalendarScreen';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);
  if (checking) {
    return (<h5>wait</h5>);
  }
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoutes exact path="/login" component={Credentials} isLoggedIn={!!uid} />
          <PrivateRoutes exact path="/" component={CalendarScreen} isLoggedIn={!!uid} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

// exact/login LoginScreen
// exact/CalendarSCreen

export default AppRouter;
