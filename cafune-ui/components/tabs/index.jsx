import { Component } from 'preact';
import PropTypes from 'prop-types';
import Panel from './panel';
import Nav from './nav';
import cx from 'classnames';

function checkIfPanel(el) {
  return el.nodeName.displayName === 'TabPanel';
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
class Tabs extends Component {
  static Panel = Panel;
  static Nav = Nav;
  static propTypes = {
    /**
     * 自定义类名
      */
    prefix: PropTypes.string,
    /**
     * 当前激活id
     */
    activeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    /**
     * 组件类型
     */
    type: PropTypes.oneOf(['slider', 'round', 'card']),
    /**
     * 切换tab时回调
     */
    onTabChange: PropTypes.func,
    /**
     * 自定义标签栏类名
     */
    navClass: PropTypes.string,
    /**
     * 最大可容纳标签数
     */
    maxCount: PropTypes.number
  };
  static defaultProps = {
    type: 'slider',
    maxCount: 5
  };
  onTabChange = key => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(key);
    }
  };
  renderNav(data, navClass) {
    const { type, align, maxCount } = this.props;
    if (data && data.length) {
      return (
        <Nav
          onChange={this.onTabChange}
          tabsData={data}
          type={type}
          align={align}
          navclassName={navClass}
          maxCount={maxCount}
          ref={c => (this.tabNav = c)}
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
    children.forEach(item => {
      if (checkIfPanel(item)) {
        const props = item.attributes;
        const { id, label, className } = props;
        const { children } = item;
        data.push({
          label,
          id,
          actived: activeId && id ? activeId === id : false,
          content: children,
          className
        });
      }
    });
    return data;
  }
  renderWithPanel() {
    const { prefix, children, activeId, className, navClass, ...restProps } = this.props;
    const tabsData = this.getTabsData(children, activeId);
    const cls = cx(prefix, className);
    return (
      <div className={cls} {...restProps}>
        {this.renderNav(tabsData, navClass)}
        <div ref={c => (this.tabPanel = c)}>
          {this.renderTabPanel(tabsData)}
        </div>
      </div>
    );
  }
  renderWithoutPanel() {
    const { prefix, children, activeId, className, navClass, tabs, ...restProps } = this.props;
    tabs.forEach(item => item.actived = item.id === activeId )
    const cls = cx(prefix, className);
    return (
      <div className={cls} {...restProps}>
        {this.renderNav(tabs, navClass)}
        { children }
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
