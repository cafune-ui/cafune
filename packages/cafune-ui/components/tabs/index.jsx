import { Component } from 'preact';
import PropTypes from 'prop-types';
import Panel from './panel';
import Nav from './nav';
import classNames from 'classnames';

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
 *
 * 单独使用Nav
 *
 * ```javascript
 * const tabsData = [
 *   {
 *     id: 'Sporttrey320',
 *    actived: true,
 *    label: '足球'
 *  },
 *  {
 *    id: 'Sporttrey307',
 *    actived: false,
 *   label: '篮球'
 *  },
 * {
 *    id: 'Sporttrey327',
 *    actived: false,
 *    label: 'aa球'
 *  }
 * ];
 * // ...
 * <TabNav tabsData={tabsData} type="card" />
 * // ...
 * ```
 *
 * 当需要隐藏掉某个tab但里面涉及的功能需要保留时，使用visable将该tab标签隐藏掉，需要配合activeId 更改
 */
class Tabs extends Component {
  static Panel = Panel;
  static Nav = Nav;
  static propTypes = {
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
          navClass={navClass}
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
    const { children, activeId, className, navClass } = this.props;
    const tabsData = this.getTabsData(children, activeId);
    const cx = classNames('caf-tabs', className);
    return (
      <div className={cx}>
        {this.renderNav(tabsData, navClass)}
        <div ref={c => (this.tabPanel = c)}>
          {this.renderTabPanel(tabsData)}
        </div>
      </div>
    );
  }
  renderWithoutPanel() {
    const { children, activeId, className, navClass, tabs } = this.props;
    tabs.forEach(item => item.actived = item.id === activeId )
    const cx = classNames('caf-tabs', className);
    return (
      <div className={cx}>
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
