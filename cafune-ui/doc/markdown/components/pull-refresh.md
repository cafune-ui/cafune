# PullRefresh - 下拉刷新

## 引入
```jsx
import { PullRefresh } from 'cafune';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义前缀 | string | `'caf-pullref'` | - | ❌ |
| className | 自定义类名 | string | - | - | ❌ |
| children | 自元素 | any | - | - | ❌ |
| disabled | 是否禁用 | boolean | - | - | ❌ |
| direction | 拉动方向 | string | - | `'up'`,`'down'` | ❌ |
| distance | 刷新距离 | number | - | - | ❌ |
| isRefreshing | 是否处于刷新状态 | boolean | - | - | ❌ |
| onRefresh | 刷新回调 | () => void | - | - | ❌ |
| indicator | 刷新指示器 | indicator-options | - | - | ❌ |


 ### indicator-options 说明
| 参数 | 说明 | 类型 | 备选项 | 是否必须 |
| --- | --- | --- | --- | --- |
| pulling | 下拉中指示器 | string / VNode / HTMLElement} | - | ❌ |
| loosing | 释放时指示器 | string / VNode / HTMLElement} | - | ❌ |
| loading | 加载中指示器 | string / VNode / HTMLElement} | - | ❌ |
| finish | 刷新结束指示器 | string / VNode / HTMLElement} | - | ❌ |
