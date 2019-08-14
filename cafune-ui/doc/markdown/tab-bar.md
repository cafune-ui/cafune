# TabBar - 标签栏

## 引入
```jsx
import { TabBar } from 'components';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-tabbar'` | - | ❌ |
| fixed | 是否使用 `fixed` 定位 | bool | `true` | - | ❌ |
| activedId | 当前激活的id | `string`/`number` | - | - | ✅  |
| activedColor | 激活时文字颜色 | string | `'#3f77f6'` | - | ❌ |
| onChange | 切换时回调 | func | - | - | ❌ |

### TabBarItem 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-tabbar-item'` | - | ❌ |
| text | 展示文字 | string | - | - | ✅  |
| id | tab唯一标示 | `number`/`string` | - | - | ✅  |
| icons | 图标集 | `actived: string ❌`,`normal: string ❌` | - | - | ❌ |
| disabled | 是否禁用 | bool | `false` | - | ❌ |
