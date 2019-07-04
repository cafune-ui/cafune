import { ActionSheet } from 'cafune';
import { Component } from 'preact';

export default class ActionSheetComp extends Component {
  state = {
    isActionShow1: false
  };
  showAction = name => () =>
    this.setState({
      [name]: !this.state[name]
    });
  render({}, { isActionShow1 }) {
    return (
      <div class="">
        <div onClick={this.showAction('isActionShow1')}>展示面板</div>
        <ActionSheet isShow={isActionShow1} />
      </div>
    );
  }
}
