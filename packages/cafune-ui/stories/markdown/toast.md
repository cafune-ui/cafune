# Toast - 消息提示

## 引入
```jsx
import { Toast } from 'components';
```
## 使用

- 不同类型提示

 ```js
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
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| content | 提示内容 | custom | - | - | ❌ |
| duration | 提示时长(ms)，默认为2000ms | custom | `2000` | - | ❌ |
| type | toast 类型 | custom | `'normal'` | - | ❌ |
| onClose | 消失时回调函数 | custom | - | - | ❌ |
| isOnly | 是否只显示一个toast，默认为false(`suceess` & `error` & `'loading'` 下默认为true)，将依次显示toast | custom | `false` | - | ❌ |
