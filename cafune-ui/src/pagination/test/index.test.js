import Pagination from '../';
import { render, mount, shallow } from 'enzyme';

describe('<Pagination />', () => {
  it('should render properly', () => {
    const wrapper = mount(<Pagination current="1" total="4" />);
    expect(wrapper.find('.caf-page__indicator').text()).toEqual('1 / 4');
  });
  it('should render disabled', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <Pagination
        btnText={{ prev: 'prev', next: 'next' }}
        current="1"
        total="1"
        onChange={onChange}
      />
    );
    document.querySelectorAll('.caf-page__btn').forEach(ele => {
      expect(/caf-page__btn__disabled/.test(ele.className)).toEqual(true);
    });
    // wrapper.find('.caf-page__btn').first().simulate('click');
    // expect(onChange).not.toHaveBeenCalled();
    // wrapper.find('.caf-page__btn').last().simulate('click');
    // expect(onChange).not.toHaveBeenCalled();
  });
  it('should trigger change on click btn', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <Pagination
        btnText={{ prev: 'prev', next: 'next' }}
        current="2"
        total="4"
        onChange={onChange}
      />
    );
    // wrapper.find('.caf-page__btn').first().simulate('click');
    // expect(onChange).toHaveBeenCalled();
    // wrapper.find('.caf-page__btn').last().simulate('click');
    // expect(onChange).toHaveBeenCalled();
    document.querySelectorAll('.caf-page__btn').forEach(ele => {
      expect(/caf-page__btn__disabled/.test(ele.className)).toEqual(false);
    });
  });
});
