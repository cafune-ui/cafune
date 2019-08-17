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
  render(
    { prefix, className, ind, icon, text, children, ...restProps },
    {},
    { gutter, column, square }
  ) {
    const percent = `${100 / column}%`;
    const sty = {
      flexBasis: percent
    };
    let innerStyle = {};
    if (square) {
      sty.paddingTop = percent;
      if (gutter) {
        const halfGutter = gutter / 2;
        innerStyle = {
          right: halfGutter,
          left: halfGutter,
          top: halfGutter,
          bottom: halfGutter,
          height: 'auto'
        };
      }
    } else if (gutter) {
      sty.paddingRight = gutter;
      if (ind > column) {
        sty.marginTop = gutter;
      }
    }
    return (
      <div className={cx(prefix, className)} style={sty} {...restProps}>
        <div className={`${prefix}-inner`} style={innerStyle}>
          {children}
        </div>
      </div>
    );
  }
}
export default GridItem;
