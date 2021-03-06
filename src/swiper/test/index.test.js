import Swiper from '../';
const { SwiperItem } = Swiper;
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

describe('<Swiper />', () => {
  it('should render porperly', () => {
    const wrapper = deep(
      <Swiper initialIndex={0} showIndicators={true} autoplay={true}>
        {Array(...Array(4)).map((_, ind) => (
          <SwiperItem key={ind}>{ind + 1}</SwiperItem>
        ))}
      </Swiper>
    );
    wrapper.find('.caf-swiper__indicator__item').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render nothing', () => {
    const wrapper = deep(
      <Swiper initialIndex={0}></Swiper>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a customIndicator', () => {
    const indi = <div>2/4</div>;
    const changeFn = jest.fn();
    const interval = 500;
    const wrapper = deep(
      <Swiper
        slideWidth={280}
        initialIndex={3}
        onChange={changeFn}
        intervel={interval}
        duration={200}
        customIndicator={indi}
      >
        {Array(...Array(4)).map((_, ind) => (
          <SwiperItem key={ind}>{ind + 1}</SwiperItem>
        ))}
      </Swiper>
    );
    expect(wrapper).toMatchSnapshot();

    setTimeout(() => {
      expect(changeFn).toHaveBeenCalled();
    }, interval);
    // wrapper.render(null);
    // expect(wrapper).toMatchSnapshot();
  });
});
