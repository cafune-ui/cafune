
import { Radio } from 'cafune';
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';
describe('Radio', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Radio />);
    expect(wrapper).toMatchSnapshot();
  });
});
    