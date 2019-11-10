# Checkbox - 复选框

## 引入
```jsx
import { Checkbox } from 'cafune';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-checkbox'` | - | ❌ |
| icons | 自定义图标 | icons-options | - | - | ❌ |
| value | 复选框值 | string / number | - | - | ✅  |
| id | 复选框 id | string | - | - | ❌ |
| checked | 默认是否选中 | boolean | `false` | - | ❌ |
| checkedColor | 选中状态颜色 | string | - | - | ❌ |
| disabled | 是否处于禁用状态 | boolean | `false` | - | ❌ |
| handleChange | 值变化时回调事件 | (val: any) => void | - | - | ❌ |


 ### icons-options 说明
| 参数 | 类型 | 备选项 | 是否必须 |
| --- | --- | --- | --- |
| actived | string | - | ❌ |
| inactive | string | - | ❌ |

### CheckboxGroup 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-checkbox-group'` | - | ❌ |
| model | 默认选中项目的id | Array / Array | - | - | ❌ |
| disabled | 是否禁用所有复选框 | boolean | `false` | - | ❌ |
| maxSelect | 最多可选数 | number | `0` | - | ❌ |
| handleChange | 复选框组变化回调，参数为所有选中的数据 | (selected: any[]) => void | - | - | ❌ |
