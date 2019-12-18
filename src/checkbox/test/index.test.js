import Checkbox from '../';
const { CheckboxGroup } = Checkbox;
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

const checkList = [
  {
    value: 'hey',
    text: '默认用法'
  },
  {
    value: 'hi',
    text: '自定义颜色',
    checkedColor: '#e27777'
  },
  {
    value: 'holla',
    text: '开启禁用',
    disabled: true
  },
  {
    value: 'bonjour',
    text: '自定义激活图标',
    icons: {
      actived: 'more'
    }
  },
  {
    value: 'conba',
    text: '开启禁用',
    disabled: true
  },
  {
    value: 'hello',
    text: '自定义激活及未激活图标',
    icons: {
      inactive: 'https://image.flaticon.com/icons/png/128/2026/2026450.png',
      actived: 'https://image.flaticon.com/icons/png/128/2026/2026462.png'
    }
  }
];

describe('Checkbox', () => {
  it('should render properly', () => {
    let check = 'hi';
    const changeFn = jest.fn();
    const wrapper = deep(
      <div>
        {checkList.map((item, ind) => (
          <Checkbox
            checked={check === item.value}
            {...item}
            handleChange={changeFn}
            key={`s-${ind}-${item.value}`}
          >
            {item.text}
          </Checkbox>
        ))}
      </div>
    );
    expect(wrapper).toMatchSnapshot();

    wrapper
      .find('.caf-checkbox')
      .last()
      .simulate('click');
    expect(changeFn).toHaveBeenCalledWith(checkList.slice(-1)[0].value);

    check = 'bonjour';
    wrapper.render(
      <div>
        {checkList.map((item, ind) => (
          <Checkbox
            checked={check === item.value}
            {...item}
            handleChange={changeFn}
            key={`s-${ind}-${item.value}`}
          >
            {item.text}
          </Checkbox>
        ))}
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render checkbox group', () => {
    const changeFn = jest.fn();
    const checks = ['hey', 'bonjour'];
    const wrapper = deep(
      <CheckboxGroup model={checks} handleChange={changeFn} maxSelect={3}>
        {checkList.map((item, ind) => (
          <Checkbox key={`g-${ind}-${item.value}`} {...item}>
            {item.text}
          </Checkbox>
        ))}
      </CheckboxGroup>
    );

    wrapper
      .find('.caf-checkbox')
      .last()
      .simulate('click');
    expect(changeFn).toHaveBeenCalledTimes(1);

    wrapper
      .find('.caf-checkbox')
      .first()
      .simulate('click');
    expect(changeFn).toHaveBeenCalledTimes(2);

    wrapper.render(
      <CheckboxGroup
        disabled
        model
        handleChange={changeFn}
        maxSelect={checkList.length}
      >
        {checkList.map((item, ind) => (
          <Checkbox
            key={`g-${ind}-${item.value}`}
            {...item}
            checked={item.value === 'conba'}
          >
            {item.text}
          </Checkbox>
        ))}
      </CheckboxGroup>
    );
    wrapper
      .find('.caf-checkbox')
      .first()
      .simulate('click');
    expect(changeFn).toHaveBeenCalledTimes(2);

    wrapper.render(
      <CheckboxGroup
        model={checkList.map(item => item.value)}
        maxSelect={checkList.length}
      >
        <Checkbox value="fsdfa">fadsfadf</Checkbox>
        {checkList.map((item, ind) => (
          <Checkbox key={`g-${ind}-${item.value}`} {...item}>
            {item.text}
          </Checkbox>
        ))}
      </CheckboxGroup>
    );
    wrapper
      .find('.caf-checkbox')
      .first()
      .simulate('click');
    expect(changeFn).toHaveBeenCalledTimes(2);
  });
});
