# NoticeBar - 通知栏

## 引入
```jsx
import { NoticeBar } from 'cafune';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| prefix | 自定义前缀 | string | `'caf-noticebar'` | - | ❌ |
| type | 消息内容 | string | `'notice'` | `'error'`,`'success'`,`'notice'`,`'error'` | ❌ |
| text | 消息内容 | string | - | - | ❌ |
| scrollable | 是否启用滚动 | boolean | `true` | - | ❌ |
| wrapable | 是否自动换行（仅在不滚动时生效） | boolean | `false` | - | ❌ |
| color | 文本颜色 | string | - | - | ❌ |
| bgColor | 背景颜色 | string | - | - | ❌ |
| icon | 左侧图标，`string` 类型时显示指定图标， 为`false` 时不显示图标，为`true` 时显示默认图标 | string / boolean | `''` | - | ❌ |
| speed | 滚动速度 | number | `50` | - | ❌ |
| delay | 滚动延迟 | number | `1` | - | ❌ |
| action | 点击类型 | `'closable'` / `'link'` / VNode / HTMLElement | - | - | ❌ |
| onClick | 点击事件 | Function | - | - | ❌ |
