
  import { SearchBar } from '../';
  import { render } from 'enzyme';
  import { shallow, deep } from 'preact-render-spy';
    
  describe('SearchBar', () => {
    it('should render properly', () => {
      const wrapper = shallow(<SearchBar />);
      expect(wrapper).toMatchSnapshot();
    });
  });