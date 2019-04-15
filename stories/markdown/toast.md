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
  Toast.show({ content: '弹出消失alert', callback() { alert('消失！') } }) 
  ```

## 配置项
| 参数 | 说明 | 类型 | 默认值 | 备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| content | 消息内容 | string | - | - | 是 |
| duration | 显示时长(单位：`ms`) | number | 2000 | - | 否 |
| callback | 消失时回调函数  | () => any | - | - | 否 |
| status | 提示类型  | string | 'normal | `'success'`, `'error'`, `'loading'` | 否 |
| isOnly | 是否唯一显示  | boolean | false(`suceess` & `error` & `'loading'` 下默认为true) | - | 否 |