import { Component, h } from 'preact';
import cx from 'classnames';
import Loading from '../loading';

interface IProps {
  /**
   * 开关开启状态
   */
  isActived?: boolean,
  /**
   * 是否处于加载状态
   */
  isLoading?: boolean,
  /**
   * 是否处于禁用状态
   */
  isDisabled?: boolean,
  /**
   * 自定义尺寸
   */
  size?: string,
  /**
   * 开启时背景颜色
   */
  activedColor?: string,
  /**
   * 关闭时背景颜色
   */
  inActivedColor?: string,
  /**
   * 状态切换时回调
   */
  onChange?: (isActived:boolean) => void
}
/**
 * 开关
 * @example
 * ```jsx
 * <Switch />
 * ```
 */
class Switch extends Component<IProps> {
  static defaultProps = {
    prefix: 'caf-switch',
    isDisabled: false,
    isLoading: false,
    isActived: false
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
    const switchStyle:any = {};
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
