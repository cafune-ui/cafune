import { Component } from 'preact';
import PropTypes from 'prop-types';

/**
 * 布局
 */
class Item extends Component {
  static defaultProps = {
    prefix: 'caf-layout-item',
    tag: 'div'
  };
  static propTypes = {
    /**
     * 自定义类名
     */
    prefix: PropTypes.string,
    /**
     * 列元素跨越宽度
     */
    col: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * 偏移距离
     */
    offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * 自定义元素标签
      */
    tag: PropTypes.string
  };
  render({ tag, offset, col, prefix, children }) {
    return <div class={prefix}>
      { children }
    </div>;
  }
}
export default Item;
