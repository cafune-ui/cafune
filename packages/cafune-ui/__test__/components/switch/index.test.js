import { h } from 'preact';
import { Switch } from 'components';
import { render } from 'enzyme';
import { shallow } from 'preact-render-spy';

describe('<Switch />', () => {
  beforeEach(() => {
    global.window = {};
  });
  it('should trigger onChange when click', () => {
    const changeEvent = jest.fn();
    let wrapper = shallow(<Switch isActived={false} onChange={changeEvent} />);
    wrapper.find('.caf-switch').simulate('click');
    expect(changeEvent).toHaveBeenCalled();
  });
  it('should not trigger onChange when disabled', () => {
    const changeEvent = jest.fn();
    let wrapper = shallow(<Switch isActived={false} isDisabled onChange={changeEvent} />);
    wrapper.find('.caf-switch').simulate('click');
    expect(changeEvent).not.toHaveBeenCalled();
  });
  it('should set font size', () => {
    const wrapper = shallow(<Switch
      isActived={isActived1}
      size="20px"
      onChange={this.onChange('isActived1')}
    />);
    expect(document.querySelector('.caf-switch').style.fontSize).toBe('20px');
  });
  if('should render with custom color', () => {
    let wrapper = shallow(<Switch
      isActived
      activedColor="#2e4e7e"
      inActivedColor="#bbcdc5"
    />);
    expect(document.querySelector('.caf-switch').style.backgroundColor).toBe('#2e4e7e');
    wrapper = shallow(<Switch
      isActived={false}
      activedColor="#2e4e7e"
      inActivedColor="#bbcdc5"
    />);
    expect(document.querySelector('.caf-switch').style.fontSize).toBe('#bbcdc5');
  });
});
