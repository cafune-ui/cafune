import Stepper from '../';
import { mount } from 'enzyme';
import { shallow } from 'preact-render-spy';
describe('Stepper', () => {
  it('should render properly', () => {
    const changeFn = jest.fn();
    const wrapper = shallow(<Stepper initVal={1} onChange={changeFn} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('.caf-stepper__btn--plus').simulate('click');
    expect(changeFn).toHaveBeenCalled();
  });
  it('should render show num', () => {
    const wrapper = shallow(<Stepper initVal={1} showNum />);
    expect(wrapper).toMatchSnapshot();

    wrapper.render(<Stepper initVal={1} step={3} />);
    expect(wrapper).toMatchSnapshot();

    wrapper.render(<Stepper initVal={1} step={3} disabled />);
    expect(wrapper).toMatchSnapshot();

    wrapper.render(<Stepper initVal={1} />);

    wrapper.render(<Stepper initVal={1} min={-Infinity} integerOnly />);
    expect(wrapper).toMatchSnapshot();

    wrapper.render(<Stepper initVal={1} readOnly />);
    expect(wrapper).toMatchSnapshot();
  });
});
