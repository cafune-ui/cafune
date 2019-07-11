# Lazyload - 懒加载包裹组件

## 引入
```jsx
import { Lazyload } from 'components';
```
## 使用

```javascript
<Lazyload imgClass="lazy">
// ...
<img src="/placeholder" data-src={originalpic} className="lazy" />
// ...
</Lazyload>
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| imgClass | 懒加载图片类名 | string | `'lazyImg'` | - | ❌ |
