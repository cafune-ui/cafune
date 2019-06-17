## 引入
```javascript
import { Toast } from 'components';
```

## API
- 不同类型提示

  ```javascript
  Toast.show({ content: 'show' });
  Toast.success({ content: 'success' });
  Toast.error({ content: 'error' });
  Toast.loading({ content: 'loading' });
  ```
- 自定义时长提示

  ```javascript
  Toast.show({ content: '3秒之后消失', duration: 3000 })
  ```
- 带回调函数提示

  ```javascript
  Toast.show({ content: '弹出消失alert', onClose() { alert('消失！') } }) 
  ```

- 自定义取消Toast

  当 duration 为0时，toast 需要调用`hide` 方法才能让toast 消失，loading 方法默认duration 为0

  ```javascript
  const toast = Toast.loading({ content: '弹出消失alert', onClose() { alert('消失！') } });
  Toast.hide(toast);
  ```

## 配置项
| 参数 | 说明 | 类型 | 默认值 | 备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| content | 消息内容 | string | - | - | 是 |
| duration | 显示时长(单位：`ms`) | number | 2000 | - | 否 |
| onClose | 消失时回调函数  | () => any | - | - | 否 |
| status | 提示类型  | string | 'normal | `'success'`, `'error'`, `'loading'` | 否 |
| isOnly | 是否唯一显示  | boolean | false(`suceess` & `error` & `'loading'` 下默认为true) | - | 否 |