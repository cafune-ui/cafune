import { h } from 'preact';
import Pagination from '../';
import { mount } from 'enzyme';

describe('<Pagination />', () => {
  it('should render properly', () => {
    const wrapper = mount(<Pagination pn="1" pages="4" />);
    expect(wrapper.find('.caf-page-indicator').text()).toEqual('1 / 4');
  });
  it('should render disabled', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Pagination pn="1" pages="1" onChange={onChange} />);
    document.querySelectorAll('.caf-page-btn').forEach(ele => {
      expect(/caf-page-btn__disabled/.test(ele.className)).toEqual(true);
    })
    wrapper.find('.caf-page-btn').first().simulate('click');
    expect(onChange).not.toHaveBeenCalled();
    wrapper.find('.caf-page-btn').last().simulate('click');
    expect(onChange).not.toHaveBeenCalled();
  });
  it('should trigger change on click btn', () => {
    const onChange = jest.fn();
    const wrapper = mount(<Pagination pn="2" pages="4" onChange={onChange} />);
    wrapper.find('.caf-page-btn').first().simulate('click');
    expect(onChange).toHaveBeenCalled();
    wrapper.find('.caf-page-btn').last().simulate('click');
    expect(onChange).toHaveBeenCalled();
  });
});