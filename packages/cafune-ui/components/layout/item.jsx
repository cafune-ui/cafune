import { Component } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';
/**
 * 布局
 */
class Item extends Component {
  static displayName = 'LayoutItem';
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
  render({ tag, offset, col, prefix, children }, {}, { gutter }) {
    const Tag = tag;
    let sty = {};
    if (gutter) {
      let pad;
      if (typeof(gutter) === 'string') {
        const matches = gutter.match(/(\d+)(\w+$)?/);
        if (matches) pad = `${Number(matches[1]) / 2}${matches[2] || 'px'}`
      } else {
        pad = `${Number(gutter) / 2}px`;
      }
      sty = { paddingLeft: pad, paddingRight: pad };
    }
    return (
      <Tag
        class={cx(prefix, {
          [`${prefix}__${col}`]: !!col,
          [`${prefix}__offset_${offset}`]: !!offset
        })}
        style={sty}
      >
        {children}
      </Tag>
    );
  }
}
export default Item;
