import { Component, h } from 'preact';
import TabItem from './components/tab';
import cx from 'classnames';
import { isBrowser } from '../util/isomorphic';

function setTransform(obj, offsetLeft) {
  obj.style.transform = `translate3d(${offsetLeft}px, 0, 0)`;
  obj.style.msTransform = `translate3d(${offsetLeft}px, 0, 0)`;
  obj.style.MozTransform = `translate3d(${offsetLeft}px, 0, 0)`;
  obj.style.webkitTransform = `translate3d(${offsetLeft}px, 0, 0)`;
}

type tabsItem = {
  id: string | number;
  label: string;
  actived: boolean;
  className?: string;
  visable?: boolean;
};
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
  tabsData?: tabsItem[];
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
  /* istanbul ignore next */
  resizing = () => {
    this.positionInkBar();
  };
  componentDidMount() {
    /* istanbul ignore next */
    if (isBrowser) {
      this.positionInkBar();
      window.addEventListener('resize', this.resizing);
    }
  }
  componentDidUpdate() {
    /* istanbul ignore next */
    if (isBrowser) {
      this.positionInkBar();
    }
  }
  componentWillUnmount() {
    /* istanbul ignore next */
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
      /* istanbul ignore next */
      if (
        navContainer.scrollLeft + navContainer.offsetWidth <
          base.offsetLeft + base.offsetWidth ||
        base.offsetLeft - navContainer.scrollLeft < 0
      ) {
        navContainer.scrollBy(
          base.offsetLeft + base.offsetWidth - navContainer.offsetWidth,
          0
        );
      }
    }
  }
  renderTabs() {
    const { tabsData, maxCount } = this.props;
    const tabs = (tabsData as tabsItem[]).map(item => {
      let ref;
      if (item.actived) {
        ref = c => (this.activeTab = c);
      }
      let tabStyle: any = {};
      if (maxCount !== defaultMax) {
        tabStyle.style = `min-width:${(1 / maxCount) * 100}%`;
      }
      return (
        <TabItem
          {...item}
          id={item.id}
          onSelected={this.onTabSelected}
          ref={ref}
          tabStyle={tabStyle}
        >
          {item.label}
        </TabItem>
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
