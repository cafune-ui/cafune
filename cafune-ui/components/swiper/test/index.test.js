import Swiper from '../';
const { SwiperItem } = Swiper;
import { render } from 'enzyme';
import { shallow, deep } from 'preact-render-spy';

describe('<Swiper />', () => {
  it('should render porperly', () => {
    const wrapper = render(
      <Swiper>
        {Array(...Array(4)).map((_, ind) => (
          <SwiperItem key={ind}>{ind + 1}</SwiperItem>
        ))}
      </Swiper>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a customIndicator', () => {
    const indi = (
      <div style="padding: 4px 10px;position: absolute;right: 10px;bottom:10px;background: rgba(0,0,0, .6);color: #fff;font-size:12px;">
        {2}/4
      </div>
    );
    const wrapper = deep(
      <Swiper customIndicator={indi}>
        {Array(...Array(4)).map((_, ind) => (
          <SwiperItem key={ind}>{ind + 1}</SwiperItem>
        ))}
      </Swiper>
    );
    expect(wrapper).toMatchSnapshot();

    wrapper.render(null);
    expect(wrapper).toMatchSnapshot();
  });
});
