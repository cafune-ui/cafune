import { Component, h } from 'preact';
import cx from 'classnames';

import CheckboxGroup from './group';
import Icon from '../icon';

function isImage(icon) {
  return icon && icon.indexOf('/') !== -1;
}
interface IIcon {
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
    const { model = [] } = this.context || {};
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
    if (checkedColor && checked) {
      innerStyle.backgroundColor = checkedColor;
    }
    const isDisabled = disabled || allDisabled;
    let icon = <Icon icon="check" />;
    let isCustomIcon = false;
    if (icons) {
      if ('actived' in icons && checked) {
        isCustomIcon = isImage(icons.actived);
        icon = (
          <Icon icon={icons.actived} size={isCustomIcon ? '14px' : '12px'} />
        );
      }
      if ('inactive' in icons && !checked) {
        isCustomIcon = isImage(icons.inactive);
        icon = (
          <Icon icon={icons.inactive} size={isCustomIcon ? '14px' : '12px'} />
        );
      }
    }
    return (
      <div
        className={cx(prefix, className, {
          [`${prefix}__checked`]: checked,
          [`${prefix}__disabled`]: isDisabled
        })}
        onClick={this.onClick}
        {...restProps}
      >
        <div className={`${prefix}-input`}>
          <input
            type="checkbox"
            id={id}
            checked={checked}
            disabled={disabled}
            value={value}
          />
          <span
            className={cx(`${prefix}-input-inner`, {
              [`${prefix}-input-inner__custom`]: isCustomIcon
            })}
            style={innerStyle}
          >
            {icon}
          </span>
        </div>
        <div className={`${prefix}-label`}>{children}</div>
      </div>
    );
  }
}
export default Checkbox;
