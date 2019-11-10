# Button - 按钮

## 引入
```jsx
import { Button } from 'cafune';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-btn'` | - | ❌ |
| type | 按钮类型 | string | `'default'` | `'default'`,`'primary'`,`'warning'`,`'cancel'` | ❌ |
| ghost | 是否为幽灵按钮 | boolean | `false` | - | ❌ |
| size | 按钮尺寸 | string | `'normal'` | `'large'`,`'normal'`,`'small'`,`'tiny'` | ❌ |
| icon | 按钮图标（加载状态时会被加载图标覆盖） | icon-options | - | - | ❌ |
| disabled | 是否禁用 | boolean | `false` | - | ❌ |
| loading | 是否处于加载状态 | boolean | `false` | - | ❌ |
| loadingInfo | 加载图标信息 | loadingInfo-options | - | - | ❌ |
| gradient | 背景渐变 | gradient-options | - | - | ❌ |
| radius | 圆角，若为`true`，则为全圆角矩形按钮，若为`false`，则为直角矩形，若为`String`类型。则为圆角尺寸 | boolean / string | `true` | - | ❌ |
| block | 是否为块级元素 | boolean | `false` | - | ❌ |
| shadow | 是否拥有阴影 | boolean | `true` | - | ❌ |
| bgColor | 背景颜色 | string | - | - | ❌ |
| onClick | 点击事件 | (event: Event) => void | - | - | ❌ |


 ### icon-options 说明
| 参数 | 说明 | 类型 | 备选项 | 是否必须 |
| --- | --- | --- | --- | --- |
| type | 按钮图标（加载状态时会被加载图标覆盖） | string / VNode / HTMLElement | - | ❌ |
| positon | - | string / object | - | ❌ |


 ### loadingInfo-options 说明
| 参数 | 说明 | 类型 | 备选项 | 是否必须 |
| --- | --- | --- | --- | --- |
| type | 加载图标类型 | string | 'step','spin','ripple' | ❌ |
| color | 自定义颜色 | string | - | ❌ |
| size | 自定义加载图标尺寸 | string | - | ❌ |


 ### gradient-options 说明
| 参数 | 说明 | 类型 | 备选项 | 是否必须 |
| --- | --- | --- | --- | --- |
| angle | - | number | - | ❌ |
| from | 起始颜色 | string | - | ❌ |
| to | 终止颜色 | string | - | ❌ |
| color | 文本颜色 | string | - | ❌ |
| shadow | 投影 | string | - | ❌ |
