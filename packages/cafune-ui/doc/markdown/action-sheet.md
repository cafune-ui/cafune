# ActionSheet - 

## 引入
```javascript
import { ActionSheet } from 'components';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义类名 | string | `'caf-actsheet'` | - | ❌ |
| isShow | 面板开启状态 | bool | `false` | - | ❌ |
| showMask | 是否显示遮罩 | bool | `true` | - | ❌ |
| closeOnClickMask | 是否在点击遮罩后关闭 | bool | `true` | - | ❌ |
| horizon | 横向展示的数据 | arrayOf | - | - | ❌ |
| vertialList | 纵向展示的数据 | arrayOf | - | - | ❌ |
| title | 标题栏 | union | - | - | ❌ |
| cancelText | 取消按钮文字 | string | `'取消'` | - | ❌ |
| onClose | 关闭时触发事件 | func | - | - | ❌ |
