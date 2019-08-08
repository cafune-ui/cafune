import { Cell, Checkbox } from 'cafune';
const { CellGroup } = Cell;
const { CheckboxGroup } = Checkbox;

import { Component } from 'preact';
export default class CheckboxComp extends Component {
  state = {
    check: 'hi',
    checks: ['hi', 'hello'],
    checkList: ['hi', 'holla', 'bonjour', 'hello']
  };
  render({}, { check, checks, checkList }) {
    return (
      <div>
        {checkList.map(item => (
          <Cell
            title="test"
            value={<Checkbox checked={check === item} />}
            key={item}
          />
        ))}

        <CheckboxGroup model={checks}>
          <CellGroup title="复选框组">
            {checkList.map(item => (
              <Cell title="test" value={<Checkbox id={item} />} key={item} />
            ))}
          </CellGroup>
        </CheckboxGroup>
      </div>
    );
  }
}
