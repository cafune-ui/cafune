import { Component } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';
/**
 * 日历
 */
class Calendar extends Component {
  static defaultProps = {
    prefix: 'caf-calendar'
  }
  static propTypes = {
    /**
     * 自定义类名
      */
    prefix: PropTypes.string
  }
  render() {
    return <div />;
  }
}
export default Calendar;
