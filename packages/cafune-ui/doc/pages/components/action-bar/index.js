import { ActionBar } from 'cafune';
import { Component } from 'preact';
export default class ActionBarComp extends Component {
  render() {
    return (
      <div>
        <ActionBar
          descContent="描述文字"
          btnContent="按钮文字"
          handleClick={() => console.log('click')}
        />
      </div>
    );
  }
}
