import { Switch } from 'react-router-dom';

import Route from '@/routes/Route';

import { RegisterCommandOrTable, CloseCommandOrTable } from '../pages';

const RoutesCommand: React.FC = () => {
  return (
    <Switch>
      <Route path="/business/register-command-or-table" component={RegisterCommandOrTable} isPrivate isBusiness />
      <Route path="/business/close-command-or-table" component={CloseCommandOrTable} isPrivate isBusiness />
    </Switch>
  );
};

export default RoutesCommand;
