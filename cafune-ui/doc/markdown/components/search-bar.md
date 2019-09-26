# SearchBar - 搜索栏

## 引入
```jsx
import { SearchBar } from 'components';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-search'` | - | ❌ |
| placeholder | 占位文字 | string | - | - | ❌ |
| maxLength | 最多可允许输入字符个数 | number | - | - | ❌ |
| onConfirm | 确定搜索时回调，支持`enter` 触发 | (value?) => void | - | - | ❌ |
| onCancel | 取消操作时回调 | (value?) => void | - | - | ❌ |
| onChange | 内容变更时回调 | (value?) => void | - | - | ❌ |
| leftIcon | 左侧按钮图标（参考 `Icon` 组件） | string | `'search'` | - | ❌ |
| action | 右侧功能按钮 | IAction | - | - | ❌ |
