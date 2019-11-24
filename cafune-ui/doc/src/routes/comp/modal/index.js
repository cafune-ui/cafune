import { Modal, Button } from 'cafune';
import { Component } from 'preact';
export default class ScrollerComp extends Component {
  showModal = ({
    type = 'confirm',
    title = '标题',
    message = '模态框内容'
  } = {}) => {
    return () => {
      Modal[type]({
        title,
        message
      });
    };
  };
  render() {
    return (
      <div class="caf-demo-block">
        <p class="caf-demo-title">modal 类型</p>
        <Button onClick={this.showModal()}>确认模态框</Button>
        <Button onClick={this.showModal({ type: 'alert' })}>警告模态框</Button>
      </div>
    );
  }
}
