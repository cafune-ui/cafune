import { Router } from 'preact-router';
import Index from './pages/index';
import Comp from './pages/component';
import 'cafune/style/index';
import './style';

export const App = () => (
  <Router>
    <Index path="/" />
    <Comp path="/comp/:name" />
  </Router>
);

export default App;
