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
        text: '自定义颜色',
        checkedColor: '#369'
      },
      {
        value: 'holla',
        text: '开启禁用',
        disabled: true
      },
      {
        value: 'bonjour',
        text: '自定义激活图标',
        icons: {
          actived: 'more'
        }
      },
      {
        value: 'hello',
        text: '自定义激活及未激活图标',
        icons: {
          inactive: 'https://image.flaticon.com/icons/png/128/2026/2026450.png',
          actived: 'https://image.flaticon.com/icons/png/128/2026/2026462.png'
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
              {item.text}
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
                {item.text}
              </Checkbox>
            }
            key={`s-c-${item.id}`}
          />
        ))}

        <CellGroup title="复选框组">
          <CheckboxGroup model={checks} handleChange={val => console.log(val)}>
            {checkList.map(item => (
              <Cell
                title="test"
                value={<Checkbox {...item}>{item.text}</Checkbox>}
                key={`g-${item.value}`}
              />
            ))}
          </CheckboxGroup>
        </CellGroup>
        <CellGroup title="复选框组（最大可选为2）">
          <CheckboxGroup
            model={checks}
            handleChange={val => console.log(val)}
            maxSelect={2}
          >
            {checkList.map(item => (
              <Cell
                title="test"
                value={<Checkbox {...item}>{item.text}</Checkbox>}
                key={`g-${item.value}`}
              />
            ))}
          </CheckboxGroup>
        </CellGroup>
      </div>
    );
  }
}
