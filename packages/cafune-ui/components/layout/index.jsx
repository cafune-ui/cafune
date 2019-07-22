import { Component } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Item from './item';
/**
 * 布局
 */
class Layout extends Component {
  static Item = Item;
  static defaultProps = {
    prefix: 'caf-layout',
    tag: 'div',
    // direction: 'column',
    // wrap: 'wrap',
    // justify: 'center',
    // align: 'center',
    // alignContent: 'center',
  };
  static propTypes = {
    /**
     * 自定义类名
     */
    prefix: PropTypes.string,
    /**
     * 项目定位方向
     */
    direction: PropTypes.oneOf([
      'row',
      'row-reverse',
      'column',
      'column-reverse'
    ]),
    /**
     * 子元素换行方式
     */
    wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
    /**
     * 子元素在主轴上的对齐方式（对应justify-content）
     */
    justify: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']),
    /**
     * 子元素在交叉轴上的对齐方式（对应align-items）
     */
    align: PropTypes.oneOf(['start', 'center', 'end', 'baseline', 'stretch']),
    /**
     * 有多根轴线时的对齐方式（对应align-content）
     */
    alignContent: PropTypes.oneOf([
      'start',
      'end',
      'center',
      'between',
      'around',
      'stretch'
    ]),
    /**
     * 列元素之间的间距
     */
    gutter: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };
  getChildContext() {
    return {
      gutter: this.props.gutter
    };
  }
  render({
    tag,
    prefix,
    direction,
    wrap,
    justify,
    align,
    alignContent,
    children
  }) {
    const Tag = tag;
    return (
      <Tag
        className={cx(prefix, {
          [`${prefix}__direction_${direction}`]: !!direction,
          [`${prefix}__wrap_${wrap}`]: !!wrap,
          [`${prefix}__justify_${justify}`]: !!justify,
          [`${prefix}__align_${align}`]: !!align,
          [`${prefix}__alignContent_${alignContent}`]: !!alignContent
        })}
      >
        {children}
      </Tag>
    );
  }
}
export default Layout;
