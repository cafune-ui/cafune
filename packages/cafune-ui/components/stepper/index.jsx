import { Component } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * 步进器
 */
class Stepper extends Component {
  static defaultProps = {
    prefix: 'caf-stepper',
    step: 1,
    disabled: false,
    integerOnly: false,
    readOnly: false,
    min: 0,
    max: Infinity
  };
  static propTypes = {
    /**
     * 自定义类名
     */
    prefix: PropTypes.string,
    /**
     * 当前值
     */
    value: PropTypes.number.isRequired,
    /**
     * 最小值
     */
    min: PropTypes.number,
    /**
     * 最大值
     */
    max: PropTypes.number,
    /**
     * 步进数
     */

    step: PropTypes.number,
    /**
     * 是否处于禁用状态
     */
    disabled: PropTypes.bool,
    /**
     * 是否限定为整数
     */
    integerOnly: PropTypes.bool,
    /**
     * 数值是否只读
     */
    readOnly: PropTypes.bool,
    /**
     * 数值改变时回调
     */
    onChange: PropTypes.func
  };
  minus = () => {
    const { onChange, value, step, min, disabled } = this.props;
    if (value != min && !disabled) {
      const result = value - step <= min ? min : value - step;
      onChange(result, -1);
    }
  };
  plus = () => {
    const { onChange, value, step, max, disabled } = this.props;
    if (value != max && !disabled) {
      const result = value + step >= max ? max : value + step;
      onChange(result, -1);
    }
  };
  onInputChange = e => {
    const { value, min, max, integerOnly, onChange } = this.props;
    const $target = e.target;
    const tarVal = $target.value;
    let final;
    if (tarVal != +tarVal) {
      final = value;
    } else {
      if (+tarVal > max) final = max;
      if (+tarVal < min) final = min;
      if (integerOnly && +tarVal % 1 !== 0) final = Math.round(tarVal);
    }
    if (final && final !== tarVal) {
      console.log(final);
      $target.value = final;
    }
    onChange($target.value, 0);
  };
  render({ prefix, disabled, step, min, max, value, readOnly }) {
    const isReachMin = value - step < min || value === min;
    const isReachMax = value + step > max || value === max;
    return (
      <div className={cx(prefix)}>
        <span
          className={cx(`${prefix}-btn`, `${prefix}-btn__minus`, {
            [`${prefix}-btn__disabled`]: disabled || isReachMin
          })}
          onClick={this.minus}
        />
        <div
          className={cx(`${prefix}-input`, {
            [`${prefix}-input__disabled`]: disabled
          })}
        >
          {readOnly ? (
            <p className={`${prefix}-input-content`}>{value}</p>
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
          className={cx(`${prefix}-btn`, `${prefix}-btn__plus`, {
            [`${prefix}-btn__disabled`]: disabled || isReachMax
          })}
          onClick={this.plus}
        />
      </div>
    );
  }
}
export default Stepper;
