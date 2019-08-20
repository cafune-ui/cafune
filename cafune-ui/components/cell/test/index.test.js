
  import { Checkbox } from '../';
  import { render } from 'enzyme';
  import { shallow, deep } from 'preact-render-spy';
    
  describe('Checkbox', () => {
    it('should render properly', () => {
      const wrapper = shallow(<Checkbox />);
      expect(wrapper).toMatchSnapshot();
    });
  });
  