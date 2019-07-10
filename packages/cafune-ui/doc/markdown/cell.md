# Cell - 单元格

## 引入
```jsx
import { Cell } from 'components';
```


## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-cell'` | - | ❌ |
| icon | 左侧图标 | string | - | - | ❌ |
| iconSize | 图标尺寸 | string | - | - | ❌ |
| title | 单元标题 | string | - | - | ✅  |
| label | 单元描述信息 | string | - | - | ❌ |
| value | 单元右侧内容 | string | - | - | ❌ |
| url | 单元链接，如果有的话将会出现右侧箭头并开启点击 | string | - | - | ❌ |
| rightIcon | 右侧图标 | string | - | - | ❌ |
| middle | 是否垂直居中 | bool | - | - | ❌ |
| swipeList | 右滑菜单 | arrayOf | `[]` | - | ❌ |


### CellGroup 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `"caf-cellgroup"` | - | ❌ |
| title | 分组标题 | string | - | - | ❌ |
| border | 是否显示边框 | bool | `true` | - | ❌ |
