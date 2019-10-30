import { Component, createRef, h, VNode } from 'preact';
import cx from 'classnames';
import Icon from '../icon';

import { isBrowser } from '../util/isomorphic';
interface IProps {
  /**
   * 自定义前缀
   */
  prefix?: string;
  /**
   * 消息内容
   */
  type?: 'error' | 'success' | 'notice' | 'error';
  /**
   * 消息内容
   */
  text?: string;
  /**
   * 是否启用滚动
   */
  scrollable?: boolean;
  /**
   * 是否自动换行（仅在不滚动时生效）
   */
  wrapable?: boolean;
  /**
   * 文本颜色
   */
  color?: string;
  /**
   * 背景颜色
   */
  bgColor?: string;
  /**
   * 左侧图标，`string` 类型时显示指定图标， 为`false` 时不显示图标，为`true` 时显示默认图标
   */
  icon?: string | boolean;
  /**
   * 滚动速度
   */
  speed?: number;
  /**
   * 滚动延迟
   */
  delay?: number;
  /**
   * 点击类型
   */
  action?: 'closable' | 'link' | VNode | HTMLElement;
  /**
   * 点击事件
   */
  onClick?: Function;
}

function addPrefix(name, fn) {
  const renamed = name.charAt(0).toUpperCase() + name.slice(1);
  return {
    [name]: fn,
    ['webkit' + renamed]: fn
  };
}
/**
 * 通知栏
 */
class NoticeBar extends Component<IProps> {
  static defaultProps = {
    prefix: 'caf-noticebar',
    scrollable: true,
    wrapable: false,
    type: 'notice',
    icon: '',
    speed: 50,
    delay: 1
  };
  state = {
    wrapWidth: 0,
    offsetWidth: 0,
    duration: 0,
    isFirst: true,
    isShow: true,
    isOverflow: true
  };
  wrap = createRef();
  content = createRef();
  componentWillReceiveProps(nextProps) {
    if (this.props.text !== nextProps.text) {
      this.calcInfo();
    }
  }
  onAnimationEnd = () => {
    this.setState(
      {
        isFirst: false
      },
      () => {
        this.calcInfo();
      }
    );
  };
  componentDidMount() {
    this.calcInfo();
  }
  calcInfo() {
    let { wrap, content } = this;
    const { scrollable, speed } = this.props;
    if (!wrap.current || !content.current || !isBrowser) {
      return;
    }
    const $wrap: HTMLElement = wrap.current;
    const $content: HTMLElement = content.current;
    const wrapWidth = $wrap.getBoundingClientRect().width;
    const offsetWidth = $content.getBoundingClientRect().width;
    if (scrollable && offsetWidth > wrapWidth) {
      this.setState({
        isOverflow: true,
        wrapWidth,
        offsetWidth,
        duration: offsetWidth / speed
      });
    } else {
      this.setState({
        isOverflow: false
      })
    }
  }
  onRightClick = () => {
    if (this.props.action === 'closable') {
      this.setState({
        isShow: false
      });
    }
    this.props.onClick && this.props.onClick();
  };
  render(
    {
      prefix,
      className,
      type,
      text,
      icon,
      scrollable,
      wrapable,
      delay,
      color,
      bgColor,
      action,
      ...restProps
    },
    { isFirst, duration, wrapWidth, isShow, isOverflow }
  ) {
    let barStyle = {};
    if (color || bgColor) {
      barStyle = {
        color,
        backgroundColor: bgColor
      };
    }
    let contentStyle = {};
    if (!wrapable && isOverflow) {
      contentStyle = {
        paddingLeft: isFirst ? 0 : wrapWidth + 'px',
        animationDelay: (isFirst ? delay : 0) + 's',
        animationDuration: duration + 's'
      };
    }
    let rightIcon;
    if (!!action) {
      if (action === 'closable' || action === 'link') {
        rightIcon = (
          <span className={`${prefix}__action`} onClick={this.onRightClick}>
            <Icon icon={action === 'closable' ? 'wrong' : 'arrow-right'} />
          </span>
        );
      } else {
        rightIcon =
          typeof action === 'string' ? (
            <span className={`${prefix}__action`}>{action}</span>
          ) : (
            action
          );
      }
    }

    if (isShow) {
      return (
        <div
          className={cx(prefix, className, {
            [`${prefix}--wrapable`]: wrapable,
            [`${prefix}--${type}`]: !!type && ~['notice', 'error', 'warning', 'success'].indexOf(type)
          })}
          style={barStyle}
          {...restProps}
        >
          {(typeof icon === 'string' || icon) && <Icon icon={icon || type} />}
          <div className={`${prefix}__wrapper`} ref={this.wrap}>
            <p
              className={cx(`${prefix}__content`, {
                [`${prefix}__content--scroll`]: scrollable && !wrapable && isOverflow,
                [`${prefix}__content--scroll-infinite`]: !isFirst && !wrapable && isOverflow,
                [`${prefix}__content--ellipsis`]: !scrollable && !wrapable
              })}
              {...addPrefix('onAnimationEnd', this.onAnimationEnd)}
              ref={this.content}
              style={contentStyle}
            >
              {text}
            </p>
          </div>
          {rightIcon}
        </div>
      );
    } else {
      return null;
    }
  }
}
export default NoticeBar;
