import { Component } from 'preact';
import { Collapse } from 'cafune';
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
      <div>
        <h1>Cafune</h1>
        <p>Cafune 是一套基于Preact的轻量、优雅的UI组件库</p>
        <Collapse actives={activeCol} onChange={this.onChange}>
          <CollapseItem title="基础组件" id="basic">
            基础组件
          </CollapseItem>
          <CollapseItem title="展示组件" id="display">
            展示组件
          </CollapseItem>
          <CollapseItem title="表单组件" id="form">
            表单组件
          </CollapseItem>
        </Collapse>
      </div>
    );
  }
}

export default Index;
