import Icon from '../';
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

describe('Icon', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Icon icon="like" color="#549" size="28px" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with img', () => {
    const wrapper = shallow(<Icon icon="/someurl/img" color="#549" size="28px" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with custom prefix', () => {
    const wrapper = shallow(<Icon customPrefix="ri" tag="li" icon="/someurl/img" color="#549" size="28px" />);
    expect(wrapper).toMatchSnapshot();
  });
});
