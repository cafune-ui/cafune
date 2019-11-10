# Radio - 单选框组

## 引入
```jsx
import { Radio } from 'cafune';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义前缀 | string | - | - | ❌ |
| labelPosition | 单选框文本位置 | string | `'caf-radio'` | `'left'`,`'right'` | ❌ |
| checkedColor | 选中颜色 | string | - | - | ❌ |
| onChange | 单选框组变化回调 | (val: string | number) => void | - | - | ❌ |
| value | 是否选中状态 | string / number | - | - | ❌ |

### RadioItem 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义前缀 | string | `'caf-radio-item'` | - | ❌ |
| checkedColor | 选中颜色 | string | - | - | ❌ |
| labelPosition | 单选框文本位置 | string | - | `'left'`,`'right'` | ❌ |
| value | 单选值 | string | - | - | ❌ |
| checked | 是否选中状态 | boolean | - | - | ❌ |
| disabled | 是否禁用状态 | boolean | - | - | ❌ |
| onChange | 单选框组变化回调 | (val: string | number) => void | - | - | ❌ |
