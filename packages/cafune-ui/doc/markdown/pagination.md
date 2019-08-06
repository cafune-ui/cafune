# Pagination - 分页

## 引入
```jsx
import { Pagination } from 'components';
```
## 使用

```javascript
<Pagination pn={pn} pages={pages} onChange={this.onPageChange} />
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | - | - | ❌ |
| pn | 当前页码 | number | - | - | ✅  |
| pages | 总页数 | number | - | - | ✅  |
| onChange | 点击切换时回调 | func | - | - | ❌ |
