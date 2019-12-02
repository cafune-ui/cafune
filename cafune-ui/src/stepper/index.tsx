import { Component, h } from 'preact';
import cx from 'classnames';
interface IProps {
  /**
   * 自定义类名
   */
  prefix?: string,
  /**
   * 初始值
   */
  initVal?: number,
  /**
   * 最小值
   */
  min?: number,
  /**
   * 最大值
   */
  max?: number,
  /**
   * 步进数
   */
  step?: number,
  /**
   * 是否显示前后数字，更直观预知
   */
  showNum?: boolean,
  /**
   * 是否处于禁用状态
   */
  disabled?: boolean,
  /**
   * 是否限定为整数
   */
  integerOnly?: boolean,
  /**
   * 数值是否只读
   */
  readOnly?: boolean,
  /**
   * 数值改变时回调
   */
  onChange?: (result) => void
}
/**
 * 步进器
 */
class Stepper extends Component<IProps> {
  static defaultProps = {
    prefix: 'caf-stepper',
    step: 1,
    showNum: false,
    disabled: false,
    integerOnly: false,
    readOnly: false,
    min: 0,
    max: Infinity
  };
  state = {
    value: this.props.initVal || 1
  }
  triggerChange(result) {
    const { onChange } = this.props;
    this.setState({
      value: Number(result)
    })
    onChange && onChange(result);
  }
  minus = () => {
    const { step, min, disabled } = this.props;
    const { value } = this.state;
    if (value != min && !disabled) {
      const result = value - step <= min ? min : value - step;
      this.triggerChange(result);
    }
  };
  plus = () => {
    const { step, max, disabled } = this.props;
    const { value } = this.state;
    if (value != max && !disabled) {
      const result = value + step >= max ? max : value + step;
      this.triggerChange(result);
    }
  };
  onInputChange = e => {
    const { min, max, integerOnly } = this.props;
    const { value } = this.state;
    const $target = e.target;
    const tarVal = $target.value;
    let final;
    if (tarVal != +tarVal) {
      final = value;
    } else {
      /* istanbul ignore next */
      if (+tarVal > max) final = max;
      /* istanbul ignore next */
      if (+tarVal < min) final = min;
      /* istanbul ignore next */
      if (integerOnly && +tarVal % 1 !== 0) final = Math.round(tarVal);
    }
    /* istanbul ignore next */
    if (final && final !== tarVal) {
      $target.value = final;
    }
    this.triggerChange($target.value);
  };
  render({ prefix, className, disabled, step, min, max, showNum, readOnly, ...restProps }, { value }) {
    const isReachMin = Number(value) - step < min || value === min;
    const isReachMax = Number(value) + step > max || value === max;
    return (
      <div className={cx(prefix, className)} {...restProps}>
        <span
          className={cx(`${prefix}__btn`, `${prefix}__btn--minus`, {
            [`${prefix}__btn--disabled`]: disabled || isReachMin
          })}
          onClick={this.minus}
        >{ showNum ? isReachMin ? min : Number(value) - step : ''}</span>
        <div
          className={cx(`${prefix}__input`, {
            [`${prefix}__input--disabled`]: disabled
          })}
        >
          {readOnly ? (
            <p className={`${prefix}__input__content`}>{value}</p>
          ) : (
            <input
              aria-valuemin={min}
              aria-valuemax={max}
              disabled={disabled}
              aria-valuenow={value}
              value={value}
              onKeyUp={this.onInputChange}
            />
          )}
        </div>
        <span
          className={cx(`${prefix}__btn`, `${prefix}__btn--plus`, {
            [`${prefix}__btn--disabled`]: disabled || isReachMax
          })}
          onClick={this.plus}
        >{ showNum ? isReachMax ? min : Number(value) + step : ''}</span>
      </div>
    );
  }
}
export default Stepper;
