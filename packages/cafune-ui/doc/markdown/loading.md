# Loading - 加载

## 引入
```javascript
import { Loading } from 'components';
```
## 使用

```javascript
<Loading />
<Loading type="spinner" />
// ...
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| type | 加载图标类型 | enum | `'spinner'` | `'step'`,`'spin'`,`'ripple'` | ❌ |
| text | 加载提示文字 | string | - | - | ❌ |
| color | 自定义颜色 | string | - | - | ❌ |
| size | 自定义加载图标尺寸 | string | - | - | ❌ |
