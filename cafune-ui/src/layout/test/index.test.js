
  import  Layout  from '../';
  import { render } from 'enzyme';
  import { shallow, deep } from 'preact-render-spy';
    

  describe('Layout', () => {
    it('should render properly', () => {
      const wrapper = shallow(<Layout />);
      expect(wrapper).toMatchSnapshot();
    });
  });