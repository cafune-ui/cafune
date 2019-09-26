# PullRefresh - 下拉刷新

## 引入
```jsx
import { PullRefresh } from 'components';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义前缀 | string | `'caf-pullref'` | - | ❌ |
| className | 自定义类名 | string | - | - | ❌ |
| children | 自元素 | any | - | - | ❌ |
| disabled | 是否禁用 | boolean | - | - | ❌ |
| direction | 拉动方向 | literal/literal | - | - | ❌ |
| distance | 刷新距离 | number | - | - | ❌ |
| isRefreshing | 是否处于刷新状态 | boolean | - | - | ❌ |
| onRefresh | 刷新回调 | () => void | - | - | ❌ |
| indicator | 刷新指示器 | IIndicator | - | - | ❌ |
