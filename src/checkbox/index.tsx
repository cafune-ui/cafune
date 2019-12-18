import { Component, h } from 'preact';
import cx from 'classnames';

import CheckboxGroup from './group';
import Icon from '../icon';

function isImage(icon) {
  return icon && icon.indexOf('/') !== -1;
}
type IIcon = {
  /**
   * 激活图标
   */
  actived?: string;
  /**
   * 未激活时图标
   */
  inactive?: string;
}
interface IProps {
  /**
   * 自定义类名
   */
  prefix?: string;
  /**
   * 自定义图标
   */
  icons?: IIcon;
  /**
   * 复选框值
   */
  value: string | number;
  /**
   * 复选框 id
   */
  id?: string;
  /**
   * 默认是否选中
   */
  checked?: boolean;
  /**
   * 选中状态颜色
   */
  checkedColor?: string;
  /**
   * 是否处于禁用状态
   */
  disabled?: boolean;
  /**
   * 值变化时回调事件
   */
  handleChange?: (val: any) => void;
}
/**
 * 复选框
 */
class Checkbox extends Component<IProps> {
  static CheckboxGroup = CheckboxGroup;
  static defaultProps = {
    prefix: 'caf-checkbox',
    checked: false,
    disabled: false
  };
  constructor(props) {
    super(props);
  }
  state = {
    checked: false
  };
  componentDidMount() {
    const { value, checked = false } = this.props;
    const { model = [] } = this.context || /* istanbul ignore next */{};
    const isChecked = checked || model.indexOf(value) !== -1;

    this.setState({
      checked: isChecked
    });
  }
  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps && !this.context.model) {
      this.setState({
        checked: nextProps.checked
      });
    }
  }
  onClick = () => {
    const { value, disabled, handleChange } = this.props;
    const { groupChange, allDisabled, canCheck } = this.context;
    const isCancheck = canCheck ? canCheck(value) : true;
    const isDisabled = disabled || allDisabled || !isCancheck;
    if (!isDisabled) {
      this.setState({
        checked: !this.state.checked
      });
      // 框组优先级高于单个，避免逻辑冲突产生问题
      /* istanbul ignore next */
      if (groupChange) {
        groupChange(value);
      } else if (handleChange) {
        handleChange(value);
      }
    }
  };
  render(
    {
      prefix,
      value,
      id,
      className,
      icons,
      children,
      checkedColor,
      disabled,
      ...restProps
    },
    { checked },
    { allDisabled = false } = {}
  ) {
    const innerStyle: any = {};
    const labelStyle: any = {};
    if (checkedColor && checked) {
      // innerStyle.backgroundColor = checkedColor;
      // innerStyle.borderColor = checkedColor;
      innerStyle.color = checkedColor;
    }
    const isDisabled = disabled || allDisabled;
    let icon = <Icon icon="check" />;
    let isCustomIcon = false;
    if (icons) {
      if ('actived' in icons && checked) {
        isCustomIcon = isImage(icons.actived);
        icon = <Icon icon={icons.actived} />;
      }
      if ('inactive' in icons && !checked) {
        isCustomIcon = isImage(icons.inactive);
        icon = <Icon icon={icons.inactive} />;
      }
    }
    return (
      <div
        className={cx(prefix, className, {
          [`${prefix}--checked`]: checked,
          [`${prefix}--disabled`]: isDisabled
        })}
        onClick={this.onClick}
        style={labelStyle}
        {...restProps}
      >
        <div className={`${prefix}__input`}>
          <input
            type="checkbox"
            id={id}
            checked={checked}
            disabled={disabled}
            value={value}
          />
          <span
            className={cx(`${prefix}__input__inner`, {
              [`${prefix}__input__inner--custom`]: isCustomIcon
            })}
            style={innerStyle}
          >
            {icon}
          </span>
        </div>
        <div className={`${prefix}__label`}>
          {children}
        </div>
      </div>
    );
  }
}
export default Checkbox;
