import { Component, h, VNode } from 'preact';
import cx from 'classnames';
import Icon from '../icon';
import Loading from '../loading';

const typeColor = {
  normal: '#ddd',
  primary: '#6595d0',
  warning: '#e46060'
};
const defaultLoadingInfo = {
  type: 'spinner',
  size: '18px'
};

interface ILoading {
  /**
   * 加载图标类型
   */
  type?: 'step' | 'spin' | 'ripple';
  /**
   * 自定义颜色
   */
  color?: string;
  /**
   * 自定义加载图标尺寸
   */
  size?: string;
}
interface IButtonIcon {
  /**
   * 按钮图标（加载状态时会被加载图标覆盖）
   */
  type?: string | VNode | HTMLElement;
  /**
   * 图标位置，当为`left` 或`right` 时，图标将出现在文字旁边。也可传入`{left: 'xx'. right: 'xx' }`来绝对定位图标
   */
  positon?: string | object;
}
interface IGradient {
  /**
   * 渐变角度，默认为 0
   */
  angle?: number;
  /**
   * 起始颜色
   */
  from?: string;
  /**
   * 终止颜色
   */
  to?: string;
  /**
   * 文本颜色
   */
  color?: string;
  /**
   * 投影
   */
  shadow?: string;
}
export interface IProps {
  /**
   * 自定义类名
   */
  prefix?: string;
  /**
   * 按钮类型
   */
  type?: 'default' | 'primary' | 'warning';
  /**
   * 是否为幽灵按钮
   */
  ghost?: boolean;
  /**
   * 按钮尺寸
   */
  size?: 'large' | 'normal' | 'small' | 'tiny';
  /**
   * 按钮图标（加载状态时会被加载图标覆盖）
   */
  icon?: IButtonIcon;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 是否处于加载状态
   */
  loading?: boolean;
  /**
   * 加载图标信息
   */
  loadingInfo?: ILoading;
  /**
   * 背景渐变
   */
  gradient?: IGradient;
  /**
   * 圆角，若为`true`，则为全圆角矩形按钮，若为`false`，则为直角矩形，若为`String`类型。则为圆角尺寸
   */
  radius?: boolean | string;
  /**
   * 是否为块级元素
   */
  block?: boolean;
  /**
   * 是否拥有阴影
   */
  shadow?: boolean;
  /**
   * 背景颜色
   */
  bgColor?: string;
  /**
   * 点击事件
   */
  onClick?: (event: Event) => void;
}
/**
 * 按钮
 */
class Button extends Component<IProps> {
  static defaultProps = {
    prefix: 'caf-btn',
    size: 'normal',
    type: 'default',
    ghost: false,
    disabled: false,
    loading: false,
    block: false,
    radius: true,
    shadow: true
  };
  render({
    prefix,
    className,
    children,
    type,
    size,
    icon,
    ghost,
    disabled,
    loading,
    loadingInfo,
    gradient,
    block,
    radius,
    shadow,
    bgColor,
    style,
    onClick,
    ...restProps
  }) {
    let btnStyle: any = {};
    if (style) {
      btnStyle = Object.assign({}, style);
    }
    if (gradient) {
      const {
        angle = 0,
        from = '',
        to = '',
        color = '#fff',
        shadow
      } = gradient;
      btnStyle.backgroundImage = `linear-gradient(${angle}deg, ${from} 0, ${to} 100%)`;
      btnStyle.color = color;
      if (shadow) {
        btnStyle.boxShadow = shadow;
      }
    }
    let radiusType;
    if (typeof radius === 'string') {
      btnStyle.borderRadius = radius;
    } else if (typeof radius === 'boolean') {
      radiusType = radius ? 'round' : 'square';
    }
    let btnIcon = null;
    const iconStyle: any = {};
    let isReverse = false;
    if (loading) {
      loadingInfo = Object.assign({}, defaultLoadingInfo, loadingInfo);
      btnIcon = (
        <Loading
          type={loadingInfo.type}
          size={loadingInfo.size}
          color={
            loadingInfo.color ||
            (ghost ? typeColor[type] : type === 'default' ? '#ccc' : '#fff')
          }
        />
      );
    } else if (icon) {
      const { type, position } = icon;
      btnIcon = typeof type === 'string' ? <Icon icon={type} /> : type;
      if (position) {
        if (position === 'right') {
          isReverse = true;
        } else if (position.left || position.right) {
          iconStyle.position = 'absolute';
          position.left && (iconStyle.left = position.left);
          position.right && (iconStyle.right = position.right);
        }
      }
    }
    return (
      <a
        role="button"
        className={cx(prefix, `${prefix}--t-${type}`, `${prefix}--s-${size}`, {
          [`${prefix}--reverse`]: isReverse,
          [`${prefix}--block`]: block,
          [`${prefix}--shadow`]: shadow && !ghost,
          [`${prefix}--disabled`]: disabled,
          [`${prefix}--loading`]: loading,
          [`${prefix}--ghost`]: ghost,
          [`${prefix}--${radiusType}`]: !!radiusType,
          [className]: !!className
        })}
        style={btnStyle}
        onClick={disabled ? undefined : onClick}
        {...restProps}
      >
        {!!btnIcon && (
          <span className={`${prefix}__icon`} style={iconStyle}>
            {btnIcon}
          </span>
        )}
        <span className={`${prefix}__content`}>{children}</span>
      </a>
    );
  }
}
export default Button;
