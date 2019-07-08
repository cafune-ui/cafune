import { Component } from "preact";
import PropType from 'prop-types';
import Item from "./item";

function checkIfItem(el) {
  return el.nodeName.displayName === "CollapseItem";
}

/**
 * 折叠面板
 * @example
 * ```javascript
 * const CollapseItem = Collapse.Item;
 * // ...
 * <Collapse actives={activeCol} onChange={this.onChange}>
 *  <CollapseItem title="标题1" id="a">
 *    内容1
 *  </CollapseItem>
 *  <CollapseItem title="标题2" id="b">
 *    内容2
 *  </CollapseItem>
 *  <CollapseItem title="标题3" id="c" disabled>
 *    内容3
 *  </CollapseItem>
 * </Collapse>
 * ```
 */
class Collapse extends Component {
  static Item = Item;
  state = {
    actives: this.props.actives
  };
  static defaultProps = {
    accordion: false,
    prefix: "caf-collapse"
  };
  static propType = {
    /**
     * 是否开启手风琴效果
      */
    accordion: PropType.bool,
    /**
     * 自定义前缀
      */
    prefix: PropType.string,
  }
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
        console.error("actives should be a String while using accordion");
        return;
      }
    } else if (typeof actives === "string") {
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
            typeof actives === "string"
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
    const { prefix, children, accordion } = this.props;
    const { actives } = this.state;
    const listData = this.getListData(children, actives, accordion);
    return <div className={prefix}>{this.renderContent(listData)}</div>;
  }
  render() {
    return this.renderList();
  }
}
export default Collapse;
