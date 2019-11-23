# CafToast - 

## 引入
```jsx
import { CafToast } from 'cafune';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义前缀 | string | - | - | ❌ |
| content | 提示内容 | string / HTMLElement / VNode | - | - | ✅  |
| duration | 提示时长(ms)，默认为2000ms | number | - | - | ❌ |
| onClose | 消失时回调函数 | unknown / undefined / null | - | - | ❌ |
| type | toast 类型 | string | - | `'normal'`,`'success'`,`'error'`,`'loading'` | ❌ |
| icon | 自定义图标 | string / signature | - | - | ❌ |
