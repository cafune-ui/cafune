import { Component } from 'preact';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Item from './item';
import { setPadding } from '../../util/isomorphic';

/**
 * 标签栏
 * @example
 * ```jsx
 * const { TabBarItem } = TabBar;
 * export default class TestComp extends Component {
 *   state = {
 *     page: 'news',
 *   }
 *   onChange = activedId => {
 *     this.setState({
 *       page: activedId,
 *     })
 *   };
 *   render({}, {page}) {
 *     return (
 *       <div>
 *         <TabBar activedId={page} onChange={this.onChange}>
 *           <TabBarItem
 *              text="news"
 *              id="news"
 *              icons={{
 *                actived: '/assets/icons/news_actived.png',
 *                normal: '/assets/icons/news.png'
 *              }}
 *           />
 *           <TabBarItem text="match" id="match" />
 *           <TabBarItem text="leagues" id="leagues" />
 *         </TabBar>
 *       </div>
 *    );
 *   }
 * }
 * ```
 */
class TabBar extends Component {
  static TabBarItem = Item;
  static defaultProps = {
    prefix: 'caf-tabbar',
    fixed: true,
    activedColor: '#3f77f6'
  };
  static propTypes = {
    /**
     * 自定义类名
     */
    prefix: PropTypes.string,
    /**
     * 是否使用 `fixed` 定位
     */
    fixed: PropTypes.bool,
    /**
     * 当前激活的id
     */
    activedId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /**
     * 激活时文字颜色
     */
    activedColor: PropTypes.string,
    /**
     * 切换时回调
     */
    onChange: PropTypes.func
  };
  currentActive = this.props.activedId;
  componentDidMount() {
    setPadding(`${this.base.getBoundingClientRect().height}px`);
  }
  componentWillUnmount() {
    setPadding('');
  }
  onChange = activedId => {
    if (this.currentActive !== activedId) {
      const { onChange } = this.props;
      onChange && onChange(activedId);
      this.currentActive = activedId;
    }
  };
  getChildContext() {
    return {
      activedId: this.props.activedId,
      activedColor: this.props.activedColor,
      onChange: this.onChange
    };
  }
  render({ prefix, className, fixed, children, ...restProps }) {
    const cls = cx(prefix, className, { [`${prefix}__fixed`]: fixed });
    return (
      <div className={cls} {...restProps}>
        {children}
      </div>
    );
  }
}
export default TabBar;
