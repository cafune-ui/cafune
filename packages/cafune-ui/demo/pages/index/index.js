import { Component } from 'preact';
import { Collapse } from 'cafune';
const CollapseItem = Collapse.Item;
export class Index extends Component {
  state = {
    activeCol: 'a'
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
        <Collapse actives={activeCol} onChange={this.onChange} accordion>
          <CollapseItem title="标题1" id="a">
            内容1
          </CollapseItem>
          <CollapseItem title="标题2" id="b">
            内容2
          </CollapseItem>
          <CollapseItem title="标题3" id="c" disabled>
            内容3
          </CollapseItem>
        </Collapse>
      </div>
    );
  }
}

export default Index;
