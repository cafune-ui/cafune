# NavBar - 导航栏

## 引入
```jsx
import { NavBar } from 'components';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义前缀 | string | `'caf-navbar'` | - | ❌ |
| left | 左侧按钮信息，当为对象时将根据对象信息显示，如为`false` 时则不显示 | custom/bool | `{  icon: 'back'}` | - | ❌ |
| rights | 右侧按钮列表 | arrayOf/custom | `[]` | - | ❌ |
