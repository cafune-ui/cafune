import { Calendar } from 'cafune';
import { Component } from 'preact';

export default class CalendarComp extends Component {
  state = {
    selectedDate: { start: '2019/10/20', end: '2019/11/2' }
  };
  onDateSelect = curDate => {
    this.setState({
      selectedDate: curDate
    });
  };
  formate(data) {
    const { start, end } = data;
    let sStart = typeof start === 'string' ? start : start.format('YYYY/MM/DD');
    let sEnd = typeof end === 'string' ? end : end.format('YYYY/MM/DD');
    return `${sStart} - ${sEnd}`;
  }
  render({}, { selectedDate }) {
    return (
      <div>
        <p class="caf-demo-title">默认用法</p>
        <Calendar />
        <p class="caf-demo-title">定制日期</p>
        <Calendar
          maxSelect={7}
          minSelect={2}
          defaultCurrent={{ month: 10 }}
          defaultSelect={selectedDate}
          formatter={{
            title(year, month) {
              return `${year}年${month}月`;
            }
          }}
          onDateSelect={this.onDateSelect}
        />
        <p style="padding: 0 15px;">
          当前选择日期: <b>{this.formate(selectedDate)}</b>
        </p>
      </div>
    );
  }
}
