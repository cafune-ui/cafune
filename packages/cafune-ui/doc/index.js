import { Router } from 'preact-router';
import Home from './pages/home';
import Comp from './pages/components';
import 'cafune/style';
import './style';
// const nameMap = {
//   cell: '单元格',
//   collapse: '折叠面板',
//   skeleton: '骨架屏',
//   swiper: '轮播',
//   pagination: '分页',
//   tabs: '标签卡',
//   tabbar: '标签栏',
//   switch: '开关',
//   actionsheet: '动作面板',
//   loading: '加载',
//   navbar: '导航栏',
//   noticebar: '通告栏'
// };

export const App = () => (
  <Router>
    <Home path="/:name?" />

    <Comp path="/comp/:name" />
  </Router>
);

export default App;
