
  import { NavBar } from '../';
  import { render } from 'enzyme';
  import { shallow, deep } from 'preact-render-spy';
    
  describe('NavBar', () => {
    it('should render properly', () => {
      const wrapper = shallow(<NavBar />);
      expect(wrapper).toMatchSnapshot();
    });
  });