
  import  Grid  from '../';
  import { render } from 'enzyme';
  import { shallow, deep } from 'preact-render-spy';
    
  describe('Grid', () => {
    it('should render properly', () => {
      const wrapper = shallow(<Grid />);
      expect(wrapper).toMatchSnapshot();
    });
  });