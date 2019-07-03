import { Component } from "preact";
import PropTypes from "prop-types";
import cx from "classnames";
/**
 * 开关
 * @example
 * ```jsx
 * <Switch />
 */
class Switch extends Component {
  static defaultProps = {
    prefix: "caf-switch",
    isDisabled: false,
    isLoading: false,
    isActived: false,
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
  render({ prefix, isActived, isLoading, isDisabled, size, activedColor, inActivedColor }) {
    const switchStyle = {};
    if (size) switchStyle.fontSize = size;
    if (activedColor || inActivedColor)
      switchStyle.backgroundColor = isActived ? activedColor : inActivedColor;
    return (
      <div
        class={cx(prefix, {
          [`${prefix}__on`]: isActived,
          [`${prefix}__disabled`]: isDisabled
        })}
        style={switchStyle}
        onClick={this.clickHandler}
      >
        <div class={`${prefix}-circle`} />
      </div>
    );
  }
}
export default Switch;
