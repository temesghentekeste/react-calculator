import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import App from './App';
import Calculator from './Calculator';
import Quote from './Quote';
import Navbar from './Navbar';

const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/calculator" component={Calculator} />
      <Route path="/quote" component={Quote} />
    </Switch>
  </Router>
);

export default Routes;
