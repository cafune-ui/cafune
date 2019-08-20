
  import { Stepper } from '../';
  import { render } from 'enzyme';
  import { shallow, deep } from 'preact-render-spy';
  describe('Stepper', () => {
    it('should render properly', () => {
      const wrapper = shallow(<Stepper />);
      expect(wrapper).toMatchSnapshot();
    });
  });