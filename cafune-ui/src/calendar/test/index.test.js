import  Calendar  from '../';
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

describe('Calendar', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Calendar />);
    expect(wrapper).toMatchSnapshot();
  });
});
