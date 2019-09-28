import { Component, h } from 'preact';
import cx from 'classnames';
import Item from './item';
interface IProps {
  /**
   * 自定义类名
   */
  prefix?: string;
  /**
   * 项目定位方向
   */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  /**
   * 子元素换行方式
   */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /**
   * 子元素在主轴上的对齐方式（对应justify-content）
   */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  /**
   * 子元素在交叉轴上的对齐方式（对应align-items）
   */
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  /**
   * 有多根轴线时的对齐方式（对应align-content）
   */
  alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';
  /**
   * 列元素之间的间距
   */
  gutter?: string | number;
}
/**
 * 布局
 */
class Layout extends Component<IProps> {
  static Item = Item;
  static defaultProps = {
    prefix: 'caf-layout',
    tag: 'div'
  };
  getChildContext() {
    return {
      gutter: this.props.gutter
    };
  }
  render({
    tag,
    prefix,
    className,
    direction,
    wrap,
    justify,
    align,
    alignContent,
    children,
    ...restProps
  }) {
    const Tag = tag;
    return (
      <Tag
        className={cx(prefix, className, {
          [`${prefix}__direction_${direction}`]: !!direction,
          [`${prefix}__wrap_${wrap}`]: !!wrap,
          [`${prefix}__justify_${justify}`]: !!justify,
          [`${prefix}__align_${align}`]: !!align,
          [`${prefix}__alignContent_${alignContent}`]: !!alignContent
        })}
        {...restProps}
      >
        {children}
      </Tag>
    );
  }
}
export default Layout;
