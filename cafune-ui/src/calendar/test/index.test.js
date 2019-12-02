import  Calendar  from '../';
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

describe('Calendar', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Calendar />);
    expect(wrapper).toMatchSnapshot();

    wrapper.render(<Calendar defaultSelect={{ start: "2019/10/1", end: "2019/10/28"}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
