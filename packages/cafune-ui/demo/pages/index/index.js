import { Component } from 'preact';
import { Collapse, Cell } from 'cafune';
const CollapseItem = Collapse.Item;
export class Index extends Component {
  state = {
    activeCol: []
  };
  onChange = activeCol => {
    this.setState({
      activeCol
    });
  };
  render({}, { activeCol }) {
    return (
      <div class="home">
        <h1 class="home-name">Cafune</h1>
        <p class="home-desc">Cafune 是一套基于Preact的轻量、优雅的UI组件库</p>
        <Collapse actives={activeCol} onChange={this.onChange}>
          <CollapseItem title="基础组件" id="basic">
            <Cell title="Icon 图标" url="/comp/icon" />
            <Cell title="Cell 单元格" url="/comp/cell" />
          </CollapseItem>
          <CollapseItem title="表单组件" id="form">
            <Cell title="Switch 开关" url="/comp/switch" />
          </CollapseItem>
          <CollapseItem title="反馈组件" id="feedback">
            <Cell title="ActionSheet 上拉菜单" url="/comp/actionsheet" />
          </CollapseItem>
          <CollapseItem title="展示组件" id="display">
            <Cell title="Collapse 折叠面板" url="/comp/collapse" />
            <Cell title="Skeleton 骨架屏" url="/comp/skeleton" />
            <Cell title="Swiper 轮播" url="/comp/swiper" />
          </CollapseItem>
          <CollapseItem title="导航组件" id="nav">
            <Cell title="Pagination 分页" url="/comp/pagination" />
            <Cell title="Tabs 标签卡" url="/comp/tabs" />
            <Cell title="TabBar 标签栏" url="/comp/tabbar" />
          </CollapseItem>
        </Collapse>
      </div>
    );
  }
}

export default Index;
