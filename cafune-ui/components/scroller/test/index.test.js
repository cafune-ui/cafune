
  import { Scroller } from '../';
  import { render } from 'enzyme';
  import { shallow, deep } from 'preact-render-spy';
    
  describe('Scroller', () => {
    it('should render properly', () => {
      const wrapper = shallow(<Scroller />);
      expect(wrapper).toMatchSnapshot();
    });
  });