# Tabs - 标签卡

## 引入
```jsx
import { Tabs } from 'components';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | - | - | ❌ |
| activeId | 当前激活id | `string`/`number` | - | - | ✅  |
| type | 组件类型 | string | `'slider'` | `'slider'`,`'round'`,`'card'` | ❌ |
| onTabChange | 切换tab时回调 | func | - | - | ❌ |
| navClass | 自定义标签栏类名 | string | - | - | ❌ |
| maxCount | 最大可容纳标签数 | number | `5` | - | ❌ |

### Nav 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-tabs-nav'` | - | ❌ |
| tabsData | 当前激活id | `id: union ✅ `,`label: string ✅ `,`actived: bool ✅ `,`className: string ✅ `,`visable: bool ✅ ` | - | - | ✅  |
| type | 组件类型 | string | `'slider'` | `'slider'`,`'round'`,`'card'` | ❌ |
| onChange | 切换tab时回调 | func | - | - | ❌ |
| navClass | 自定义标签栏类名 | string | - | - | ❌ |
| maxCount | 最大可容纳标签数 | number | `5` | - | ❌ |

### TabPanel 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | - | - | ❌ |
| id | 面板的id | `string`/`number` | - | - | ✅  |
| label | 标签名字 | string | - | - | ❌ |
| className | 自定义类名 | string | - | - | ❌ |
| visable | 是否显示 | bool | `true` | - | ❌ |
