# Stepper - 步进器

## 引入
```jsx
import { Stepper } from 'cafune';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-stepper'` | - | ❌ |
| initVal | 初始值 | number | - | - | ❌ |
| min | 最小值 | number | `0` | - | ❌ |
| max | 最大值 | number | `Infinity` | - | ❌ |
| step | 步进数 | number | `1` | - | ❌ |
| showNum | 是否显示前后数字，更直观预知 | boolean | `false` | - | ❌ |
| disabled | 是否处于禁用状态 | boolean | `false` | - | ❌ |
| integerOnly | 是否限定为整数 | boolean | `false` | - | ❌ |
| readOnly | 数值是否只读 | boolean | `false` | - | ❌ |
| onChange | 数值改变时回调 | (result) => void | - | - | ❌ |
