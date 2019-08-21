
  import  Collapse  from '../';
  import { render } from 'enzyme';
  import { shallow, deep } from 'preact-render-spy';

  describe('Collapse', () => {
    it('should render properly', () => {
      const wrapper = shallow(<Collapse />);
      expect(wrapper).toMatchSnapshot();
    });
  });