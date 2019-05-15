import { Component } from 'preact';
import Panel from './components/panel';
import Nav from './components/nav';
import classNames from 'classnames';
import style from './style.scss';

function checkIfPanel(el) {
  return el.nodeName.displayName === 'TabPanel';
}

export class Tabs extends Component {
  static Panel = Panel;
  static Nav = Nav;
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
    const cx = classNames(style.tabs, className);
    return (
      <div class={cx}>
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
    const cx = classNames(style.tabs, className);
    return (
      <div class={cx}>
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
