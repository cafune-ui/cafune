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
   * 走马灯类型
   */
  type?: 'card' | 'shuffle' | 'fade';
  /**
   * 单元宽度，可为百分比
   */
  slideWidth?: number;
  /**
   * 是否自动切换
   */
  autoplay?: boolean;
  /**
   * 是否无缝轮播
   */
  infinite?: boolean;
  /**
   * 切换间隔事件（毫秒）
   */
  intervel?: number;
  /**
   * 初始index
   */
  initialIndex?: number;
  /**
   * 过渡时间（毫秒）
   */
  duration?: number;
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
 */
class Swiper extends Component<IProps> {
  static SwiperItem = Item;
  static defaultProps = {
    prefix: 'caf-swiper',
    autoplay: true,
    infinite: true,
    intervel: 3000,
    initialIndex: 0,
    showIndicators: true,
    slideWidth: 0.9,
    duration: 500,
    type: 'normal'
  };
  state = {
    next: -1,
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
    const { slideWidth } = this.props;
    const container = this.swiperContainer.current;
    if (container) {
      const size = container.getBoundingClientRect();
      if (slideWidth < 1) {
        this.size = size.width * slideWidth;
      } else {
        this.size = slideWidth || size.width;
      }
      const rect = this.swiperList.current;
      if (rect) {
        // rect.style.width = `${this.size * this.swiperData.length}px`;
        rect.style.left = `${(size.width - this.size) / 2}px`;
      }
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
    const { autoplay, intervel, infinite } = this.props;
    if (autoplay && this.swiperData.length > 1) {
      this.clearAutoPlay();
      this.autoPlayTimer = setTimeout(() => {
        this.swiperCurrent = this.state.current + 1;
        let { current } = this.state;
        if (infinite) {
          const next =
            this.state.current === this.swiperData.length - 1 ? 0 : -1;
          this.setState({
            next
          });
          current = current + 1;
        } else {
          current = current === this.swiperData.length - 1 ? 0 : current + 1;
        }

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
  moveTo({
    ind,
    offset,
    silence = false
  }: {
    ind?: number;
    offset?: number | string;
    silence?: boolean;
  }) {
    this.clearAutoPlay();
    if (this.swiperList && this.swiperList.current) {
      const $swiper = this.swiperList.current;
      if (ind !== undefined) {
        $swiper.style.transitionDuration = `${
          silence ? 0 : this.props.duration
        }ms`;
        const realCurrent =
          ind >= this.swiperData.length
            ? 0
            : ind < 0
            ? this.swiperData.length - 1
            : ind;
        $swiper.style.transform = `translate3d(${ind *
          this.size *
          -1}px, 0, 0 )`;
        this.setState(
          {
            current: realCurrent
          },
          () => {
            if (realCurrent !== ind) {
              setTimeout(() => {
                this.moveTo({ ind: realCurrent, silence: true });
                this.setState({
                  next: -1
                });
              }, this.props.duration);
            }
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
    const deltaX = touch.clientX - this.startX;
    this.offsetX = Math.abs(deltaX);
    this.direction = deltaX >= 0 ? -1 : 1;
    e.preventDefault();
    e.stopPropagation();
    this.moveTo({
      offset: `${this.state.current * this.size * -1 + deltaX}px`
    });
    if (deltaX !== 0 && this.props.infinite) {
      const next =
        this.state.current === 0 && deltaX > 0
          ? this.swiperData.length - 1
          : this.state.current === this.swiperData.length - 1 && deltaX < 0
          ? 0
          : -1;
      this.state.next !== next &&
        this.setState({
          next
        });
    }
  };
  endMoving = () => {
    if (!this.isSwiping) return;
    this.isSwiping = false;

    if (this.props.infinite) {
      this.moveTo({ ind: this.state.current + this.direction });
    } else {
      // 是否已经在第一或最后一张
      const inBound =
        this.state.current + this.direction >= 0 &&
        this.state.current + this.direction < this.swiperData.length;
      if (this.offsetX < this.size / 4 || !inBound) {
        this.moveTo({ ind: this.state.current });
      } else if (inBound) {
        this.moveTo({ ind: this.state.current + this.direction });
      }
    }
    this.offsetX = 0;
  };
  renderIndicators(data) {
    const { prefix } = this.props;
    return data && data.length > 1
      ? Array(...Array(data.length)).map((_, ind) => (
          <span
            key={ind}
            className={cx(`${prefix}__indicator__item`, {
              [`${prefix}__indicator__item--actived`]:
                ind === this.state.current
            })}
            onClick={() => this.moveTo({ ind })}
          />
        ))
      : null;
  }
  renderItems(data) {
    if (data && data.length) {
      return data.map((item, ind) => {
        let style = {
          width: `${this.size}px`
        };
        if (this.state.next === ind) {
          style.transform = `translate3d(${(ind === 0 ? 1 : -1) *
            this.size *
            this.swiperData.length}px, 0, 0)`;
        }
        return (
          <Item
            key={item.id}
            onItemClick={item.onItemClick}
            current={item.actived}
            style={style}
            // padding={`0 ${(1 - this.props.percent) / 2 * this.size}px`}
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
  render() {
    const {
      prefix,
      type,
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
          className={cx(prefix, className, {
            [`${prefix}--pd`]: showIndicators && !customIndicator,
            [`${prefix}--${type}`]: !!type
          })}
          ref={this.swiperContainer}
          {...restProps}
        >
          <div className={`${prefix}__container`} ref={this.swiperList}>
            {this.renderItems(swiperData)}
          </div>
          {customIndicator
            ? customIndicator
            : showIndicators && (
                <div className={`${prefix}__indicator`}>
                  {this.renderIndicators(swiperData)}
                </div>
              )}
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Swiper;
