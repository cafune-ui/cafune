import { ActionBar } from 'cafune';
import { Component } from 'preact';
export default class ActionBarComp extends Component {
  render() {
    return (
      <div style="height: 100vh;">
        <ActionBar
          descContent="描述文字"
          btnContent="按钮文字"
          additionMsg="附加文字"
          handleClick={() => console.log('click')}
        />
      </div>
    );
  }
}
