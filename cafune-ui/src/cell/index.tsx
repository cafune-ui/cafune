import { Component, h, createRef } from 'preact';
import cx from 'classnames';
import Icon from '../icon';
import CellGroup from './group';
import { touchEventMap, getTouch } from '../util/event';
import { isBrowser } from '../util/isomorphic';

type ISwiperList = {
  clickHandler?: Function;
  name?: boolean;
  backgroundColor?: string;
}
interface IProps {
  /**
   * 自定义类名
   */
  prefix?: string;
  /**
   * 左侧图标
   */
  icon?: string;
  /**
   * 图标尺寸
   */
  iconSize?: string;
  /**
   * 单元标题
   */
  title: string;
  /**
   * 单元描述信息
   */
  label?: string;
  /**
   * 单元右侧内容
   */
  value?: string;
  /**
   * 单元链接，如果有的话将会出现右侧箭头并开启点击
   */
  url?: string;
  /**
   * 右侧图标
   */
  rightIcon?: string;
  /**
   * 是否垂直居中
   */
  middle?: boolean;
  /**
   * 右滑菜单
   */
  swipeList: ISwiperList[];
}

/**
 * 单元格
 */
class Cell extends Component<IProps> {
  static CellGroup = CellGroup;
  static defaultProps = {
    prefix: 'caf-cell',
    border: true,
    swipeList: []
  };
  isSwiping = false;
  movedSize = 0;
  startTimeStamp: number;

  startX: number;
  deltaX: number;
  direction: number;
  offsetX: number;
  readyMoving = e => {
    this.startTimeStamp = Date.now();
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
    if (this.direction > 0) {
      if (this.offsetX > 0 && this.offsetX <= this.swiperSize) {
        this.moveTo(this.deltaX, true);
      }
    } else {
      this.moveTo(0);
    }
  };
  endMoving = () => {
    if (!this.isSwiping) return;
    this.isSwiping = false;
    if (this.offsetX > 0 && this.offsetX <= this.swiperSize) {
      if (this.offsetX < this.swiperSize / 2) {
        this.moveTo(0);
      } else {
        this.moveTo(this.swiperSize * -1);
      }
    }
    setTimeout(() => (this.offsetX = 0), 500);
  };
  moveTo(offset, noDuration = false) {
    if (this.cellWrapper && this.cellWrapper.current) {
      const $swiper = this.cellWrapper.current;
      // 在拖动时不要过渡时间，否则卡顿
      $swiper.style.transitionDuration = noDuration ? '0ms' : '500ms';
      $swiper.style.transform = `translate3d(${offset}px, 0, 0 )`;
      this.movedSize = offset;
    }
  }
  swipable = false;
  promiseFunc = func => {
    setTimeout(func.bind(this), 0);
  };
  registeSwiperEvent() {
    if (isBrowser) {
      if (this.cellSwiper && this.cellSwiper.current) {
        this.swipable = true;
        const swipe = this.cellSwiper.current;
        const size = swipe.getBoundingClientRect();
        this.swiperSize = size.width;
      }
      if (this.cellMain && this.cellMain.current) {
        const rect = this.cellMain.current;
        rect.addEventListener(touchEventMap.down, this.readyMoving);
        rect.addEventListener(touchEventMap.move, this.startMoving);
        rect.addEventListener(touchEventMap.up, this.endMoving);
        rect.addEventListener(touchEventMap.out, this.endMoving);
      }
    }
    
  }
  unRegisteSwiperEvent() {
    if (this.cellMain && this.cellMain.current && this.swipable && isBrowser) {
      const rect = this.cellMain.current;
      this.swipable = false;
      rect.removeEventListener(touchEventMap.down, this.readyMoving);
      rect.removeEventListener(touchEventMap.move, this.startMoving);
      rect.removeEventListener(touchEventMap.up, this.endMoving);
      rect.removeEventListener(touchEventMap.out, this.endMoving);
    }
  }
  componentWillUnmount() {
    this.unRegisteSwiperEvent();
  }
  swiperSize = 0;
  cellWrapper = createRef();
  cellMain = createRef();
  cellSwiper = createRef();
  render({
    prefix,
    className,
    icon,
    iconSize,
    title,
    label,
    value,
    url,
    rightIcon,
    border,
    middle,
    swipeList,
    ...restProps
  }) {
    const showRightIcon = !!url || !!rightIcon;
    const cls = cx(prefix, className, {
      [`${prefix}__clickable`]: showRightIcon,
      [`${prefix}__border`]: border,
      [`${prefix}__middle`]: middle
    });
    icon = icon ? <Icon icon={icon} size={iconSize} /> : null;
    title = (
      <div className={`${prefix}-title`}>
        <span>{title}</span>
        {!!label && <div className={`${prefix}-label`}>{label}</div>}
      </div>
    );
    const val = !!value ? (
      <div className={`${prefix}-value`}>
        <span>{value}</span>
      </div>
    ) : null;
    const rIcon = showRightIcon ? (
      <Icon icon={rightIcon || 'arrow-right'} />
    ) : null;
    const Tag = !!url ? 'a' : 'div';
    const urlProps = !!url ? { href: url } : {};
    let Options = null;
    if (swipeList && swipeList.length) {
      Options = (
        <div className={`${prefix}-swiper`} ref={this.cellSwiper}>
          {swipeList.map(item => (
            <span
              className={`${prefix}-swiper-item`}
              onClick={item.clickHandler}
              style={item.style}
            >
              {item.name}
            </span>
          ))}
        </div>
      );
      this.promiseFunc(this.registeSwiperEvent);
    } else {
      this.promiseFunc(this.unRegisteSwiperEvent);
    }
    return (
      <div className={cls} {...restProps}>
        <div className={`${prefix}-wrapper`} ref={this.cellWrapper}>
          <Tag {...urlProps} className={`${prefix}-main`} ref={this.cellMain}>
            {icon}
            {title}
            {val}
            {rIcon}
          </Tag>
          {Options}
        </div>
      </div>
    );
  }
}
export default Cell;
