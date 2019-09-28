import { h } from 'preact';
import  Switch  from '../';
import { mount, render } from 'enzyme';
import { shallow } from 'preact-render-spy';

describe('<Switch />', () => {
  beforeEach(() => {
    global.window = {};
  });
  it('should trigger onChange when click', () => {
    const changeEvent = jest.fn();
    let wrapper = mount(<Switch isActived={false} onChange={changeEvent} />);
    wrapper.find('.caf-switch').simulate('click');
    expect(changeEvent).toHaveBeenCalled();
  });
  it('should not trigger onChange when disabled', () => {
    const changeEvent = jest.fn();
    let wrapper = mount(
      <Switch isActived={false} isDisabled onChange={changeEvent} />
    );
    wrapper.find('.caf-switch').simulate('click');
    expect(changeEvent).not.toHaveBeenCalled();
  });
  it('should set font size', () => {
    const wrapper = render(<Switch size="20px" />);
    expect(wrapper).toMatchSnapshot();
  });
  if (
    ('should render with custom color',
    () => {
      let wrapper = mount(
        <Switch isActived activedColor="#2e4e7e" inActivedColor="#bbcdc5" />
      );
      expect(wrapper).toMatchSnapshot();
      wrapper = mount(
        <Switch
          isActived={false}
          activedColor="#2e4e7e"
          inActivedColor="#bbcdc5"
        />
      );
      expect(wrapper).toMatchSnapshot();
    })
  );
});
