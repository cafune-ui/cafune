import { Modal, Button } from 'cafune';
import { Component } from 'preact';
export default class ScrollerComp extends Component {
  showModal = ({
    type = 'confirm',
    title = '标题',
    message = '模态框内容',
    beforeClose = null
  } = {}) => {
    return () => {
      Modal[type]({
        title,
        message,
        beforeClose
      });
    };
  };
  beforeClose = (action, done) => {
    console.log(action);
    if (action === 'confirm') {
      console.log('confirm close in 2 sec');
      setTimeout(() => done(), 2000);
    } else if (action === 'cancel') {
      console.log(`cancel won't close until click confirm`);
      done(false);
    }
  };
  render() {
    return (
      <div class="caf-demo-block">
        <p class="caf-demo-title">modal 类型</p>
        <div class="caf-demo-buttons">
          <Button onClick={this.showModal()}>确认模态框</Button>
          <Button onClick={this.showModal({ type: 'alert' })}>
            警告模态框
          </Button>
        </div>
        <p class="caf-demo-title">modal 回调</p>
        <Button
          onClick={this.showModal({
            beforeClose: this.beforeClose
          })}
        >
          带回调模态框
        </Button>

        <p class="caf-demo-intro">
          在回调中返回 &nbsp;<b>false</b>
          &nbsp;会让模态框不关闭，而不返回或返回&nbsp;
          <b>true</b>&nbsp;则会关闭
        </p>
      </div>
    );
  }
}
