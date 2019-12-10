import NavBar from '../';
import { render, mount } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

describe('NavBar', () => {
  it('should render properly', () => {
    const backFn = jest.fn();
    const searchFn = jest.fn();
    const wrapper = mount(
      <NavBar
        isFixed
        left={{
          icon: 'wrong',
          text: '返回',
          color: '#369',
          clickHandler: backFn
        }}
        rights={{
          icon: 'search',
          text: '搜索',
          badge: '22',
          clickHandler: searchFn
        }}
      >
        标题
      </NavBar>
    );
    expect(wrapper).toMatchSnapshot();
      
    console.log( wrapper.find('.caf-navbar__btns--left .caf-navbar__btn'))
    wrapper.find('.caf-navbar__btns--left .caf-navbar__btn').simulate('click');
    expect(backFn).toHaveBeenCalled();
    wrapper.find('.caf-navbar__btns--right .caf-navbar__btn').simulate('click');
    expect(searchFn).toHaveBeenCalled();

    const wrapper2 = deep(
      <NavBar
        isFixed
        left={{
          text: '返回',
          color: '#369',
          badge: true,
          clickHandler: backFn
        }}
        rights={[
          {
            icon: 'search',
            text: '搜索',
            clickHandler: searchFn
          },
          null
        ]}
      >
        标题
      </NavBar>
    );
    expect(wrapper2).toMatchSnapshot();
  });
});
