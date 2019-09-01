# Checkbox - 复选框

## 引入
```jsx
import { Checkbox } from 'components';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-checkbox'` | - | ❌ |
| icons | 自定义图标 | <a class="caf-markdown-hover" data-desc="{ actived: string ❌,inactive: string ❌ }">custom</a> | - | - | ❌ |
| value | 复选框值 | string/number | - | - | ✅  |
| id | 复选框 id | string | - | - | ❌ |
| checked | 默认是否选中 | bool | `false` | - | ❌ |
| checkedColor | 选中状态颜色 | string | - | - | ❌ |
| disabled | 是否处于禁用状态 | bool | `false` | - | ❌ |
| handleChange | 值变化时回调事件 | func | - | - | ❌ |

### CheckboxGroup 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-checkbox-group'` | - | ❌ |
| model | 默认选中项目的id | arrayOf | - | - | ❌ |
| disabled | 是否禁用所有复选框 | bool | `false` | - | ❌ |
| maxSelect | 最多可选数 | number | `0` | - | ❌ |
| handleChange | 复选框组变化回调，参数为所有选中的数据 | func | - | - | ❌ |
