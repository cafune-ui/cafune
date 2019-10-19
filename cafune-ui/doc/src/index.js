import { Router } from 'preact-router';
import Redirect from './routes/redirect';
import Home from './routes/home';
import Comp from './routes/comp';
import 'cafune/es/index.scss';

import './_custom.scss';
import './style.scss';
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
