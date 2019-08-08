import { Component } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';

import CheckboxGroup from './group';
import Icon from '../icon';
/**
 * 复选框
 */
class Checkbox extends Component {
  static CheckboxGroup = CheckboxGroup;
  static defaultProps = {
    prefix: 'caf-checkbox',
    checked: false,
    disabled: false,
    icon: 'check'
  };
  static propTypes = {
    /**
     * 自定义类名
     */
    prefix: PropTypes.string,
    /**
     * 复选框唯一id
     */
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /**
     * 是否选中
     */
    checked: PropTypes.bool,
    /**
     * 选中状态颜色
     */
    checkedColor: PropTypes.string,
    /**
     * 是否处于禁用状态
     */
    disabled: PropTypes.bool,
    /**
     * 值变化时回调事件
     */
    onChange: PropTypes.func
  };
  constructor(props) {
    super(props);
    const { id, checked = false } = props;

    const { model = [] } = (this.context || {});
    const isChecked = checked || model.indexOf(id) !== -1;

    this.state = {
      checked: isChecked
    };
  }
  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps && !this.context.model) {
      this.setState({
        checked: nextProps.checked
      })
    }
  }
  onClick = () => {
    const { id, onChange } = this.props;
    const { groupChange } = this.context;
    // 框组优先级高于单个，避免逻辑冲突产生问题
    if (groupChange) {
      groupChange(id);
    } else if (onChange) {
      onChange(id);
    }
  }
  render(
    { prefix, id, className, icon, checkedColor, disabled, ...restProps },
    { checked },
    { model = [], allDisabled = false } = {}
  ) {
    const innerStyle = {};
    if (checkedColor) {
      innerStyle.backgroundColor = checkedColor;
    }
    const isChecked = checked || model.indexOf(id) !== -1;
    return (
      <div
        className={cx(prefix, className, {
          [`${prefix}__checked`]: isChecked,
          [`${prefix}__disabled`]: disabled || allDisabled
        })}
        onClick={this.onClick}
        {...restProps}
      >
        <span className={`${prefix}-input`}>
          <input type="radio" id={id} />
          <span className={`${prefix}-input-inner`} style={innerStyle}>
            <Icon icon={icon} size="100%" />
          </span>
        </span>
      </div>
    );
  }
}
export default Checkbox;
