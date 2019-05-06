import { Component } from 'preact';
import classNames from 'classnames';
import style from './style.scss';
import Item from './components/item';
import { setPadding } from 'util/isomorphic';

export class TabBar extends Component {
  static TabBarItem = Item;
  static defaultProps = {
    fixed: true,
    activedColor: '#3f77f6'
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
  render({ fixed, children }) {
    const cx = classNames(style.tabbar, { [style.tabbar__fixed]: fixed });
    return <div class={cx}>{children}</div>;
  }
}
export default TabBar;
