import { Component } from 'preact';
import cx from 'classnames';
import PropTypes from 'prop-types';

class SwiperItem extends Component {
  static displayName = 'swiperItem';
  static propTypes = {
    /**
     * 自定义类名
      */
    prefix: PropTypes.string,
    /**
     * 单元宽度
     */
    width: PropTypes.string
  };
  static defaultProps = {
    prefix: 'caf-swiper-container'
  };
  render({ prefix, className, children, width, ...restProps }) {
    return (
      <div className={cx(`${prefix}-item`, className)} style={{ width }} {...restProps}>
        {children}
      </div>
    );
  }
}
export default SwiperItem;
