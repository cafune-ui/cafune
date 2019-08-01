import { Component } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '../icon';
import Loading from '../loading';
/**
 * 按钮
 * @example
 * ```jsx
 * <Button>按钮</Button>
 * ```
 */
class Button extends Component {
  static defaultProps = {
    prefix: 'caf-btn',
    size: 'normal',
    type: 'default',
    ghost: false,
    disabled: false,
    loading: false,
    block: false
  };
  static propTypes = {
    /**
     * 自定义类名
     */
    prefix: PropTypes.string,
    /**
     * 按钮类型
     */
    type: PropTypes.oneOf(['default', 'primary', 'warning']),
    /**
     * 是否为幽灵按钮
     */
    ghost: PropTypes.bool,
    /**
     * 按钮尺寸
     */
    size: PropTypes.oneOf(['large', 'normal', 'small', 'tiny']),
    /**
     * 按钮图标（加载状态时会被加载图标覆盖）
     */
    icon: PropTypes.shape({
      /**
       * 按钮图标（加载状态时会被加载图标覆盖）
       */
      icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.element
      ]),
      /**
       * 图标位置
       */
      position: PropTypes.oneOf(['left', 'right'])
    }),
    /**
     * 是否禁用
     */
    disabled: PropTypes.bool,
    /**
     * 是否处于加载状态
     */
    loading: PropTypes.bool,
    /**
     * 加载类型
     */
    loadingType: PropTypes.oneOf(['step', 'spin', 'ripple']),
    /**
     * 背景渐变
     */
    gradient: PropTypes.shape({
      /**
       * 渐变角度，默认为 0
       */
      angle: PropTypes.number,
      /**
       * 起始颜色
       */
      from: PropTypes.string,
      /**
       * 终止颜色
       */
      to: PropTypes.string
    }),
    /**
     * 圆角，若为`true`，则为全圆角矩形按钮，若为`false`，则为直角矩形，若为`String`类型。则为圆角尺寸，不指定时则使用默认圆角
     */
    radius: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /**
     * 是否为块级元素
     */
    block: PropTypes.bool
  };
  render({
    prefix,
    children,
    type,
    size,
    icon,
    ghost,
    disabled,
    loading,
    loadingType,
    gradient
  }) {
    const btnStyle = {};
    if (gradient) {
      const { angle = 0, from = '', to = '' } = gradient;
      btnStyle.backgroundImage = `linear-gradient(${angle}deg, ${from} 0, ${to} 100%)`;
    }
    let radiusType;
    if (typeof radius === 'string') {
      btnStyle.borderRadius = radius;
    } else if (typeof radius === 'boolean') {
      radiusType = radius ? 'round' : 'square';
    }
    let btnIcon = null;
    if (loading) {
      btnIcon = <Loading type={loadingType} />;
    } else if (icon) {
      btnIcon = typeof icon === 'string' ? <Icon icon={icon} /> : icon;
    }
    return (
      <a
        className={cx(prefix, `${prefix}__t_${type}`, `${prefix}__s_${size}`, {
          [`${prefix}__disabled`]: disabled,
          [`${prefix}__loading`]: loading,
          [`${prefix}__ghost`]: ghost,
          [`${prefix}__${radiusType}`]: !!radiusType
        })}
        style={btnStyle}
      >
        {!!btnIcon && <span className={`${prefix}-icon`}>{btnIcon}</span>}
        <span className={`${prefix}-content`}>{children}</span>
      </a>
    );
  }
}
export default Button;
