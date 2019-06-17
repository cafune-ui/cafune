## 引入
```javascript
import { Modal } from 'components';
```

## API

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
| 参数 | 说明 | 类型 | 默认值 | 备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| title | 标题 | string | - | - | 否 |
| message | 消息内容（支持使用html） | string / () => HTMLElement | - | - | 是 |
| align | 内容对齐方式  | string | `'center'` | `'left'`, `'right'` | 否 |
| showCancel | 是否显示取消按钮 | boolean | false（使用`confirm`时为`true`） | - | 否 |
| confirmContent | 确认按钮内容 | string | 确定 | - | 否 |
| cancelContent | 取消按钮内容 | string | 取消 | - | 否 |
| onConfirm | 确认事件回调 | function | - | - | 否 |
| onCancel | 取消事件回调 | function | - | - | 否 |