# ActionSheet - 动作面板

## 引入
```jsx
import { ActionSheet } from 'cafune';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-actsheet'` | - | ❌ |
| className | 元素类名 | string | - | - | ❌ |
| isShow | 面板开启状态 | boolean | `false` | - | ❌ |
| showMask | 是否显示遮罩 | boolean | `true` | - | ❌ |
| closeOnClickMask | 是否在点击遮罩后关闭 | boolean | `true` | - | ❌ |
| horizon | 横向展示的数据 | IHorizon | - | - | ✅  |
| vertialList | 纵向展示的数据 | Array | - | - | ✅  |
| title | 标题栏 | string/VNode/Component/HTMLElement | - | - | ❌ |
| cancelText | 取消按钮文字 | string | `'取消'` | - | ❌ |
| onClose | 关闭时触发事件 | Function | - | - | ❌ |
| onOpen | 开启时触发事件 | Function | - | - | ❌ |
| showCancel | 是否显示取消按钮 | boolean | `true` | - | ❌ |