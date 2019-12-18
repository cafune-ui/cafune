import Stepper from '../';
import { mount } from 'enzyme';
import { shallow } from 'preact-render-spy';
describe('Stepper', () => {
  it('should render properly', () => {
    const changeFn = jest.fn();
    const wrapper = shallow(<Stepper initVal={2} onChange={changeFn} min={1} max={4} integerOnly />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('.caf-stepper__btn--plus').simulate('click');
    expect(changeFn).toHaveBeenCalledTimes(1);

    wrapper.find('.caf-stepper__btn--minus').simulate('click');
    expect(changeFn).toHaveBeenCalledTimes(2);

    wrapper.find('input').simulate('keyup', {
      keyCode: 99,
      target: {
        value: 3
      }
    });
    expect(changeFn).toHaveBeenCalledTimes(3);
    
    // test input anything but number
    wrapper.find('input').simulate('keyup', {
      keyCode: 65,
      target: {
        value: 'A'
      }
    });
    expect(changeFn).toHaveBeenCalledTimes(4);

    // max
    wrapper.find('input').simulate('keyup', {
      keyCode: 101,
      target: {
        value: 4.3
      }
    });
    expect(changeFn).toHaveBeenCalledTimes(5);

    // min
    wrapper.find('input').simulate('keyup', {
      keyCode: 96,
      target: {
        value: 0
      }
    });
    expect(changeFn).toHaveBeenCalledTimes(6);

  });
  it('should render show num', () => {
    const wrapper = shallow(<Stepper showNum min={1} max={1} />);
    expect(wrapper).toMatchSnapshot();

    wrapper.render(<Stepper showNum min={-Infinity} max={10} />);
    expect(wrapper).toMatchSnapshot();

    const changeFn = jest.fn();
    wrapper.render(<Stepper initVal={1} step={3} max={3} min={2} />);
    wrapper.find('.caf-stepper__btn--plus').simulate('click');
    expect(changeFn).toHaveBeenCalledTimes(0);
    wrapper.find('.caf-stepper__btn--minus').simulate('click');
    expect(changeFn).toHaveBeenCalledTimes(0);
    expect(wrapper).toMatchSnapshot();

    wrapper.render(<Stepper initVal={2} step={3} max={2} min={2} disabled />);
    wrapper.find('.caf-stepper__btn--plus').simulate('click');
    expect(changeFn).toHaveBeenCalledTimes(0);
    wrapper.find('.caf-stepper__btn--minus').simulate('click');
    expect(changeFn).toHaveBeenCalledTimes(0);
    expect(wrapper).toMatchSnapshot();

    wrapper.render(<Stepper initVal={1} min={-Infinity} integerOnly />);
    expect(wrapper).toMatchSnapshot();

    wrapper.render(<Stepper initVal={1} readOnly />);
    expect(wrapper).toMatchSnapshot();
  });
});
