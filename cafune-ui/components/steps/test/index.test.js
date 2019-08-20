
  import { Steps } from '../';
  import { render } from 'enzyme';
  import { shallow, deep } from 'preact-render-spy';
    
  
  describe('Steps', () => {
    it('should render properly', () => {
      const wrapper = shallow(<Steps />);
      expect(wrapper).toMatchSnapshot();
    });
  });