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
| onConfirm | 确定搜索时回调，支持`enter` 触发 | func | - | - | ❌ |
| onCancel | 取消操作时回调 | func | - | - | ❌ |
| onChange | 内容变更时回调 | func | - | - | ❌ |
| align | 输入款对齐方式 | string | `'left'` | `'left'`,`'right'` | ❌ |
| leftIcon | 左侧按钮图标（参考 `Icon` 组件） | string | - | - | ❌ |
| addition | 搜索框右侧附加功能 | `icon: string ❌`,`onClick: func ❌` | - | - | ❌ |
| action | 右侧功能按钮 | `type: enum ❌`,`text: string ❌`,`onClick: func ❌` | - | - | ❌ |
