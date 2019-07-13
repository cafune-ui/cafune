import { Component } from 'preact';
import PropTypes from 'prop-types';
import Item from './item';
/**
 * 布局
 */
class Layout extends Component {
  static Item = Item;
  static defaultProps = {
    prefix: 'caf-layout'
  };
  static propTypes = {
    /**
     * 自定义类名
     */
    prefix: PropTypes.string,
    /**
     * flex 属性
     */
    flexData: PropTypes.shape({
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
      justify: PropTypes.oneOf(['start','end','center','between','around']),
      /**
       * 子元素在交叉轴上的对齐方式（对应align-items）
       */
      align: PropTypes.oneOf(['start','center','end','baseline','stretch']),
       /**
       * 有多根轴线时的对齐方式（对应align-content）
       */
      alignContent: PropTypes.oneOf(['start','end','center','between','around','stretch'])
    })
  };
  render({ prefix, children }) {
    return <div class={prefix}>
      { children }
    </div>;
  }
}
export default Layout;
