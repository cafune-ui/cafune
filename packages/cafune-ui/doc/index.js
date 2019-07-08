import { Router } from 'preact-router';
import Home from './pages/home';
// import Comp from './pages/component';
import 'cafune/style';
import './style';

export const App = () => (
  <Router>
    <Home path="/:name?" />
  </Router>
);

export default App;
