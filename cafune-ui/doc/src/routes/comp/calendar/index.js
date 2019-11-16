import { Calendar } from 'cafune';
import { Component } from 'preact';

export default class CalendarComp extends Component {
  render() {
    return (
      <div>
        <p class="caf-demo-title">默认用法</p>
        <Calendar />
        <Calendar defaultSelect={{ start: '2019/10/20', end: '2019/11/2' }} />
      </div>
    );
  }
}
