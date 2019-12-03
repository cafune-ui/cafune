import SearchBar from '../';
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

describe('SearchBar', () => {
  it('should render with placeholder', () => {
    const wrapper = shallow(
      <SearchBar
        placeholder="请输入关键词"
        action={{
          type: 'cancel',
          onClick() {
            console.log('action cancel');
          }
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render with input event', () => {
    const onChange = jest.fn();
    const onConfirm = jest.fn();
    const onCancel = jest.fn();
    const val = 'test';
    const wrapper = shallow(
      <SearchBar
        value={val}
        onCancel={onCancel}
        onChange={onChange}
        onConfirm={onConfirm}
      />
    );
    expect(wrapper.find('input').attr('value')).toEqual(val);
    wrapper.find('input').simulate('change');
    expect(onChange).toHaveBeenCalled();
    wrapper.find('form').simulate('submit');
    expect(onConfirm).toHaveBeenCalled();
  });
  it('should call confirm', () => {
    const onConfirm = jest.fn();
    const wrapper = shallow(
      <SearchBar
        value="test"
        onConfirm={onConfirm}
        action={{
          type: 'confirm',
          onClick: onConfirm
        }}
      />
    );
    wrapper.find('Button').simulate('click');
    expect(onConfirm).toHaveBeenCalled();
  });
  it('should call cancel', () => {
    const onCancel = jest.fn();
    const wrapper = shallow(
      <SearchBar
        value="test"
        onCancel={onCancel}
        action={{
          type: 'cancel'
        }}
      />
    );
    wrapper.find('Button').simulate('click');
    expect(onCancel).toHaveBeenCalled();
  });
  it('should call clear', () => {
    const onCancel = jest.fn();
    const cancelClick = jest.fn();
    const wrapper = shallow(
      <SearchBar
        value="test"
        action={{
          type: 'cancel',
          onClick: cancelClick
        }}
        onChange={val =>
          wrapper.render(
            <SearchBar
              value={val}
              action={{
                type: 'cancel',
                onClick: cancelClick
              }}
            />
          )
        }
      />
    );
    wrapper.find('Button').simulate('click');
    expect(onCancel).not.toHaveBeenCalled();
    expect(cancelClick).toHaveBeenCalled();
    expect(wrapper.find('input').attr('value')).toBe('');
  });
});
