import { Swiper } from 'cafune';
import { Component } from 'preact';
const { SwiperItem } = Swiper;
import './index.scss';

export default class SwiperComp extends Component {
  state = {
    current: 1
  };
  renderCustom() {
    const { current } = this.state;
    return <div class="swiper-indicator">{current + 1} / 4</div>;
  }
  change = ind => {
    this.setState({
      current: ind
    });
  };
  render() {
    const sliderNum = 4;
    return (
      <div>
        <p class="caf-demo-title">默认</p>
        <Swiper initialIndex={0} showIndicators={true} autoplay={true}>
          {Array(...Array(sliderNum)).map((_, ind) => (
            <SwiperItem key={ind}>
              <div class="swiper-block">{ind + 1}</div>
            </SwiperItem>
          ))}
        </Swiper>
        {/* <p class="caf-demo-title">透明度切换</p>
        <Swiper
          type="fade"
          initialIndex={0}
          showIndicators={true}
          autoplay={true}
        >
          {Array(...Array(sliderNum)).map((_, ind) => (
            <SwiperItem key={ind}>
              <div class="swiper-block">{ind + 1}</div>
            </SwiperItem>
          ))}
        </Swiper>
        <p class="caf-demo-title">洗牌</p>
        <Swiper
          type="shuffle"
          initialIndex={0}
          showIndicators={true}
          autoplay={true}
        >
          {Array(...Array(sliderNum)).map((_, ind) => (
            <SwiperItem key={ind}>
              <div class="swiper-block">{ind + 1}</div>
            </SwiperItem>
          ))}
        </Swiper> */}
        <p class="caf-demo-title">自定义</p>
        <Swiper
          slideWidth={280}
          onChange={this.change}
          intervel={2000}
          duration={200}
          customIndicator={this.renderCustom()}
        >
          {Array(...Array(4)).map((_, ind) => (
            <SwiperItem key={ind}>
              <div class="swiper-block">{ind + 1}</div>
            </SwiperItem>
          ))}
        </Swiper>
      </div>
    );
  }
}
