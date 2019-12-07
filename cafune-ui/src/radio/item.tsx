import { Component, h } from 'preact';
import cx from 'classnames';

interface IProps {
  /**
   * 自定义前缀
   */
  prefix?: string;
  /**
   * 选中颜色
   */
  checkedColor?: string;
  /**
   * 单选框文本位置
   */
  labelPosition?: 'left' | 'right';
  /**
   * 单选值
   */
  value?: string;
  /**
   * 是否选中状态
   */
  checked?: boolean;
  /**
   * 是否禁用状态
   */
  disabled?: boolean;
  /**
   * 单选框组变化回调
   */
  onChange?: (val: string | number) => void;
}
/**
 * 单选框
 */
class RadioItem extends Component<IProps, {}> {
  static displayName = 'RadioItem';
  static defaultProps = {
    prefix: 'caf-radio-item'
  };
  onItemClick = () => {
    const { value, disabled, checked, onChange } = this.props;
    if (!checked && !disabled && onChange) {
      onChange(value);
    }
  };
  render({
    prefix,
    className,
    children,
    value,
    checked,
    disabled,
    labelPosition,
    checkedColor,
    ...restProps
  }) {
    return (
      <div
        className={cx(prefix, className, {
          [`${prefix}--disabled`]: disabled,
          [`${prefix}--checked`]: checked,
          [`${prefix}--rtl`]: labelPosition === 'right'
        })}
        onClick={this.onItemClick}
        {...restProps}
      >
        <div className={`${prefix}__content`}>{children}</div>
        <div
          className={`${prefix}__icon`}
          style={{ color: checkedColor, backgroundColor: checkedColor }}
        >
          <div className={`${prefix}__icon__indicator`}></div>
        </div>
      </div>
    );
  }
}
export default RadioItem;
