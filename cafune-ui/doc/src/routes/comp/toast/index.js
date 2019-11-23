import { Toast, Button } from 'cafune';
import { Component } from 'preact';
import './indes.scss';

export default class ToastComp extends Component {
  showToast = ({ kind = 'show', duration, icon, onClose, mutiple } = {}) => {
    return () => {
      Toast[kind]({
        content: kind,
        duration,
        icon,
        onClose,
        mutiple
      });
    };
  };
  render() {
    return (
      <div>
        <div class="caf-demo-block">
          <p class="caf-demo-title">toast 类型</p>
          <Button onClick={this.showToast()}>常规Toast</Button>
          <Button onClick={this.showToast({ kind: 'loading' })}>
            加载Toast
          </Button>
          <Button type="warning" onClick={this.showToast({ kind: 'error' })}>
            错误Toast
          </Button>
          <Button type="primary" onClick={this.showToast({ kind: 'success' })}>
            成功Toast
          </Button>
        </div>
        <div class="caf-demo-block">
          <p class="caf-demo-title">定义时长</p>
          <Button onClick={this.showToast({ duration: 4000 })}>
            自定义时长<p class="caf-demo-button-desc">(4s)</p>
          </Button>
        </div>
        <div class="caf-demo-block">
          <p class="caf-demo-title">定义关闭回调</p>
          <Button
            onClick={this.showToast({
              onClose() {
                alert('关闭');
              }
            })}
          >
            回调
          </Button>
        </div>
        <div class="caf-demo-block">
          <p class="caf-demo-title">定义图标</p>
          <Button
            onClick={this.showToast({
              icon: 'like'
            })}
          >
            内置图标
          </Button>
          <Button
            onClick={this.showToast({
              icon: {
                icon:
                  'https://image.flaticon.com/icons/png/128/2026/2026462.png',
                size: '32px'
              }
            })}
          >
            图片图标
          </Button>
        </div>
      </div>
    );
  }
}
