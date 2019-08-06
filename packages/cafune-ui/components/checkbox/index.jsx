import { Component } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';
/**
 * 复选框
 */
class Checkbox extends Component {
  static defaultProps = {
    prefix: 'caf-checkbox'
  };
  render({ prefix, className, ...restProps }) {
    return <div className={cx(prefix, className)} {...restProps}>hi</div>;
  }
}
export default Checkbox;
