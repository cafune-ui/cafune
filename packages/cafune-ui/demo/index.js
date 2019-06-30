import { Router } from 'preact-router';
import Index from './pages/index';
import Cell from './pages/cell';
import 'cafune/style/index';
import './style';

export const App = () => (
  <Router>
    <Index path="/" />
    <Cell path="/cell" />
  </Router>
);

export default App;
