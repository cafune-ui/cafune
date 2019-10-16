import { Component, createRef, h, VNode } from 'preact';
import cx from 'classnames';
import Item from './item';
import { touchEventMap, getTouch } from '../util/event';
import { isBrowser } from '../util/isomorphic';
// function checkIfIndicaotr(el) {
//   return el.nodeName.displayName === 'SwiperIndicator';
// }
function checkIfItem(el) {
  return el.nodeName.displayName === 'swiperItem';
}

interface IProps {
  /**
   * 自定义前缀
   */
  prefix?: string;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 是否自动切换
   */
  autoplay?: boolean;
  /**
   * 切换间隔事件（毫秒）
   */
  intervel?: number;
  /**
   * 初始index
   */
  initialIndex?: number;
  /**
   * 是否显示指示器
   */
  showIndicators?: boolean;
  /**
   * 切换时触发事件
   */
  onChange?: (ind?: number | Event) => void;
  /**
   * 自定义指示器
   */
  customIndicator?: VNode | HTMLElement;
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
class Swiper extends Component<IProps> {
  static SwiperItem = Item;
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
        const { className, onItemClick } = props;
        const { children } = item;
        data.push({
          id: ind,
          actived: ind === this.state.current,
          content: children,
          className,
          onItemClick
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
    if (isBrowser) {
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
    if (isBrowser) {
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
  }
  moveTo({ ind, offset }: { ind?: number; offset?: number | string }) {
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
  startTimeStamp: number;
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
    const { prefix } = this.props;
    return data && data.length > 1
      ? Array(...Array(data.length)).map((_, ind) => (
          <span
            key={ind}
            className={`${prefix}-indicator-item`}
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
            onItemClick={item.onItemClick}
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
    const {
      prefix,
      children,
      className,
      showIndicators,
      customIndicator,
      ...restProps
    } = this.props;
    if (children && (children as preact.ComponentChild[]).length) {
      const swiperData = this.getSwiperData(children);
      this.swiperData = swiperData;
      this.total = swiperData.length;
      return (
        <div
          className={cx(prefix, className)}
          ref={this.swiperContainer}
          {...restProps}
        >
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
