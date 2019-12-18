import { TabBar, Radio, Switch, Cell } from 'cafune';
import { Component } from 'preact';
const { RadioItem } = Radio;
const { TabBarItem } = TabBar;

const list = [
  {
    value: 'normal',
    label: '普通tab'
  },
  {
    value: 'bubble',
    label: '冒泡tab'
  },
  {
    value: 'flash',
    label: '闪烁tab'
  }
];
export default class TabBarComp extends Component {
  state = {
    page: 'home',
    type: 'bubble'
  };
  onChange = activedId => {
    this.setState({
      page: activedId
    });
  };
  onRadioChange = type => {
    this.setState({
      type
    });
  };
  toggleCustomStyle = () => {
    this.setState({
      isCustomStyle: !this.state.isCustomStyle
    });
  };
  render({}, { page, type, isCustomStyle }) {
    return (
      <div>
        <div class="caf-demo-block">
          <Radio onChange={this.onRadioChange} value={type}>
            {list.map(item => (
              <RadioItem
                key={item.value}
                value={item.value}
                disabled={item.disabled}
              >
                {item.label}
              </RadioItem>
            ))}
          </Radio>

          <Cell
            title="自定义颜色"
            value={
              <Switch
                isActived={isCustomStyle}
                onChange={this.toggleCustomStyle}
              />
            }
            middle
          />
        </div>
        <TabBar type={type} activedId={page} onChange={this.onChange}>
          <TabBarItem
            text="home"
            id="home"
            activedColor={isCustomStyle ? '#e27777' : ''}
            activedBgColor={isCustomStyle ? '#f5e3e3' : ''}
            icons={{ normal: 'home' }}
          />
          <TabBarItem
            text="browser"
            id="browser"
            icons={{
              normal: 'browser'
            }}
          />
          <TabBarItem
            text="astro"
            id="astro"
            activedColor={isCustomStyle ? '#5da0a2' : ''}
            activedBgColor={isCustomStyle ? '#e3f5ed' : ''}
            icons={{
              actived:
                'https://image.flaticon.com/icons/png/128/2026/2026518.png',
              normal:
                'https://image.flaticon.com/icons/png/128/2026/2026521.png'
            }}
          />
          <TabBarItem
            text="help"
            id="help"
            disabled
            icons={{ normal: 'help' }}
          />
        </TabBar>
      </div>
    );
  }
}
