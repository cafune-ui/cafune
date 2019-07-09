import { Component } from 'preact';
import AsyncRoute from 'preact-async-route';
import CompList from '../../complist';

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

export class Comp extends Component {
  getComp(name) {
    if (name && CompList.includes(name)) {
      return (
        <AsyncRoute
          path={`/${name}`}
          getComponent={() =>
            import(`./${name}`).then(module => module.default)
          }
        />
      );
    } else {
      return <div>unavailable comp</div>;
    }
  }
  render({ name }) {
    return this.getComp(name);
  }
}

export default Comp;
