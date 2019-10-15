# Skeleton - 骨架屏

## 引入
```jsx
import { Skeleton } from 'cafune';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| speed | 动画速度 | number | `2` | - | ❌ |
| width | 骨架屏宽度 | string/number | `'100%'` | - | ❌ |
| height | 骨架屏高度 | string/number | `'9.28rem'` | - | ❌ |
| remRate | 骨架屏换算倍率，如基准像素为14则传入14 | number | `0` | - | ❌ |
| primaryColor | 背景颜色 | string | `'#f5f5f5'` | - | ❌ |
| secondaryColor | 渐变动画颜色 | string | `'#eaeaea'` | - | ❌ |

### Circle 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| x | 元素横坐标（计算时以圆心为原点） | string/number | - | - | ❌ |
| y | 元素纵坐标（计算时以圆心为原点） | string/number | - | - | ❌ |
| radius | 元素半径 | string/number | - | - | ❌ |

### Rect 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| x | 元素横坐标 | string/number | - | - | ❌ |
| y | 元素纵坐标 | string/number | - | - | ❌ |
| radius | 元素半径 | string/number | - | - | ❌ |
| width | 元素宽度 | string/number | - | - | ❌ |
| height | 元素高度 | string/number | - | - | ❌ |
