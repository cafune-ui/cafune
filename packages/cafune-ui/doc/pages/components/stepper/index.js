import { Stepper, Cell } from 'cafune';
import { Component } from 'preact';
export default class StepperComp extends Component {
  state = {
    val1: 1,
    val2: 1,
    val3: 4,
    val4: 1
  };
  changeHandler = key => {
    return val => {
      this.setState({
        [key]: val
      });
    };
  };
  render({}, { val1, val2, val3, val4 }) {
    return (
      <div>
        <Cell
          title="基础用法"
          value={<Stepper value={val1} onChange={this.changeHandler('val1')} />}
          middle
        />
        <Cell
          title="自定义步进"
          value={
            <Stepper
              value={val2}
              step={3}
              onChange={this.changeHandler('val2')}
            />
          }
          middle
        />
        <Cell
          title="禁用状态"
          value={
            <Stepper
              value={val2}
              step={3}
              disabled
              onChange={this.changeHandler('val2')}
            />
          }
          middle
        />
        <Cell
          title="限定范围(2-8)"
          value={
            <Stepper
              value={val3}
              min={2}
              max={8}
              onChange={this.changeHandler('val3')}
            />
          }
          middle
        />
        <Cell
          title="限定整数"
          value={
            <Stepper
              value={val4}
              min={-Infinity}
              integerOnly
              onChange={this.changeHandler('val4')}
            />
          }
          middle
        />
        <Cell
          title="只读"
          value={
            <Stepper
              value={val4}
              readOnly
              onChange={this.changeHandler('val4')}
            />
          }
          middle
        />
      </div>
    );
  }
}
