# Toast - 消息提示

## 引入
```jsx
import { Toast } from 'cafune';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| content | 提示内容 | string | - | - | ✅  |
| uid | 唯一标识 | string | - | - | ❌ |
| duration | 提示时长(ms)，默认为2000ms | number | `2000` | - | ❌ |
| icon | 自定义图标 | string / signature | - | - | ❌ |
| type | toast 类型 | string | `'normal'` | `'normal'`,`'success'`,`'error'`,`'loading'` | ❌ |
| onClose | 消失时回调函数 | () => void | - | - | ❌ |
| multiple | 是否只显示一个toast，默认为false(`suceess` & `error` & `'loading'` 下默认为true)，将依次显示toast | boolean | `false` | - | ❌ |
