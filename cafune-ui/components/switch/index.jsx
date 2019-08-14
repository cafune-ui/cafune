import { Component } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Loading from '../loading';
/**
 * 开关
 * @example
 * ```jsx
 * <Switch />
 * ```
 */
class Switch extends Component {
  static defaultProps = {
    prefix: 'caf-switch',
    isDisabled: false,
    isLoading: false,
    isActived: false
  };
  static propTypes = {
    /**
     * 开关开启状态
     */
    isActived: PropTypes.bool,
    /**
     * 是否处于加载状态
     */
    isLoading: PropTypes.bool,
    /**
     * 是否处于禁用状态
     */
    isDisabled: PropTypes.bool,
    /**
     * 自定义尺寸
     */
    size: PropTypes.string,
    /**
     * 开启时背景颜色
     */
    activedColor: PropTypes.string,
    /**
     * 关闭时背景颜色
     */
    inActivedColor: PropTypes.string,
    /**
     * 状态切换时回调
     */
    onChange: PropTypes.func
  };
  clickHandler = () => {
    const { isDisabled, isLoading, isActived, onChange } = this.props;
    if (!isDisabled && !isLoading) {
      onChange && onChange(!isActived);
    }
  };
  render({
    prefix,
    className,
    isActived,
    isLoading,
    isDisabled,
    size,
    activedColor,
    inActivedColor,
    ...restProps
  }) {
    const switchStyle = {};
    if (size) switchStyle.fontSize = size;
    let activeColor = isActived ? '#3f77f6' : '#ccc';
    if (activedColor || inActivedColor) {
      activeColor = isActived ? activedColor : inActivedColor;
      switchStyle.backgroundColor = activeColor;
    }
      
    return (
      <div
        className={cx(prefix, className, {
          [`${prefix}__on`]: isActived,
          [`${prefix}__disabled`]: isDisabled
        })}
        style={switchStyle}
        onClick={this.clickHandler}
        {...restProps}
      >
        <div className={`${prefix}-circle`}>
          { isLoading && <Loading size="16px" color={activeColor} /> }
        </div>
      </div>
    );
  }
}
export default Switch;
