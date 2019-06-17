import { Component } from 'preact';
import Tab from './tab';
import classNams from 'classnames';
import { isBrowser } from 'util/isomorphic';

function setTransform(obj, offsetLeft) {
  obj.style.transform = `translate3d(${offsetLeft}px, 0, 0)`;
  obj.style.msTransform = `translate3d(${offsetLeft}px, 0, 0)`;
  obj.style.MozTransform = `translate3d(${offsetLeft}px, 0, 0)`;
  obj.style.webkitTransform = `translate3d(${offsetLeft}px, 0, 0)`;
}

const defaultMax = 5;
export default class Nav extends Component {
  onTabSelected = id => {
    const { onChange } = this.props;
    onChange(id);
  };
  resizing = () => {
    this.positionInkBar();
  };
  componentDidMount() {
    const { type = 'slider' } = this.props;
    if (type === 'slider' && isBrowser) {
      this.positionInkBar();
      window.addEventListener('resize', this.resizing);
    }
  }
  componentDidUpdate() {
    const { type = 'slider' } = this.props;
    if (type === 'slider' && isBrowser) {
      this.positionInkBar();
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizing);
  }
  // 定位底部指示线
  positionInkBar() {
    const { inkBar, activeTab } = this;
    if (activeTab) {
      const { base } = activeTab;
      const itemWidth = base.offsetWidth;
      const percent = 0.6;
      inkBar.style.width = `${itemWidth * percent}px`;
      const offsetLeft = itemWidth * ((1 - percent) / 2) + base.offsetLeft;
      setTransform(inkBar, offsetLeft);
    }
  }
  renderTabs() {
    const { tabsData, maxCount } = this.props;
    const tabs = [];
    tabsData.forEach(item => {
      let ref;
      if (item.actived) {
        ref = c => (this.activeTab = c);
      }
      let tabStyle = {};
      if (maxCount !== defaultMax) {
        tabStyle.style = `min-width:${(1 / maxCount) * 100}%`;
      }
      tabs.push(
        <Tab
          {...item}
          id={item.id}
          onSelected={this.onTabSelected}
          ref={ref}
          tabStyle={tabStyle}
          key={item.key}
        >
          {item.label}
        </Tab>
      );
    });
    return tabs;
  }
  render({ navClass, type = 'slider' }) {
    const cx = classNams(
      'caf-tabs-nav',
      {
        'caf-tabs-nav__slider': type === 'slider',
        'caf-tabs-nav__round': type === 'round',
        'caf-tabs-nav__card': type === 'card'
      },
      navClass
    );
    return (
      <div class={cx}>
        <div class='caf-tabs-nav-content'>{this.renderTabs()}</div>
        <span class='caf-tabs-nav-ink' ref={c => (this.inkBar = c)} />
      </div>
    );
  }
}
