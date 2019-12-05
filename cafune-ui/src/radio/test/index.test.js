import Radio from '../';
const { RadioItem } = Radio;
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';
const list = [
  {
    value: 'option2',
    label: '选项2',
    disabled: true
  },
  {
    value: 'option1',
    label: '选项1'
  },
  {
    value: 'option3',
    label: '选项3'
  }
];

describe('Radio', () => {
  it('should render properly', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <Radio
        onChange={onChange}
        value="option1"
        labelPosition="right"
        checkedColor="#e27777"
      >
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
    );
    expect(wrapper).toMatchSnapshot();

    wrapper
      .find('RadioItem')
      .first()
      .simulate('click');
    expect(onChange).toHaveBeenCalledTimes(0);
    wrapper
      .find('RadioItem')
      .last()
      .simulate('click');
    setTimeout(() => expect(onChange).toHaveBeenCalledTimes(1), 0);
  });
  it('should render single', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <div>
        {list.map(item => (
          <RadioItem
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            checked={item.value === 'option1'}
            onChange={onChange}
          >
            {item.label}
          </RadioItem>
        ))}
      </div>
    );
    expect(wrapper).toMatchSnapshot();

    wrapper
      .find('RadioItem')
      .first()
      .simulate('click');
    expect(onChange).toHaveBeenCalledTimes(0);
    wrapper
      .find('RadioItem')
      .last()
      .simulate('click');
    setTimeout(() => expect(onChange).toHaveBeenCalledTimes(1), 0);
  });
});
