
  import  NoticeBar  from '../';
  import { render } from 'enzyme';
  import { shallow, deep } from 'preact-render-spy';
    
  describe('NoticeBar', () => {
    it('should render properly', () => {
      const wrapper = shallow(<NoticeBar />);
      expect(wrapper).toMatchSnapshot();
    });
  });