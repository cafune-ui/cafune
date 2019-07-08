import { Router } from 'preact-router';
import Cell from './basic/cell';
import Collapse from './display/collapse';
import Skeleton from './display/skeleton';
import Swiper from './display/swiper';
import NoticeBar from './display/noticebar';


import NavBar from './nav/navbar';
import Pagination from './nav/pagination';
import Tabs from './nav/tabs';
import TabBar from './nav/tabbar';

import Switch from './form/switch';

import ActionSheet from './feedback/actionsheet';
import Loading from './feedback/loading';
import './style';
const nameMap = {
  cell: '单元格',
  collapse: '折叠面板',
  skeleton: '骨架屏',
  swiper: '轮播',
  pagination: '分页',
  tabs: '标签卡',
  tabbar: '标签栏',
  switch: '开关',
  actionsheet: '动作面板',
  loading: '加载',
  navbar: '导航栏',
  noticebar: '通告栏'
};

export const Comp = ({ name }) => {
  return (
    <div class="comp">
      <div class="comp_hd">
        <h2 class="comp_hd_name">
          {name.replace(/^\w/, $0 => $0.toUpperCase())}
        </h2>
        <p class="comp_hd_cn">{nameMap[name]}</p>
      </div>
      <div class="comp_main">
        <Router url={`/comp/${name}`}>
          <Cell path="/comp/cell" />
          <Collapse path="/comp/collapse" />
          <Skeleton path="/comp/skeleton" />
          <Swiper path="/comp/swiper" />

          <NavBar path="/comp/navbar" />
          <Pagination path="/comp/pagination" />
          <Tabs path="/comp/tabs" />
          <TabBar path="/comp/tabbar" />

          <Switch path="/comp/switch" />

          <ActionSheet path="/comp/actionsheet" />
          <Loading path="/comp/loading" />
          <NoticeBar path="/comp/noticebar" />
        </Router>
      </div>
    </div>
  );
};

export default Comp;
