# TabBar - 标签栏

## 引入
```jsx
import { TabBar } from 'cafune';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义前缀 | string | `'caf-tabbar'` | - | ❌ |
| className | 自定义类名 | string | - | - | ❌ |
| children | 子元素 | any | - | - | ❌ |
| type | 标签栏类型 | literal/literal/literal | - | - | ❌ |
| fixed | 是否使用 `fixed` 定位 | boolean | `true` | - | ❌ |
| activedId | 当前激活的id | string/number | - | - | ✅  |
| activedColor | 激活时文字颜色 | string | - | - | ❌ |
| inactivedColor | 未激活时文字颜色 | string | - | - | ❌ |
| onChange | 切换时回调 | (activedId:string | number) => void | - | - | ❌ |

### TabBarItem 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-tabbar__item'` | - | ❌ |
| text | 展示文字 | string | - | - | ✅  |
| id | tab唯一标示 | number/string | - | - | ✅  |
| icons | 图标集 | IItemIcon | - | - | ❌ |
| disabled | 是否禁用 | boolean | `false` | - | ❌ |
