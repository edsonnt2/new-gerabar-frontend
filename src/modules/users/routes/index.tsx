import React from 'react';
import { Switch } from 'react-router-dom';
import Route from '~/shared/routes/Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const RoutesUser: React.FC = () => {
  return (
    <Switch>
      {/* Routes Initial */}
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      {/* Routes User */}
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};

export default RoutesUser;
