import { Collapse } from 'cafune';
import { Component } from 'preact';
const CollapseItem = Collapse.Item;

export default class CollapseCom extends Component {
  state = {
    actives: 'basic',
    activeCol: []
  };
  onChange = name => {
    return actives => {
      this.setState({
        [name]: actives
      });
    };
  };
  render({}, { actives, activeCol }) {
    return (
      <div class="caf-demo">
        <p class="caf-demo-title">默认模式</p>
        <Collapse actives={activeCol} onChange={this.onChange('activeCol')}>
          <CollapseItem title="基础组件" id="basic">
            <div style="padding: 15px">默认开启</div>
          </CollapseItem>
          <CollapseItem title="展示组件" id="display">
            <div style="padding: 15px">默认关闭</div>
          </CollapseItem>
        </Collapse>
        <p class="caf-demo-title">手风车效果（只开一个）</p>
        <Collapse actives={actives} accordion>
          <CollapseItem title="基础组件" id="basic">
            <div style="padding: 15px">默认开启内容</div>
          </CollapseItem>
          <CollapseItem title="展示组件" id="display">
            <div style="padding: 15px">默认关闭</div>
          </CollapseItem>
          <CollapseItem title="展示组件(禁用)" id="disabled" disabled>
            默认关闭
          </CollapseItem>
        </Collapse>
      </div>
    );
  }
}
