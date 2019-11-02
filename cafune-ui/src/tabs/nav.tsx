import { Component, h } from 'preact';
import Tab from './components/tab';
import cx from 'classnames';
import { isBrowser } from '../util/isomorphic';

function setTransform(obj, offsetLeft) {
  obj.style.transform = `translate3d(${offsetLeft}px, 0, 0)`;
  obj.style.msTransform = `translate3d(${offsetLeft}px, 0, 0)`;
  obj.style.MozTransform = `translate3d(${offsetLeft}px, 0, 0)`;
  obj.style.webkitTransform = `translate3d(${offsetLeft}px, 0, 0)`;
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
  tabsData?: {
    id: string | number;
    label: string;
    actived: boolean;
    className?: string;
    visable?: boolean;
  }[];
  /**
   * 组件类型
   */
  type?: 'slider' | 'contrast' | 'card';
  /**
   * 切换tab时回调
   */
  onChange?: (id) => void;
  /**
   * 自定义标签栏类名
   */
  navClass?: string;
  /**
   * 最大可容纳标签数
   */
  maxCount?: number;
}
const defaultMax = 5;
export default class Nav extends Component<IProps> {
  static defaultProps = {
    type: 'slider',
    prefix: 'caf-tabs__nav',
    maxCount: 5
  };
  onTabSelected = id => {
    const { onChange } = this.props;
    onChange(id);
  };
  resizing = () => {
    this.positionInkBar();
  };
  componentDidMount() {
    if (isBrowser) {
      this.positionInkBar();
      window.addEventListener('resize', this.resizing);
    }
  }
  componentDidUpdate() {
    if (isBrowser) {
      this.positionInkBar();
    }
  }
  componentWillUnmount() {
    if (isBrowser) {
      window.removeEventListener('resize', this.resizing);
    } 
  }
  inkBar: any;
  activeTab: any;
  navContainer: any;
  // 定位底部指示线
  positionInkBar() {
    const { inkBar, activeTab, navContainer } = this;
    if (activeTab && activeTab.base) {
      const { base } = activeTab;
      const itemWidth = base.offsetWidth;
      const inkWidth = inkBar.offsetWidth;
      const offsetLeft = (itemWidth - inkWidth) / 2 + base.offsetLeft;
      setTransform(inkBar, offsetLeft);
      const navSW = navContainer.scrollLeft - navContainer.offsetWidth;
      if (navContainer.scrollLeft + navContainer.offsetWidth < base.offsetLeft + base.offsetWidth || base.offsetLeft -  navContainer.scrollLeft < 0) {
        // console.log(base.offsetLeft - navContainer.offsetWidth)
        navContainer.scrollBy(base.offsetLeft + base.offsetWidth - navContainer.offsetWidth, 0)
      }
    }
  }
  renderTabs() {
    const { tabsData, maxCount } = this.props;
    const tabs = [];
    (tabsData as any[]).forEach(item => {
      let ref;
      if (item.actived) {
        ref = c => (this.activeTab = c);
      }
      let tabStyle: any = {};
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
  render({ prefix, className, navClass, type, ...restProps }) {
    const cls = cx(prefix, className, `${prefix}--${type}`, navClass);
    return (
      <div className={cls} {...restProps} ref={c => (this.navContainer = c)}>
        <div className={`${prefix}__container`}>{this.renderTabs()}</div>
        <span className={`${prefix}__ink`} ref={c => (this.inkBar = c)} />
      </div>
    );
  }
}
