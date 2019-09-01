# Swiper - 轮播

## 引入
```jsx
import { Swiper } from 'components';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | - | - | ❌ |
| autoplay | 是否自动切换 | bool | `true` | - | ❌ |
| intervel | 切换间隔事件（毫秒） | number | `3000` | - | ❌ |
| initialIndex | 初始index | number | `0` | - | ❌ |
| showIndicators | 是否显示指示器 | bool | `true` | - | ❌ |
| onChange | 切换时触发事件 | func | - | - | ❌ |
| customIndicator | 自定义指示器 | node | - | - | ❌ |

### swiperItem 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-swiper-container'` | - | ❌ |
| width | 单元宽度 | string | - | - | ❌ |
