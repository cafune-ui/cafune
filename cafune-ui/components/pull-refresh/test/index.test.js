
  import  PullRefresh  from '../';
  import { render } from 'enzyme';
  import { shallow, deep } from 'preact-render-spy';
    
  describe('PullRefresh', () => {
    it('should render properly', () => {
      const wrapper = shallow(<PullRefresh />);
      expect(wrapper).toMatchSnapshot();
    });
  });