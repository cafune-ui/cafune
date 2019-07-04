import { Component, createRef } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../icon';
import CellGroup from './group';
import { touchEventMap, getTouch } from '../util/event';

class Cell extends Component {
  static CellGroup = CellGroup;
  static defaultProps = {
    prefix: 'caf-cell',
    border: true,
    swipeList: []
  };
  static propTypes = {
    /**
     * 自定义类名
     */
    prefix: PropTypes.string,
    /**
     * 左侧图标
     */
    icon: PropTypes.string,
    /**
     * 图标尺寸
     */
    iconSize: PropTypes.string,
    /**
     * 单元标题
     */
    title: PropTypes.string.isRequired,
    /**
     * 单元描述信息
     */
    label: PropTypes.string,
    /**
     * 单元右侧内容
     */
    value: PropTypes.string,
    /**
     * 单元链接，如果有的话将会出现右侧箭头并开启点击
     */
    url: PropTypes.string,
    /**
     * 右侧图标
     */
    rightIcon: PropTypes.string,
    /**
     * 是否垂直居中
     */
    middle: PropTypes.bool,
    /**
     * 右滑菜单
     */
    swipeList: PropTypes.arrayOf(
      PropTypes.shape({
        clickHandler: PropTypes.func,
        name: PropTypes.bool,
        backgroundColor: PropTypes.string
      })
    )
  };
  isSwiping = false;
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
    this.moveTo(`${this.deltaX}px`);
  };
  endMoving = () => {
    if (!this.isSwiping) return;
    this.isSwiping = false;
    if (this.offsetX < this.size / 4) {
      this.moveTo({ ind: this.state.current });
    } else if (inBound) {
      this.moveTo({ ind: this.state.current + this.direction });
    }
    setTimeout(() => (this.offsetX = 0), 500);
  };
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
  swipable = false;
  registeSwiperEvent() {
    this.swipable = true;
    const rect = this.cellMain.current;
    if (rect) {
      rect.addEventListener(touchEventMap.down, this.readyMoving);
      rect.addEventListener(touchEventMap.move, this.startMoving);
      rect.addEventListener(touchEventMap.up, this.endMoving);
      rect.addEventListener(touchEventMap.out, this.endMoving);
    }
  }
  unRegisteSwiperEvent() {
    const rect = this.cellMain.current;
    if (rect && this.swipable) {
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
  cellMain = createRef();
  render({
    prefix,
    icon,
    iconSize,
    title,
    label,
    value,
    url,
    rightIcon,
    border,
    middle,
    swipeList
  }) {
    const showRightIcon = !!url || !!rightIcon;
    const cls = cx(prefix, {
      [`${prefix}__clickable`]: showRightIcon,
      [`${prefix}__border`]: border,
      [`${prefix}__middle`]: middle
    });
    icon = icon ? <Icon icon={icon} size={iconSize} /> : null;
    title = (
      <div class={`${prefix}-title`}>
        <span>{title}</span>
        {!!label && <div class={`${prefix}-label`}>{label}</div>}
      </div>
    );
    const val = !!value ? (
      <div class={`${prefix}-value`}>
        <span>{value}</span>
      </div>
    ) : null;
    const rIcon = showRightIcon ? (
      <Icon icon={rightIcon || 'arrow_right'} />
    ) : null;
    const Tag = !!url ? 'a' : 'div';
    const restProps = !!url ? { href: url } : {};
    let Options = null;
    if (swipeList && swipeList.length) {
      Options = (
        <div class={`${prefix}-swiper`}>
          {swipeList.map(item => (
            <span class={`${prefix}-swiper-item`} onClick={item.clickHandler} style={ item.style }>
              {item.name}
            </span>
          ))}
        </div>
      );
      this.swipable = true;
      this.bindSwiperEvent;
    }
    return (
      <div class={cls}>
        <div class={`${prefix}-wrapper`} ref={this.cellMain}>
          <Tag {...restProps} class={`${prefix}-main`}>
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
