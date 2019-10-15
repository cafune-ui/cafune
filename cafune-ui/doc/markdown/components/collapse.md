# Collapse - 折叠面板

## 引入
```jsx
import { Collapse } from 'cafune';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| accordion | 是否开启手风琴效果 | boolean | `false` | - | ❌ |
| prefix | 自定义前缀 | string | `'caf-collapse'` | - | ❌ |
| actives | 激活的列表 | string/Array | - | - | ❌ |
| className | 自定义类名 | string | - | - | ❌ |

### CollapseItem 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| title | 标题 | string/VNode | - | - | ✅  |
| id | 唯一标识 | string | - | - | ❌ |
| prefix | 自定义前缀 | string | `'caf-collapse'` | - | ❌ |
| actived | 是否处于激活状态 | boolean | - | - | ❌ |
| disabled | 是否禁用此单元 | boolean | `false` | - | ❌ |
| icon | 右侧按钮 | string | `'arrow_right'` | - | ❌ |
| onToggle | 切换回调 | (id: any) => void | - | - | ❌ |
