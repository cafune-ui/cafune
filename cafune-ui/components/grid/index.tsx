import { Component, h } from 'preact';
import cx from 'classnames';
import Item from './item';

interface IProps {
  /**
     * 自定义前缀
     */
    prefix?: string;
    /**
     * 列数
     */
    column?: string;
    /**
     * 是否固定为正方形
     */
    square?: boolean;
    /**
     * 是否显示边框
     */
    border?: boolean;
    /**
     * 是否居中显示
     */
    center?: boolean;
    /**
     * 单元格间距
     */
    gutter?: string | number;
}
/**
 * 宫格
 */
class Grid extends Component<IProps> {
  static Item = Item;
  static defaultProps = {
    prefix: 'caf-grid',
    column: 4,
    square: true,
    border: true,
    center: true,
    gutter: 0
  };
  static propTy
  getChildContext() {
    const { gutter, border, square, center, column } = this.props;
    return {
      gutter,
      square,
      border,
      center,
      column
    };
  }
  renderChildren() {
    const { children  } = this.props;
    if (children && (children as preact.ComponentChild[]).length) {
      const result = [];
      let ind = 0;
      (children as any[]).forEach(item => {
        if (item.nodeName.displayName === 'GridItem') {
          ind += 1;
          item.attributes.ind = ind;
          result.push(item);
        }
      });
      return result;
    }
    return null;
  }
  render({ prefix, className, square, border, center, gutter, ...restProps }) {
    return (
      <div
        className={cx(prefix, className, {
          [`${prefix}__square`]: square,
          [`${prefix}__border`]: border,
          [`${prefix}__center`]: center,
          [`${prefix}__surround`]: border && gutter
        })}
        {...restProps}
      >
        {this.renderChildren()}
      </div>
    );
  }
}
export default Grid;
