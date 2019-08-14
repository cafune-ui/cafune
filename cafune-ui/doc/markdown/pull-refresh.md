# PullRefresh - 下拉刷新

## 引入
```jsx
import { PullRefresh } from 'components';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-pullref'` | - | ❌ |
| direction | 拉动方向 | string | - | `'up'`,`'down'` | ❌ |
| distance | 刷新距离 | number | - | - | ❌ |
| isRefreshing | 是否处于刷新状态 | bool | - | - | ❌ |
| onRefresh | 刷新回调 | func | - | - | ✅  |
| indicator | 刷新指示器 | `pulling: union ❌`,`loosing: union ❌`,`loading: union ❌`,`finish: union ❌` | - | - | ❌ |
