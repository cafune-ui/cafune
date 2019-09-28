# Layout - 布局

## 引入
```jsx
import { Layout } from 'cafune';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-layout'` | - | ❌ |
| direction | 项目定位方向 | literal/literal/literal/literal | - | - | ❌ |
| wrap | 子元素换行方式 | literal/literal/literal | - | - | ❌ |
| justify | 子元素在主轴上的对齐方式（对应justify-content） | literal/literal/literal/literal/literal | - | - | ❌ |
| align | 子元素在交叉轴上的对齐方式（对应align-items） | literal/literal/literal/literal/literal | - | - | ❌ |
| alignContent | 有多根轴线时的对齐方式（对应align-content） | literal/literal/literal/literal/literal/literal | - | - | ❌ |
| gutter | 列元素之间的间距 | string/number | - | - | ❌ |

### LayoutItem 配置项
