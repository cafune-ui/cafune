
  import  Icon  from '../';
  import { render } from 'enzyme';
  import { shallow, deep } from 'preact-render-spy';
    

  describe('Icon', () => {
    it('should render properly', () => {
      const wrapper = shallow(<Icon />);
      expect(wrapper).toMatchSnapshot();
    });
  });