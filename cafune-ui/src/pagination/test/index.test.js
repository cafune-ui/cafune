import Pagination from '../';
import { render, mount } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

describe('<Pagination />', () => {
  it('should render properly', () => {
    const wrapper = mount(<Pagination mode="number" current="1" total="4" />);
    expect(wrapper.find('.caf-page__indicator').text()).toEqual('1 / 4');

    const wrapper2 = mount(<Pagination mode="pointer" current="1" total="4" />);
    expect(wrapper2.find('.caf-page__dot__item').length).toEqual(4);
  });
  it('should render disabled', () => {
    const onChange = jest.fn();
    const wrapper = deep(
      <Pagination
        btnText={{ prev: 'prev', next: 'next' }}
        current="1"
        total="1"
        onChange={onChange}
      />
    );
    wrapper
      .find('.caf-btn')
      .first()
      .simulate('click');
    expect(onChange).not.toHaveBeenCalled();
    wrapper
      .find('.caf-btn')
      .last()
      .simulate('click');
    expect(onChange).not.toHaveBeenCalled();
  });
  it('should trigger change on click btn', () => {
    const onChange = jest.fn();
    const wrapper = deep(
      <Pagination
        btnIcon={{ prev: 'prev', next: 'next' }}
        current="2"
        total="4"
        step={2}
        onChange={onChange}
      />
    );
    wrapper
      .find('.caf-btn')
      .first()
      .simulate('click');
    expect(onChange).toHaveBeenCalled();
    wrapper
      .find('.caf-btn')
      .last()
      .simulate('click');
    expect(onChange).toHaveBeenCalled();
  });
});
