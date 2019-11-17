# Pagination - 分页

## 引入
```jsx
import { Pagination } from 'cafune';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-page'` | - | ❌ |
| mode | 分页形态，`button` 时为带按钮状态，`number` 时只显示数字状态， `pointer` 时全为小黑点，适用于总页数不大于 10 的情况 | string | `'button'` | `'button'`,`'number'`,`'pointer'` | ❌ |
| simple | 是否隐藏数字，仅在`mode` 为 `button`时有效 | boolean | `false` | - | ❌ |
| current | 当前页码 | number | - | - | ✅  |
| total | 总页数 | number | - | - | ✅  |
| step | 步进数 | number | `1` | - | ❌ |
| onChange | 点击切换时回调 | (pageNum: number) => void | - | - | ❌ |
| className | 自定义类名 | string | - | - | ❌ |
| btnText | 按钮文字 | btnText-options | - | - | ❌ |
| btnIcon | 按钮图标 | btnIcon-options | - | - | ❌ |


 ### btnText-options 说明
| 参数 | 说明 | 类型 | 备选项 | 是否必须 |
| --- | --- | --- | --- | --- |
| prev | - | string} | - | ❌ |
| next | - | string} | - | ❌ |


 ### btnIcon-options 说明
| 参数 | 说明 | 类型 | 备选项 | 是否必须 |
| --- | --- | --- | --- | --- |
| prev | - | [object Object] / [object Object]} | - | ❌ |
| next | - | [object Object] / [object Object]} | - | ❌ |
