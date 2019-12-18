# SearchBar - 搜索栏

## 引入
```jsx
import { SearchBar } from 'cafune';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-search'` | - | ❌ |
| value | 输入内容 | string | - | - | ❌ |
| placeholder | 占位文字 | string | - | - | ❌ |
| maxLength | 最多可允许输入字符个数 | number | - | - | ❌ |
| onConfirm | 确定搜索时回调，支持`enter` 触发 | (value?) => void | - | - | ❌ |
| onCancel | 取消操作时回调 | (value?) => void | - | - | ❌ |
| onChange | 内容变更时回调 | (value?) => void | - | - | ❌ |
| leftIcon | 左侧按钮图标（参考 `Icon` 组件） | string | `'search'` | - | ❌ |
| action | 右侧功能按钮 | action-options | - | - | ❌ |


 ### action-options 说明
| 参数 | 说明 | 类型 | 备选项 | 是否必须 |
| --- | --- | --- | --- | --- |
| type | 按钮类型 | string} | 'confirm','cancel','custom' | ❌ |
| text | 按钮文字 | string} | - | ❌ |
| keepShow | 是否一直显示 | boolean} | - | ❌ |
| onClick | 功能按钮点击事件，默认情况下，点击时，`actionType`为`confirm`时会额外触发`onConfirm`事件，为`cancel`时会额外触发`onCancel`事件 | () => void} | - | ❌ |
