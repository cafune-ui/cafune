
import Transition from '../';
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';
describe('Transition', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Transition />);
    expect(wrapper).toMatchSnapshot();
  });
});
    