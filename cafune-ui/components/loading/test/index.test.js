
  import { Loading } from '../';
  import { render } from 'enzyme';
  import { shallow, deep } from 'preact-render-spy';
    
  describe('Loading', () => {
    it('should render properly', () => {
      const wrapper = shallow(<Loading />);
      expect(wrapper).toMatchSnapshot();
    });
  });