import { Component, h } from 'preact';
import cx from 'classnames';

interface IProps {
  /**
   * 自定义前缀
   */
  prefix?: string;
  /**
   * 列数
   */
  icon?: string;
  /**
   * 是否固定为正方形
   */
  text?: string;
}
/**
 * 宫格单元
 */
class GridItem extends Component<IProps> {
  static displayName = 'GridItem';
  static defaultProps = {
    prefix: 'caf-grid__item'
  };
  render(
    { prefix, className, ind, icon, text, children, ...restProps },
    {},
    { gutter, column, square }
  ) {
    const percent = `${100 / column}%`;
    const sty: any = {
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
        <div className={`${prefix}__inner`} style={innerStyle}>
          {children}
        </div>
      </div>
    );
  }
}
export default GridItem;
