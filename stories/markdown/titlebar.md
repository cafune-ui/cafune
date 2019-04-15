## 引入
```javascript
import { TitleBar } from 'components';
```
## 使用

```jsx
<TitleBar
  text="标题文字"
/>
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| text | 标题文字 | string | - | - | 是 |
| size | 尺寸 | string | `'normal'` | `'large'`, `'small'` | 否 |
| border | 标题边框，可指定一或多个边 | array | [] |  [`'top'`, `'left'`, `'right'`, `'bottom'`] | 否 |