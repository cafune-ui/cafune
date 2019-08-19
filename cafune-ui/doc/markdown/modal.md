# Modal - 模态框

## 引入
```jsx
import { Modal } from 'components';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| title | 标题 | string | - | - | ❌ |
| message | 消息内容，如有children 优先children | string/node | - | - | ❌ |
| align | 文本对齐方式 | string | `'center'` | `'center'`,`'left'`,`'right'` | ❌ |
| showCancel | 是否显示取消按钮 | bool | `false` | - | ❌ |
| mask | 是否显示蒙层 | bool | `true` | - | ❌ |
| confirmContent | 确认按钮内容 | string | `'确定'` | - | ❌ |
| cancelContent | 取消按钮内容 | string | `'取消'` | - | ❌ |
| onConfirm | 确认事件回调 | func | - | - | ❌ |
| onCancel | 取消事件回调 | func | - | - | ❌ |
