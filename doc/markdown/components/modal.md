# Modal - 模态框

## 引入
```jsx
import { Modal } from 'cafune';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义前缀 | string | `'caf-modal'` | - | ❌ |
| title | 标题 | string | - | - | ❌ |
| message | 消息内容，如有children 优先children | string | - | - | ❌ |
| align | 文本对齐方式 | string | `'center'` | `'center'`,`'left'`,`'right'` | ❌ |
| showCancel | 是否显示取消按钮 | boolean | `false` | - | ❌ |
| mask | 是否显示蒙层 | boolean | `true` | - | ❌ |
| confirmContent | 确认按钮内容 | string | `'确定'` | - | ❌ |
| cancelContent | 取消按钮内容 | string | `'取消'` | - | ❌ |
| beforeClose | 关闭之前的回调 | (action: string, done: (state?: boolean) => void) => void | - | - | ❌ |
| onConfirm | 确认事件回调 | () => void | - | - | ❌ |
| onCancel | 取消事件回调 | () => void | - | - | ❌ |
| visible | 是否显示模态框 | boolean | `true` | - | ❌ |
