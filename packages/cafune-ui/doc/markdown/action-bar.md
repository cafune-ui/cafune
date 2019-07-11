# ActionBar - 动作栏

## 引入
```jsx
import { ActionBar } from 'components';
```
## 使用

```javascript
<ActionBar
  descContent="描述文字"
  btnContent="按钮文字"
  handleClick={ () => console.log('click') }
/>
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| descContent | 左侧描述内容 | any | - | - | ✅  |
| btnContent | 按钮内容 | any | - | - | ✅  |
| additionMsg | 附加信息 | any | - | - | ❌ |
| handleClick | action 触发事件 | func | `() => {}` | - | ❌ |
| disabled | 是否禁止按钮，默认为false | bool | `false` | - | ❌ |
