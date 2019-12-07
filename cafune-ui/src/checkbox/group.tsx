import { Component, h } from 'preact';
import cx from 'classnames';

interface IProps {
  /**
   * 自定义类名
   */
  prefix?: string;
  /**
   * 默认选中项目的id
   */
  model?: string[] | number[];
  /**
   * 是否禁用所有复选框
   */
  disabled?: boolean;
  /**
   * 最多可选数
   */
  maxSelect?: number;
  /**
   * 复选框组变化回调，参数为所有选中的数据
   */
  handleChange?: (selected: any[]) => void;
}
/**
 * 复选框
 */
class CheckboxGroup extends Component<IProps> {
  static defaultProps = {
    prefix: 'caf-checkbox-group',
    disabled: false,
    maxSelect: 0
  };
  constructor(props) {
    super(props);
    this.seletedData = props.model;
  }
  seletedData = [];
  canCheck = val => {
    const { maxSelect } = this.props;
    const { seletedData } = this;
    let result = true;
    if (maxSelect > 0) {
      if (seletedData.indexOf(val) === -1 && seletedData.length === maxSelect) {
        result = false;
      }
    }
    return result;
  };
  onChange = val => {
    const { seletedData } = this;
    const valInd = seletedData.indexOf(val);
    if (valInd === -1) {
      seletedData.push(val);
    } else {
      seletedData.splice(valInd, 1);
    }
    this.seletedData = seletedData;
    this.props.handleChange && this.props.handleChange(seletedData);
  };
  getChildContext() {
    const { model, disabled } = this.props;
    return {
      model,
      allDisabled: disabled,
      groupChange: this.onChange,
      canCheck: this.canCheck
    };
  }
  render({ prefix, children, className, ...restProps }) {
    return (
      <div className={cx(prefix, className)} {...restProps}>
        {children}
      </div>
    );
  }
}
export default CheckboxGroup;
