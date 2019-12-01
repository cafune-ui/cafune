import Stepper from '../';
import { mount } from 'enzyme';
// import { mount, deep } from 'preact-render-spy';
describe('Stepper', () => {
  it('should render properly', () => {
    const wrapper = mount(<Stepper />);
    expect(wrapper).toMatchSnapshot();
  });
});
