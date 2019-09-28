# Grid - 宫格

## 引入
```jsx
import { Grid } from 'cafune';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义前缀 | string | `'caf-grid'` | - | ❌ |
| column | 列数 | string | `4` | - | ❌ |
| square | 是否固定为正方形 | boolean | `true` | - | ❌ |
| border | 是否显示边框 | boolean | `true` | - | ❌ |
| center | 是否居中显示 | boolean | `true` | - | ❌ |
| gutter | 单元格间距 | string/number | `0` | - | ❌ |

### GridItem 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义前缀 | string | `'caf-grid-item'` | - | ❌ |
| icon | 列数 | string | - | - | ❌ |
| text | 是否固定为正方形 | string | - | - | ❌ |
