import { Component, h } from 'preact';
import cx from 'classnames';
function checkIfRadio(el) {
  return el.nodeName.displayName === 'RadioItem';
}
import RadioItem from './item';

interface IProps {
  /**
   * 自定义前缀
   */
  prefix?: string;
  /**
   * 单选框文本位置
   */
  labelPosition?: 'left' | 'right';
  /**
   * 选中颜色
   */
  checkedColor?: string;
  /**
   * 单选框组变化回调
   */
  onChange?: (val: string | number) => void;
  /**
   * 是否选中状态
   */
  value?: string | number;
}
/**
 * 单选框组
 */
class Radio extends Component<IProps, {}> {
  static RadioItem = RadioItem;
  static defaultProps = {
    labelPosition: 'caf-radio',
    position: 'left'
  };
  getData(children, activeId) {
    const data = [];
    const { onChange, labelPosition, checkedColor } = this.props;
    children.forEach((item, ind) => {
      if (checkIfRadio(item)) {
        const props = item.attributes;
        const { value, disabled, className, prefix } = props;
        const { children } = item;
        let checked = false;
        if (activeId) {
          checked = value ? activeId === value : false;
        } else {
          checked = ind === 0;
        }
        data.push({
          prefix,
          disabled,
          value,
          checked,
          children,
          className,
          checkedColor,
          labelPosition,
          onChange
        });
      }
    });
    return data;
  }
  renderChild() {
    const { children, value } = this.props;
    const data = this.getData(children, value);
    let result = [];
    if (data && data.length) {
      result = data.map(item => <RadioItem key={item.value} {...item} />);
    }
    return result;
  }
  render({ prefix, className, value, children, ...restProps }) {
    return (
      <div className={cx(prefix, className)} {...restProps}>
        {this.renderChild()}
      </div>
    );
  }
}
export default Radio;
