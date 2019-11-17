# Calendar - 日历

## 引入
```jsx
import { Calendar } from 'cafune';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-calendar'` | - | ❌ |
| defaultSelect | 初始选中时间。字符串类型时需以'年/月/日'的方式传入，number 类型是为毫秒数，默认为今天 | defaultSelect-options | - | - | ❌ |
| maxSelect | 最多可选数目 | number | `0` | - | ❌ |
| minSelect | 最少可选数目 | number | `0` | - | ❌ |
| onDateSelect | 日期改变回调函数，`maxSelect`大于1时回调为数组 | (curDate: IDataRange) => void | - | - | ❌ |
| formatter | 日期格式化函数，`type` 为`year`, `month`, `week` | formatter-options | - | - | ❌ |


 ### defaultSelect-options 说明
| 参数 | 说明 | 类型 | 备选项 | 是否必须 |
| --- | --- | --- | --- | --- |
| start | - | string / number / Date / Dayjs} | - | ✅  |
| end | - | string / number / Date / Dayjs} | - | ❌ |


 ### formatter-options 说明
| 参数 | 说明 | 类型 | 备选项 | 是否必须 |
| --- | --- | --- | --- | --- |
| year | - | (value: number) => string &#124; number} | - | ❌ |
| month | - | (value: number) => string &#124; number} | - | ❌ |
| title | - | (year: number, month: number) => string &#124; VNode &#124; HTMLElement} | - | ❌ |
| week | - | (value: number) => string &#124; number} | - | ❌ |
