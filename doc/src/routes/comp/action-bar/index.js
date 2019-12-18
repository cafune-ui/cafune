import { ActionBar } from 'cafune';
import { Component } from 'preact';
export default class ActionBarComp extends Component {
  state = {
    additionMsg: ''
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        additionMsg: '附加文字'
      });
    }, 1000);
  }
  render({}, { additionMsg }) {
    return (
      <div style="height: 100vh;">
        <ActionBar
          desc="描述文字"
          capsule
          btns={[
            {
              children: '主按钮',
              type: 'warning'
            },
            {
              children: '次按钮',
              type: 'primary'
            }
          ]}
          additionMsg={additionMsg}
          handleClick={() => console.log('click')}
        />
      </div>
    );
  }
}
