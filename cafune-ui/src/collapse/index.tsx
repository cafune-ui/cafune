import { Component, h } from 'preact';
import cx from 'classnames';
import Item from './item';

function checkIfItem(el) {
  return el.nodeName.displayName === 'CollapseItem';
}

interface IProps {
  /**
   * 是否开启手风琴效果
   */
  accordion?: boolean;
  /**
   * 自定义前缀
   */
  prefix?: string;
  /**
   * 激活的列表
   */
  actives?: string | string[];
  /**
   * 自定义类名
   */
  className?: string;
}
/**
 * 折叠面板
 */
class Collapse extends Component<IProps> {
  static Item = Item;
  state = {
    actives: this.props.actives
  };
  static defaultProps = {
    accordion: false,
    prefix: 'caf-collapse'
  };
  onToggle = id => {
    let { actives } = this.state;
    if (Array.isArray(actives)) {
      const idInd = actives.indexOf(id);
      if (idInd === -1) {
        actives.push(id);
      } else {
        actives.splice(idInd, 1);
      }
    } else {
      actives = actives === id ? '' : id;
    }
    this.setState({
      actives
    });
  };
  renderContent(data) {
    let panels = [];
    if (data && data.length) {
      panels = data.map(item => (
        <Item {...item} onToggle={this.onToggle}>
          {item.content}
        </Item>
      ));
      return panels;
    }
    return null;
  }
  getListData(children, actives, accordion) {
    if (accordion) {
      if (Array.isArray(actives)) {
        console.error('actives should be a String while using accordion');
        return;
      }
    } else if (typeof actives === 'string') {
      actives = [actives];
    }
    const data = [];
    children.forEach(item => {
      if (checkIfItem(item)) {
        const props = item.attributes;
        const { id } = props;
        const { children } = item;
        let actived = false;
        if (actives && id)
          actived =
            typeof actives === 'string'
              ? actives == id
              : actives.indexOf(id) !== -1;
        data.push({
          actived,
          content: children,
          ...props
        });
      }
    });
    return data;
  }
  renderList() {
    const { prefix, children, accordion, className, ...restProps } = this.props;
    const { actives } = this.state;
    const listData = this.getListData(children, actives, accordion);
    return (
      <div className={cx(prefix, className)} {...restProps}>
        {this.renderContent(listData)}
      </div>
    );
  }
  render() {
    return this.renderList();
  }
}
export default Collapse;
