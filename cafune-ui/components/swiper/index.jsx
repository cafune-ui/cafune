import { Component, createRef } from 'preact';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Item from './item';
import { touchEventMap, getTouch } from '../util/event';

// function checkIfIndicaotr(el) {
//   return el.nodeName.displayName === 'SwiperIndicator';
// }
function checkIfItem(el) {
  return el.nodeName.displayName === 'swiperItem';
}

/**
 * 轮播
 * @example
 * ```javascript
 * <Swiper
 *  initialIndex={0}
 *  showIndicators={true}
 *  autoplay={true}
 *  intervel={3000}
 *  onChange={action('handleChange')}
 * >
 *  {Array(...Array(sliderNum)).map((_, ind) => (
 *    <SwiperItem key={ind}>{ind + 1}</SwiperItem>
 *  ))}
 * </Swiper>
 * ```
 * ```
 */
class Swiper extends Component {
  static SwiperItem = Item;
  static propTypes = {
    /**
     * 自定义类名
      */
    prefix: PropTypes.string,
    /**
     * 是否自动切换
     */
    autoplay: PropTypes.bool,
    /**
     * 切换间隔事件（毫秒）
     */
    intervel: PropTypes.number,
    /**
     * 初始index
     */
    initialIndex: PropTypes.number,
    /**
     * 是否显示指示器
     */
    showIndicators: PropTypes.bool,
    /**
     * 切换时触发事件
     */
    onChange: PropTypes.func,
    /**
     * 自定义指示器
     */
    customIndicator: PropTypes.node
  };
  static defaultProps = {
    autoplay: true,
    intervel: 3000,
    initialIndex: 0,
    showIndicators: true
  };
  state = {
    current: this.props.initialIndex
  };
  total = 0;
  getSwiperData(children) {
    const data = [];
    children.forEach((item, ind) => {
      if (item && checkIfItem(item)) {
        const props = item.attributes;
        const { className } = props;
        const { children } = item;
        data.push({
          id: ind,
          actived: ind === this.state.current,
          content: children,
          className
        });
      }
    });
    return data;
  }
  autoPlayTimer;
  size = 0;
  swiperCurrent = 0;
  resize = () => {
    const container = this.swiperContainer.current;
    if (container) {
      const size = container.getBoundingClientRect();
      this.size = size.width;
    }
    const rect = this.swiperList.current;
    if (rect) {
      rect.style.width = `${this.size * this.swiperData.length}px`;
    }
  };
  componentDidMount() {
    this.resize();
    window.addEventListener('resize', this.resize);
    const rect = this.swiperList.current;
    if (rect) {
      rect.addEventListener('click', this.onSwiperClick, true);
      rect.addEventListener(touchEventMap.down, this.readyMoving);
      rect.addEventListener(touchEventMap.move, this.startMoving);
      rect.addEventListener(touchEventMap.up, this.endMoving);
      rect.addEventListener(touchEventMap.out, this.endMoving);
    }
    this.moveTo({ ind: this.state.current });
    this.autoPlay();
  }
  clearAutoPlay() {
    this.autoPlayTimer && clearTimeout(this.autoPlayTimer);
  }
  autoPlay() {
    const { autoplay, intervel } = this.props;
    if (autoplay && this.swiperData.length > 1) {
      this.clearAutoPlay();
      this.autoPlayTimer = setTimeout(() => {
        this.swiperCurrent = this.state.current + 1;
        let { current } = this.state;
        current = current === this.swiperData.length - 1 ? 0 : current + 1;
        this.moveTo({ ind: current });
      }, intervel);
    }
  }
  componentWillUnmount() {
    this.clearAutoPlay();
    const rect = this.swiperList.current;
    if (rect) {
      rect.removeEventListener('click', this.onSwiperClick, true);
      rect.removeEventListener(touchEventMap.down, this.readyMoving);
      rect.removeEventListener(touchEventMap.move, this.startMoving);
      rect.removeEventListener(touchEventMap.up, this.endMoving);
      rect.removeEventListener(touchEventMap.out, this.endMoving);
    }

    window.removeEventListener('resize', this.resize);
  }
  moveTo({ ind, offset }) {
    this.clearAutoPlay();
    if (this.swiperList && this.swiperList.current) {
      const $swiper = this.swiperList.current;
      if (ind !== undefined) {
        $swiper.style.transitionDuration = '500ms';
        $swiper.style.transform = `translate3d(${ind *
          (1 / this.total) *
          -100}%, 0, 0 )`;
        this.setState(
          {
            current: ind
          },
          () => {
            this.autoPlay();
            this.props.onChange && this.props.onChange(ind);
          }
        );
      } else if (offset) {
        // 在拖动时不要过渡时间，否则卡顿
        $swiper.style.transitionDuration = '0ms';
        $swiper.style.transform = `translate3d(${offset}, 0, 0 )`;
      }
    }
  }
  isSwiping = false;
  startX;
  deltaX;
  offsetX = 0;
  direction;
  onSwiperClick = e => {
    if (this.offsetX > 0) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  };
  readyMoving = e => {
    this.startTimeStamp = Date.now();
    this.clearAutoPlay();
    this.isSwiping = true;
    const touch = getTouch(e);
    this.startX = touch.clientX;
  };
  startMoving = e => {
    if (!this.isSwiping) return;
    const touch = getTouch(e);
    this.deltaX = touch.clientX - this.startX;
    this.offsetX = Math.abs(this.deltaX);
    this.direction = this.deltaX >= 0 ? -1 : 1;
    e.preventDefault();
    e.stopPropagation();
    this.moveTo({
      offset: `${this.state.current * this.size * -1 + this.deltaX}px`
    });
  };
  endMoving = () => {
    if (!this.isSwiping) return;
    this.isSwiping = false;
    // 是否已经在第一或最后一张
    const inBound =
      this.state.current + this.direction >= 0 &&
      this.state.current + this.direction < this.swiperData.length;
    if (this.offsetX < this.size / 4 || !inBound) {
      this.moveTo({ ind: this.state.current });
    } else if (inBound) {
      this.moveTo({ ind: this.state.current + this.direction });
    }
    setTimeout(() => (this.offsetX = 0), 500);
  };
  renderIndicators(data) {
    return data && data.length > 1
      ? Array(...Array(data.length)).map((_, ind) => (
          <span
            key={ind}
            className="caf-swiper-indicator-item"
            data-status={ind === this.state.current ? 1 : 0}
            onClick={() => this.moveTo({ ind })}
          />
        ))
      : null;
  }
  renderItems(data) {
    if (data && data.length) {
      return data.map(item => {
        return (
          <Item
            key={item.id}
            onItemClick={this.onItemClick}
            actived={item.actived}
            width={`${(1 / data.length) * 100}%`}
          >
            {item.content}
          </Item>
        );
      });
    }
  }
  swiperData;
  swiperList = createRef();
  swiperContainer = createRef();
  renderSwipers() {
    const { prefix, children, className, showIndicators, customIndicator, ...restProps } = this.props;
    if (children && children.length) {
      const swiperData = this.getSwiperData(children);
      this.swiperData = swiperData;
      this.total = swiperData.length;
      return (
        <div className={cx(prefix, className)} ref={this.swiperContainer} {...restProps}>
          <div className={`${prefix}-container`} ref={this.swiperList}>
            {this.renderItems(swiperData)}
          </div>
          {customIndicator
            ? customIndicator
            : showIndicators && (
                <div className={`${prefix}-indicator`}>
                  {this.renderIndicators(swiperData)}
                </div>
              )}
        </div>
      );
    } else {
      return null;
    }
  }
  render() {
    return this.renderSwipers();
  }
}
export default Swiper;
