import { Button } from 'cafune';
import { Component } from 'preact';
export default class ButtonComp extends Component {
  render() {
    return (
      <div>
        <div class="caf-demo-block">
          <p class="caf-demo-title">按钮类型</p>
          <div>
            <Button>默认按钮</Button>
          </div>
        </div>
      </div>
    );
  }
}
