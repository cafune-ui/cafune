import { Component, createRef, h, VNode } from 'preact';
import cx from 'classnames';
import { isBrowser } from '../util/isomorphic';

const MIN_DISTANCE = 10;
function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }
  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }
  return '';
}

function setTransform(obj, offsetY) {
  obj.style.transform = `translate3d(0, ${offsetY}px, 0)`;
  obj.style.msTransform = `translate3d(0, ${offsetY}px, 0)`;
  obj.style.MozTransform = `translate3d(0, ${offsetY}px, 0)`;
  obj.style.webkitTransform = `translate3d(0, ${offsetY}px, 0)`;
}

function getScrolltop() {
  return  document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
}
// const stateMap = {
//   'loosing': '',
//   'pulling': '释放可刷新',
//   'loading': '加载中...',
// }
interface IIndicator {
  /**
   * 下拉中指示器
   */
  pulling?: string | VNode;
  /**
   * 释放时指示器
   */
  loosing?: string | VNode;
  /**
   * 加载中指示器
   */
  loading?: string | VNode;
  /**
   * 刷新结束指示器
   */
  finish?: string | VNode;
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
   * 自元素
   */
  children?: any;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 拉动方向
   */
  direction?: 'up' | 'down';
  /**
   * 刷新距离
   */
  distance?: number;
  /**
   * 是否处于刷新状态
   */
  isRefreshing?: boolean;
  /**
   * 刷新回调
   */
  onRefresh?: () => void;
  /**
   * 刷新指示器
   */
  indicator?: IIndicator;
}
/**
 * 下拉刷新
 */
class PullRefresh extends Component<IProps> {
  static defaultProps = {
    prefix: 'caf-pullref'
  };
  state = {
    status: 'normal',
    height: 0
  }
  pullrefresh = createRef();
  pullrefresh_loading = createRef();
  componentDidMount() {
    if (this.pullrefresh && isBrowser) {
      const pullrefresh = this.pullrefresh.current;
      pullrefresh.addEventListener('touchstart', this.onTouchStart, false);
      pullrefresh.addEventListener('touchmove', this.onTouchMove, false);
      pullrefresh.addEventListener('touchend', this.onTouchEnd, false);
      pullrefresh.addEventListener('touchcancel', this.onTouchEnd, false);
    }
  }
  componentWillUnmount() {
    if (this.pullrefresh && isBrowser) {
      const pullrefresh = this.pullrefresh.current;
      pullrefresh.removeEventListener('touchstart', this.onTouchStart, false);
      pullrefresh.removeEventListener('touchmove', this.onTouchMove, false);
      pullrefresh.removeEventListener('touchend', this.onTouchEnd, false);
      pullrefresh.removeEventListener('touchcancel', this.onTouchEnd, false);
    }
  }
  headHeight = 50;
  startX: number;
  startY:number;
  deltaX:number;
  deltaY:number;
  offsetX:number;
  offsetY:number;
  direction:string;
  touchStart = (event) => {
    this.resetTouchStatus();
    this.startX = event.touches[0].clientX;
    this.startY = event.touches[0].clientY;
  }

  touchMove = (event) => {
    const touch = event.touches[0];
    this.deltaX = touch.clientX - this.startX;
    this.deltaY = touch.clientY - this.startY;
    this.offsetX = Math.abs(this.deltaX);
    this.offsetY = Math.abs(this.deltaY);
    this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
  }

  resetTouchStatus = () => {
    this.direction = '';
    this.deltaX = 0;
    this.deltaY = 0;
    this.offsetX = 0;
    this.offsetY = 0;
  }
  untouchable() {
    return this.state.status === 'loading' || this.state.status === 'success' || this.props.disabled;
  }
  onTouchStart = (event) => {
    // console.log('start')
    if (!this.untouchable() && this.getCeiling()) {
      this.touchStart(event);
    }
  }
  ceiling:boolean;
  onTouchMove = (event) => {
    if (this.untouchable()) {
      return;
    }
    this.touchMove(event);
    if (!this.ceiling && this.getCeiling()) {
      this.startY = event.touches[0].clientY;
      this.deltaY = 0;
    }
    if (this.ceiling && this.deltaY >= 0) {
      if (this.direction === 'vertical') {
        this.setStatus(this.ease(this.deltaY));
        event.cancelable && event.preventDefault();
      }
    }
  }
  getCeiling() {
    this.ceiling = getScrolltop() === 0;
    return this.ceiling;
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading) {
      this.setStatus(0);
    } else {
      this.setStatus(nextProps.loading ? this.headHeight : 0, nextProps.loading);
    }
  }
  ease(height) {
    const { headHeight } = this;
    return height < headHeight
      ? height
      : height < headHeight * 2
        ? Math.round(headHeight + (height - headHeight) / 2)
        : height > headHeight * 1.5 ? headHeight * 1.5 : Math.round(headHeight * 1.5 + (height - headHeight * 2) / 4);
  }
  setStatus(height, isLoading = false) {
    setTransform(this.pullrefresh_loading.current, height);
    const status = isLoading
      ? 'loading'
      : height === 0
        ? 'normal'
        : height < this.headHeight
          ? 'pulling'
          : 'loosing';
    if (status !== this.state.status) {
      this.setState({
        status,
      })
    }
  }
  onTouchEnd = () => {
    // console.log('end');
    if (!this.untouchable() && this.ceiling && this.deltaY) {
      if (this.state.status === 'loosing') {
        this.props.onRefresh && this.props.onRefresh();
        this.setStatus(this.headHeight, true);
      } else {
        this.setStatus(0);
      }
    }
  }
  render({ prefix, className, children, ...restProps }) {
    return <div className={cx(prefix, className)} ref={ this.pullrefresh } {...restProps}>
      <span className={`${prefix}-loading`} ref={ this.pullrefresh_loading }></span>
      { children }
    </div>
  }
}
export default PullRefresh;
