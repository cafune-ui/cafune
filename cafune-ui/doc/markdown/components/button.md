# Button - 按钮

## 引入
```jsx
import { Button } from 'components';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-btn'` | - | ❌ |
| type | 按钮类型 | literal/literal/literal | `'default'` | - | ❌ |
| ghost | 是否为幽灵按钮 | boolean | `false` | - | ❌ |
| size | 按钮尺寸 | literal/literal/literal/literal | `'normal'` | - | ❌ |
| icon | 按钮图标（加载状态时会被加载图标覆盖） | IButtonIcon | - | - | ❌ |
| disabled | 是否禁用 | boolean | `false` | - | ❌ |
| loading | 是否处于加载状态 | boolean | `false` | - | ❌ |
| loadingInfo | 加载图标信息 | ILoading | - | - | ✅  |
| gradient | 背景渐变 | IGradient | - | - | ✅  |
| radius | 圆角，若为`true`，则为全圆角矩形按钮，若为`false`，则为直角矩形，若为`String`类型。则为圆角尺寸，不指定时则使用默认圆角 | boolean/string | - | - | ❌ |
| block | 是否为块级元素 | boolean | `false` | - | ❌ |
| onClick | 点击事件 | (event: Event) => void | - | - | ❌ |
