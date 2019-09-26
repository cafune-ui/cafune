import { Component, h, createRef } from 'preact';
import Panel from './panel';
import Nav from './nav';
import cx from 'classnames';

function checkIfPanel(el) {
  return el.nodeName.displayName === 'TabPanel';
}
interface IProps {
  /**
   * 自定义前缀
   */
  prefix?: string;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 当前激活id
   */
  activeId?: string | number;
  /**
   * 组件类型
   */
  type?: 'slider' | 'round' | 'card';
  /**
   * 切换tab时回调
   */
  onChange?: (key) => void;
  /**
   * 自定义标签栏类名
   */
  navClass?: string;
  /**
   * 最大可容纳标签数
   */
  maxCount?: number;
  /**
   * 自定义tab 列表
   */
  tabs?:
    | {
        id: string | number;
        actived?: boolean;
        label: string;
      }[]
    | any;
}
/**
 * 标签卡
 * @example
 * ```javascript
 * class NormalTab extends Component {
 *   state = {
 *     activeId: 'a'
 *   }
 *   onChange = id =>  {
 *    this.setState({
 *       activeId: id,
 *    })
 *   }
 *  render({}, { activeId }) {
 *    return (
 *      <Tabs activeId={ activeId } onChange={ this.onChange }>
 *        <TabPanel label="A" id="a">
 *         <div>A</div>
 *         </TabPanel>
 *         <TabPanel label="B" id="b">
 *           <div>B</div>
 *        </TabPanel>
 *        <TabPanel label="C" id="c" visable={false}>
 *          <div>C</div>
 *        </TabPanel>
 *    </Tabs>
 *     )
 *   }
 * }
 * ```
 */
class Tabs extends Component<IProps> {
  static Panel = Panel;
  static Nav = Nav;
  static defaultProps = {
    type: 'slider',
    maxCount: 5
  };
  state = {
    activedKey: ''
  };
  onTabChange = key => {
    const { onChange } = this.props;
    if (!this.props.activeId) {
      this.setState({
        activedKey: key
      });
    }
    if (onChange) {
      onChange(key);
    }
  };
  tabNav = createRef();
  tabPanel = createRef();
  renderNav(data, navClass) {
    const { type, maxCount } = this.props;
    if (data && data.length) {
      return (
        <Nav
          onChange={this.onTabChange}
          tabsData={data}
          type={type}
          navClass={navClass}
          maxCount={maxCount}
          ref={this.tabNav}
        />
      );
    }
    return null;
  }
  renderTabPanel(data) {
    let panels = [];
    if (data && data.length) {
      panels = data.map(item => (
        <Panel key={item.key} className={item.className} actived={item.actived}>
          {item.content}
        </Panel>
      ));
      return panels;
    }
    return null;
  }
  getTabsData(children, activeId) {
    const data = [];
    const { activedKey } = this.state;
    children.forEach((item, ind) => {
      if (checkIfPanel(item)) {
        const props = item.attributes;
        const { id, label, className } = props;
        const { children } = item;
        let actived = false;
        if (activeId) {
          actived = id ? activeId === id : false;
        } else {
          actived = activedKey ? activedKey === id : ind === 0;
        }
        data.push({
          label,
          id,
          actived,
          content: children,
          className
        });
      }
    });
    return data;
  }
  renderWithPanel() {
    const {
      prefix,
      children,
      activeId,
      className,
      navClass,
      ...restProps
    } = this.props;
    const tabsData = this.getTabsData(children, activeId);
    const cls = cx(prefix, className);
    return (
      <div className={cls} {...restProps}>
        {this.renderNav(tabsData, navClass)}
        <div ref={this.tabPanel}>{this.renderTabPanel(tabsData)}</div>
      </div>
    );
  }
  renderWithoutPanel() {
    const {
      prefix,
      children,
      activeId,
      className,
      navClass,
      tabs,
      ...restProps
    } = this.props;
    tabs.forEach(item => (item.actived = item.id === activeId));
    const cls = cx(prefix, className);
    return (
      <div className={cls} {...restProps}>
        {this.renderNav(tabs, navClass)}
        {children}
      </div>
    );
  }
  render({ tabs }) {
    if (tabs) {
      return this.renderWithoutPanel();
    }
    return this.renderWithPanel();
  }
}

export default Tabs;
