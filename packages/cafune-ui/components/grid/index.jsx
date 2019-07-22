import { Component } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Item from './item';
/**
 * 宫格
 */
class Grid extends Component {
  static Item = Item;
  static defaultProps = {
    prefix: 'caf-grid',
    column: 4,
    square: true,
    border: true,
    center: true,
    gutter: 0
  };
  static propTypes = {
    /**
     * 自定义前缀
     */
    prefix: PropTypes.string,
    /**
     * 列数
     */
    column: PropTypes.string,
    /**
     * 是否固定为正方形
     */
    square: PropTypes.bool,
    /**
     * 是否显示边框
     */
    border: PropTypes.bool,
    /**
     * 是否居中显示
     */
    center: PropTypes.bool,
    /**
     * 单元格间距
     */
    gutter: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };
  getChildContext() {
    const { gutter, border, square, center, column } = this.props;
    return {
      gutter,
      square,
      border,
      center,
      column,
    };
  }
  renderChildren() {
    const { children } = this.props;
    if (children && children.length) {
      const result = [];
      let ind = 0;
      children.forEach(item => {
        if (item.nodeName.displayName === 'GridItem') {
          ind += 1;
          item.attributes.ind = ind;
          result.push(item)
        }
      });
      return result;
    }
    return null;
  }
  render({ prefix, square, border, center, gutter }) {
    return <div className={cx(prefix, {
      [`${prefix}__square`]: square,
      [`${prefix}__border`]: border,
      [`${prefix}__center`]: center,
      [`${prefix}__surround`]: border && gutter,
    })}>{ this.renderChildren() }</div>;
  }
}
export default Grid;
