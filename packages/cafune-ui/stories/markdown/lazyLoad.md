
## 引入
```javascript
import { Lazyload } from 'components';
```
## 使用
```jsx
<Lazyload imgClass="lazy">
  // ...
  <img src="/placeholder" data-original={originalpic} class="lazy" />
  // ...
</Lazyload>
```

注意：图片需要拥有与`imgClass` 相同的类名（默认为`lazyImg`，不需要加`.`符号，只允许`class` 选择器），同时需要有`data-original`属性

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| imgClass | 懒加载的图片类名 | string | `'lazyImg'` | --- | 否 |
    