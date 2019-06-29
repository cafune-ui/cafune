import { Component } from 'preact';
import Item from './components/item';

function checkIfItem(el) {
  return el.nodeName.displayName === 'CollapseItem';
}

export class Collapse extends Component {
  static Item = Item;
  state = {
    actives: this.props.actives
  }
  static defaultProps = {
    accordion: false,
    prefix: 'caf-collapse'
  };
  // componentWillReceiveProps(nextProps) {
  //   this.setState(
  //     {
  //       actives: nextPropsactives
  //     }
  //   );
  // }
  onToggle = id => {
    const actives = this.state.actives;
    const idInd = actives.indexOf(id);
    if (idInd === -1) {
      actives.push(id);
    } else {
      actives.splice(idInd, 1);
    }
    this.setState({
      actives,
    });
  }
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
    if (accordion && Array.isArray(actives)) {
      console.error('actives should be a String while using accordion');
      return;
    } else if (typeof actives === 'string') {
      actives = [actives];
    }
    const data = [];
    children.forEach(item => {
      if (checkIfItem(item)) {
        const props = item.attributes;
        const { id, title, disabled } = props;
        const { children } = item;
        let actived = false;
        if (actives && id) actived = typeof actives === 'string' ? actives == id : actives.indexOf(id) !== -1
        data.push({
          title,
          id,
          actived,
          content: children,
          disabled
        });
      }
    });
    return data;
  }
  renderList() {
    const { prefix, children, accordion } = this.props;
    const { actives } = this.state;
    const listData = this.getListData(children, actives, accordion);
    return <div class={prefix}>{this.renderContent(listData)}</div>;
  }
  render() {
    return this.renderList();
  }
}
export default Collapse;
