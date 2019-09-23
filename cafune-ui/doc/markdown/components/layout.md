# Layout - 布局

## 引入
```jsx
import { Layout } from 'components';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-layout'` | - | ❌ |
| direction | 项目定位方向 | string | - | `'row'`,`'row-reverse'`,`'column'`,`'column-reverse'` | ❌ |
| wrap | 子元素换行方式 | string | - | `'nowrap'`,`'wrap'`,`'wrap-reverse'` | ❌ |
| justify | 子元素在主轴上的对齐方式（对应justify-content） | string | - | `'start'`,`'end'`,`'center'`,`'between'`,`'around'` | ❌ |
| align | 子元素在交叉轴上的对齐方式（对应align-items） | string | - | `'start'`,`'center'`,`'end'`,`'baseline'`,`'stretch'` | ❌ |
| alignContent | 有多根轴线时的对齐方式（对应align-content） | string | - | `'start'`,`'end'`,`'center'`,`'between'`,`'around'`,`'stretch'` | ❌ |
| gutter | 列元素之间的间距 | string/number | - | - | ❌ |

### LayoutItem 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-layout-item'` | - | ❌ |
| col | 列元素跨越宽度 | string/number | - | - | ❌ |
| offset | 偏移距离 | string/number | - | - | ❌ |
| tag | 自定义元素标签 | string | `'div'` | - | ❌ |
