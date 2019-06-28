import { Component } from 'preact';
import PropTypes from 'prop-types';

class SwiperItem extends Component {
  static displayName = 'swiperItem';
  static propTypes = {
    /**
     * 单元宽度
     */
    width: PropTypes.string
  };
  render({ children, width }) {
    return (
      <div class="caf-swiper-container-item" style={{ width }}>
        {children}
      </div>
    );
  }
}
export default SwiperItem;
