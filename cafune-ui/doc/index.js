import { Router } from 'preact-router';
import Redirect from './pages/index';
import Home from './pages/home';
import Comp from './pages/components';
import 'cafune/style';
import './style';
import { createHashHistory } from 'history';

export const App = () => (
  <Router history={createHashHistory()}>
    <Redirect path="/" to="/doc/intro" />
    <Home path="/components/:name?" type="component" />
    <Home path="/doc/:name?" type="doc" />
    <Comp path="/comp/:name" />
  </Router>
);

export default App;
