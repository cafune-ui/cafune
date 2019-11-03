import { Swiper } from 'cafune';
import { Component } from 'preact';
const { SwiperItem } = Swiper;

export default class SwiperComp extends Component {
  state = {
    current: 1
  };
  renderCustom() {
    const { current } = this.state;
    return (
      <div style="padding: 4px 10px;position: absolute;right: 10px;bottom:10px;background: rgba(0,0,0, .4);border-radius: 6px;color: #fff;font-size:12px;">
        {current + 1}/4
      </div>
    );
  }
  change = ind => {
    this.setState({
      current: ind
    });
  };
  render() {
    const sliderNum = 4;
    return (
      <div class="caf-demo-block">
        <p class="caf-demo-title">默认</p>
        <Swiper
          initialIndex={0}
          showIndicators={true}
          autoplay={true}
          intervel={3000}
        >
          {Array(...Array(sliderNum)).map((_, ind) => (
            <SwiperItem key={ind}>
              <div style="height: 150px;text-align:center;line-height: 150px;">
                {ind + 1}
              </div>
            </SwiperItem>
          ))}
        </Swiper>
        <p class="caf-demo-title">自定义指示器</p>
        <Swiper onChange={this.change} customIndicator={this.renderCustom()}>
          {Array(...Array(4)).map((_, ind) => (
            <SwiperItem key={ind}>
              <div style="height: 150px;text-align:center;line-height: 150px;">
                {ind + 1}
              </div>
            </SwiperItem>
          ))}
        </Swiper>
      </div>
    );
  }
}
