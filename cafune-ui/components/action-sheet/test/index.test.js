import { ActionSheet } from '../';
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';


describe('ActionSheet', () => {
  it('should render properly', () => {
    const wrapper = shallow(<ActionSheet />);
    expect(wrapper).toMatchSnapshot();
  });
});
