# Steps - 步骤条

## 引入
```jsx
import { Steps } from 'cafune';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-steps'` | - | ❌ |
| step | 当前步骤，从0开始计算，可在`Step`中通过`status`覆盖 | number | `0` | - | ❌ |
| status | 当前步骤状态 | string | `'process'` | `'pend'`,`'process'`,`'finish'`,`'failed'` | ❌ |
| direction | 步骤条方向 | string | `'horizontal'` | `'vertical'`,`'horizontal'` | ❌ |
| isDecimalInd | 是否以下标(从1开始)显示图标 | boolean | - | - | ❌ |
| icons | 步骤图标（会被子`Step` 的`icon` 属性覆盖） | icons-options | - | - | ❌ |


 ### icons-options 说明
| 参数 | 类型 | 备选项 | 是否必须 |
| --- | --- | --- | --- |
| pend | string / HTMLElement / VNode | - | ❌ |
| process | string / HTMLElement / VNode | - | ❌ |
| finish | string / HTMLElement / VNode | - | ❌ |
| error | string / HTMLElement / VNode | - | ❌ |

### Step 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义前缀 | string | `'caf-step'` | - | ❌ |
| ind | 顺序 | number | - | - | ❌ |
| status | 指定步骤状态，默认根据父级`Steps` 的step 来决定状态 | string | `'pend'` | `'pend'`,`'process'`,`'finish'`,`'error'` | ❌ |
| title | 标题 | string / HTMLElement / VNode | - | - | ✅  |
| desc | 详情描述 | string / HTMLElement / VNode | - | - | ❌ |
| icons | 步骤图标 | icons-options | - | - | ❌ |


 ### icons-options 说明
| 参数 | 类型 | 备选项 | 是否必须 |
| --- | --- | --- | --- |
| pend | string / HTMLElement / VNode | - | ❌ |
| process | string / HTMLElement / VNode | - | ❌ |
| finish | string / HTMLElement / VNode | - | ❌ |
| error | string / HTMLElement / VNode | - | ❌ |
