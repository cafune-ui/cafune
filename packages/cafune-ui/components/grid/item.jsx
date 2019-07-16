import { Component } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * 宫格单元
 */
class GridItem extends Component {
  static displayName = 'GridItem';
  static defaultProps = {
    prefix: 'caf-grid-item'
  };
  static propTypes = {
    /**
     * 自定义前缀
     */
    prefix: PropTypes.string,
    /**
     * 列数
     */
    icon: PropTypes.string,
    /**
     * 是否固定为正方形
     */
    text: PropTypes.string
  };
  render({ prefix, ind, icon, text, children }, {}, { gutter, column, square }) {
    const percent = `${100 / column}%`;
    const sty = {
      flexBasis: percent
    };
    let innerStyle = {};
    if (square) {
      sty.paddingTop = percent;
      if (gutter) {
        innerStyle = {
          right: gutter,
          bottom: gutter,
          height: 'auto'
        }
      }
    } else if (gutter) {
      sty.paddingRight = gutter;
      if (ind > column) {
        sty.marginTop = gutter;
      }
    }
    return (
      <div class={prefix} style={sty}>
        <div class={`${prefix}-inner`} style={innerStyle}>{children}</div>
      </div>
    );
  }
}
export default GridItem;
