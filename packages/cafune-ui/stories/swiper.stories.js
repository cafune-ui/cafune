import { storiesOf } from '@storybook/preact';
import { Swiper } from 'components';
const { SwiperItem } = Swiper;
import { withKnobs, number, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import './style.css';
import notes from './markdown/swiper.md';
import { Component } from 'preact';

class TestComp extends Component {
  state = {
    current: 0
  };
  change = ind => {
    this.setState({
      current: ind
    });
  };
  renderCustom() {
    const { current } = this.state;
    return (
      <div style="padding: 4px 10px;position: absolute;right: 10px;bottom:10px;background: rgba(0,0,0, .6);color: #fff;font-size:12px;">
        {current + 1}/4
      </div>
    );
  }
  render() {
    return (
      <div style="width: 400px;color: #fff;font-size: 20px;text-align:center;">
        <Swiper onChange={this.change} customIndicator={this.renderCustom()}>
          {Array(...Array(4)).map((_, ind) => (
            <SwiperItem key={ind}>{ind + 1}</SwiperItem>
          ))}
        </Swiper>
      </div>
    );
  }
}
storiesOf('Component|Swiper 轮播', module)
  .addDecorator(withKnobs)
  .add(
    'Swiper 轮播',
    () => {
      const sliderNum = 5;
      const showIndicators = boolean('Indicators', true);
      const autoplay = boolean('AutoPlay', true);
      const initialIndex = number('index', 0, {
        range: true,
        min: 0,
        max: sliderNum,
        step: 1
      });
      const intervel = number('Interval(ms)', 3000);
      return (
        <div style="width: 400px;color: #fff;font-size: 20px;text-align:center;">
          <Swiper
            initialIndex={initialIndex}
            showIndicators={showIndicators}
            autoplay={autoplay}
            intervel={intervel}
            onChange={action('handleChange')}
          >
            {Array(...Array(sliderNum)).map((_, ind) => (
              <SwiperItem key={ind}>{ind + 1}</SwiperItem>
            ))}
          </Swiper>
        </div>
      );
    },
    {
      notes
    }
  )
  .add('Swiper 自定义指示器', () => <TestComp />, {
    notes
  });
