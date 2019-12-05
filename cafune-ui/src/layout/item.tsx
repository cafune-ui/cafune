import { Component, h } from 'preact';
import cx from 'classnames';

interface IProps {
  /**
   * 自定义类名
   */
  prefix?: string;
  /**
   * 列元素跨越宽度
   */
  col?: string | number;
  /**
   * 偏移距离
   */
  offset?: string | number;
  /**
   * 自定义元素标签
   */
  Tag?: string;
}

/**
 * 布局
 */
class Item extends Component<IProps> {
  static displayName = 'LayoutItem';
  static defaultProps = {
    prefix: 'caf-layout-item',
    Tag: 'div'
  };
  render(
    { className, Tag, offset, col, prefix, children, ...restProps },
    {},
    { gutter }
  ) {
    let sty;
    /* istanbul ignore next */
    if (gutter) {
      let pad;
      /* istanbul ignore next */
      if (typeof gutter === 'string') {
        const matches = gutter.match(/(\d+)(\w+$)?/);
        /* istanbul ignore next */
        if (matches) {
          pad = `${Number(matches[1]) / 2}${matches[2] || 'px'}`;
        }
      } else {
        pad = `${Number(gutter) / 2}px`;
      }
      sty = { paddingLeft: pad, paddingRight: pad };
    }
    return (
      <Tag
        className={cx(prefix, className, {
          [`${prefix}__${col}`]: !!col,
          [`${prefix}__offset_${offset}`]: !!offset
        })}
        style={sty || {}}
        {...restProps}
      >
        {children}
      </Tag>
    );
  }
}
export default Item;
