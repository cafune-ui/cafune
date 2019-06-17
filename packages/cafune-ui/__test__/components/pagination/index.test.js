import { h } from 'preact';
import { Pagination } from 'components';
import { render } from 'enzyme';
import { shallow } from 'preact-render-spy';

describe('<Pagination />', () => {
  it('should render properly', () => {
    const wrapper = render(<Pagination pn="1" pages="4" />);
    expect(wrapper.find('.pagination_indicator').text()).toEqual('1 / 4');
  });
  it('should render disabled', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Pagination pn="1" pages="1" onChange={onChange} />);
    document.querySelectorAll('.pagination_btn').forEach(ele => {
      expect(/pagination_btn__disabled/.test(ele.className)).toEqual(true);
    })
    wrapper.find('.pagination_btn').first().simulate('click');
    expect(onChange).not.toHaveBeenCalled();
    wrapper.find('.pagination_btn').last().simulate('click');
    expect(onChange).not.toHaveBeenCalled();
  });
  it('should trigger change on click btn', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Pagination pn="2" pages="4" onChange={onChange} />);
    wrapper.find('.pagination_btn').first().simulate('click');
    expect(onChange).toHaveBeenCalled();
    wrapper.find('.pagination_btn').last().simulate('click');
    expect(onChange).toHaveBeenCalled();
  });
});