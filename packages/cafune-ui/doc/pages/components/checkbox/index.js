import { Cell, Checkbox } from 'cafune';
const { CellGroup } = Cell;
const { CheckboxGroup } = Checkbox;

import { Component } from 'preact';
export default class CheckboxComp extends Component {
  state = {
    check: 'hi',
    checks: ['hi', 'hello'],
    checkList: [
      {
        value: 'hi',
        checkedColor: '#369'
      },
      {
        value: 'holla',
        disabled: true
      },
      {
        value: 'bonjour',
        icons: {
          actived: 'more'
        }
      },
      {
        value: 'hello',
        icons: {
          inactive: 'https://image.flaticon.com/icons/png/128/2026/2026450.png'
        }
      }
    ]
  };
  render({}, { check, checks, checkList }) {
    return (
      <div>
        <p class="caf-demo-title">单独使用</p>
        <div class="caf-demo-block">
          {checkList.map(item => (
            <Checkbox
              checked={check === item.value}
              {...item}
              handleChange={val => {
                console.log(val);
              }}
              key={`s-${item.value}`}
            >
              {item.value}
            </Checkbox>
          ))}
        </div>
        <p class="caf-demo-title">与Cell 组件一起使用</p>
        {checkList.map(item => (
          <Cell
            title="test"
            value={
              <Checkbox
                checked={check === item.value}
                {...item}
                handleChange={val => {
                  console.log(val);
                }}
              >
                {item.value}
              </Checkbox>
            }
            key={`s-c-${item.id}`}
          />
        ))}

        <CheckboxGroup model={checks} onChange={val => console.log(val)}>
          <CellGroup title="复选框组">
            {checkList.map(item => (
              <Cell
                title="test"
                value={
                  <Checkbox checked={check === item.value} {...item}>
                    {item.value}
                  </Checkbox>
                }
                key={`g-${item.value}`}
              />
            ))}
          </CellGroup>
        </CheckboxGroup>
      </div>
    );
  }
}
