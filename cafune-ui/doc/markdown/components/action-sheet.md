# ActionSheet - 动作面板

## 引入
```jsx
import { ActionSheet } from 'cafune';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-actsheet'` | - | ❌ |
| isShow | 面板开启状态 | boolean | `false` | - | ❌ |
| showMask | 是否显示遮罩 | boolean | `true` | - | ❌ |
| closeOnClickMask | 是否在点击遮罩后关闭 | boolean | `true` | - | ❌ |
| horizon | 横向展示的数据 | horizon-options | - | - | ❌ |
| vertialList | 纵向展示的数据 | iOption[] | - | - | ❌ |
| title | 标题栏 | string / VNode / Component / HTMLElement | - | - | ❌ |
| cancelText | 取消按钮文字 | string | `'取消'` | - | ❌ |
| confirmText | 确认按钮文字 | string | `'确定'` | - | ❌ |
| onClose | 关闭时触发事件 | Function | - | - | ❌ |
| onConfirm | 确认时触发事件 | Function | - | - | ❌ |
| onOpen | 开启时触发事件 | Function | - | - | ❌ |
| showCancel | 是否显示取消按钮 | boolean | `true` | - | ❌ |
| showConfirm | 是否显示确认按钮 | boolean | - | - | ❌ |


 ### horizon-options 说明
| 参数 | 说明 | 类型 | 备选项 | 是否必须 |
| --- | --- | --- | --- | --- |
| list | - | iOption[]} | - | ✅  |
| wrap | - | boolean} | - | ✅  |
