# Modal - 渲染模态框到容器中

## 引入
```javascript
import { Modal } from 'components';
```
## 使用

- 普通弹框

 ```javascript
 Modal.alert({
   title: 'this is a title',
   message: 'this is msg content'
 })
 ```
- 带取消按钮的弹框

 ```javascript
 Modal.confirm({
   title: 'this is a title',
  message: 'this is msg content'
 })
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| title | 标题 | string | - | - | ❌ |
| message | 消息内容，如有children 优先children | union | - | - | ❌ |
| align | 文本对齐方式 | enum | `'center'` | `'center'`,`'left'`,`'right'` | ❌ |
| showCancel | 是否显示取消按钮 | bool | `false` | - | ❌ |
| mask | 是否显示蒙层 | bool | `true` | - | ❌ |
| confirmContent | 确认按钮内容 | string | `'确定'` | - | ❌ |
| cancelContent | 取消按钮内容 | string | `'取消'` | - | ❌ |
| onConfirm | 确认事件回调 | func | - | - | ❌ |
| onCancel | 取消事件回调 | func | - | - | ❌ |