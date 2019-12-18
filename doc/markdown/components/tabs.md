# Tabs - 标签卡

## 引入
```jsx
import { Tabs } from 'cafune';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义前缀 | string | `'caf-tabs'` | - | ❌ |
| className | 自定义类名 | string | - | - | ❌ |
| activeId | 当前激活id | string / number | - | - | ❌ |
| type | 组件类型 | string | `'slider'` | `'slider'`,`'contrast'`,`'card'` | ❌ |
| onChange | 切换tab时回调 | (key) => void | - | - | ❌ |
| navClass | 自定义标签栏类名 | string | - | - | ❌ |
| maxCount | 最大可容纳标签数 | number | `5` | - | ❌ |
| tabs | 自定义tab 列表 | Array / any | - | - | ❌ |

### Nav 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义前缀 | string | `'caf-tabs__nav'` | - | ❌ |
| className | 自定义类名 | string | - | - | ❌ |
| tabsData | 当前激活id | tabsItem[] | - | - | ❌ |
| type | 组件类型 | string | `'slider'` | `'slider'`,`'contrast'`,`'card'` | ❌ |
| onChange | 切换tab时回调 | (id) => void | - | - | ❌ |
| navClass | 自定义标签栏类名 | string | - | - | ❌ |
| maxCount | 最大可容纳标签数 | number | `5` | - | ❌ |

### TabPanel 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义前缀 | string | `'caf-tabs__panel'` | - | ❌ |
| label | 标签名字 | string | - | - | ❌ |
| className | 自定义类名 | string | - | - | ❌ |
| visable | 是否显示 | boolean | `true` | - | ❌ |
| actived | 是否激活 | boolean | - | - | ❌ |
