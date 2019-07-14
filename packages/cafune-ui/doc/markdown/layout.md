# Layout - 布局

## 引入
```jsx
import { Layout } from 'components';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-layout'` | - | ❌ |
| flexProps | flex 属性，一旦设置则使用flex 布局 | `direction: enum ❌`,`wrap: enum ❌`,`justify: enum ❌`,`align: enum ❌`,`alignContent: enum ❌` | - | - | ❌ |
| gutter | 列元素之间的间距 | `string`/`number` | - | - | ❌ |
| gridProps | 宫格属性 | `coloum: number ❌`,`border: bool ❌`,`square: bool ❌`,`center: bool ❌` | - | - | ❌ |

### Item 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-layout-item'` | - | ❌ |
| col | 列元素跨越宽度 | `string`/`number` | - | - | ❌ |
| offset | 偏移距离 | `string`/`number` | - | - | ❌ |
| tag | 自定义元素标签 | string | `'div'` | - | ❌ |
