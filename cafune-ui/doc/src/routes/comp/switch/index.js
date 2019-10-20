import { Switch } from 'cafune';
import { Component } from 'preact';

export default class SwitchComp extends Component {
  state = {
    isActived1: true,
    isActived2: false
  };
  onChange = (name, isWait = false) => {
    return actives => {
      if (isWait) {
        setTimeout(() => {
          this.setState({
            [name]: actives
          });
        }, 1000);
      } else {
        this.setState({
          [name]: actives
        });
      }
    };
  };
  render({}, { isActived1, isActived2 }) {
    return (
      <div class="caf-demo-block">
        <p>默认用法</p>
        <Switch isActived={isActived1} onChange={this.onChange('isActived1')} />
        <p>禁用状态</p>
        <Switch
          isActived={isActived1}
          isDisabled
          onChange={this.onChange('isActived1')}
        />
        <p>自定义尺寸</p>
        <Switch
          isActived={isActived1}
          size="20px"
          onChange={this.onChange('isActived1')}
        />
        <p>加载状态</p>
        <Switch
          isActived={isActived1}
          isLoading={true}
          onChange={this.onChange('isActived1')}
        />
        <p>自定义颜色</p>
        <Switch
          isActived={isActived1}
          activedColor="#2e4e7e"
          inActivedColor="#bbcdc5"
          onChange={this.onChange('isActived1')}
        />
        <p>异步切换（1秒后才切换）</p>
        <Switch
          isActived={isActived2}
          onChange={this.onChange('isActived2', true)}
        />
      </div>
    );
  }
}
