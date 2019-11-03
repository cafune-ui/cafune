import { Radio } from 'cafune';
import { Component } from 'preact';

const { RadioItem } = Radio;
export default class RadioComp extends Component {
  state = {
    value1: 'option1',
    value2: 'option3'
  };
  onRadioChange = key => value => {
    this.setState({
      [key]: value
    });
  };
  render({}, { value1, value2 }) {
    const list1 = [
      {
        value: 'option1',
        label: '选项1'
      },
      {
        value: 'option2',
        label: '选项2',
        disabled: true
      },
      {
        value: 'option3',
        label: '选项3'
      }
    ];
    return (
      <div class="caf-demo-block">
        <p class="caf-demo-title">默认用法</p>
        <Radio onChange={this.onRadioChange('value1')} value={value1}>
          {list1.map(item => (
            <RadioItem
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              checked={item.value === 'option2'}
            >
              {item.label}
            </RadioItem>
          ))}
        </Radio>
        <p class="caf-demo-title">自定义样式</p>
        <Radio
          labelPosition="right"
          checkedColor="#e27777"
          onChange={this.onRadioChange('value1')}
          value={value1}
        >
          {list1.map(item => (
            <RadioItem
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              checked={item.value === 'option2'}
            >
              {item.label}
            </RadioItem>
          ))}
        </Radio>
        <p class="caf-demo-title">单独使用Radio Item</p>
        {list1.map(item => (
          <RadioItem
            key={item.value}
            value={item.value}
            checked={item.value === value2}
            disabled={item.disabled}
            onChange={this.onRadioChange('value2')}
          >
            {item.label}
          </RadioItem>
        ))}
      </div>
    );
  }
}
