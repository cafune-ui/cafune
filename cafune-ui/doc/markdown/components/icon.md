# Icon - 图标

## 引入
```jsx
import { Icon } from 'cafune';
```

 ## 自定义图标
如需在现有基础上拓展更多图标，可引入第三方 iconfont 对应的字体文件和 CSS 文件
```css
// 引入第三方或自定义的字体图标样式
@font-face {
  font-family: 'ri-icon';
  src: url('./ri-icon.ttf') format('truetype');
}

.ri {
  font-family: 'my-icon';
}

.ri-home::before {
  content: '\e626';
}
```
在组件中指定字体前缀
```jsx
<Icon classPrefix="ri" name="home" />
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| icon | 图标 | string | - | - | ✅  |
| prefix | 自定义前缀 | string | `'caf-icons'` | - | ❌ |
| color | 图标颜色 | string | - | - | ❌ |
| size | 图标尺寸 | string | - | - | ❌ |
| tag | 图标标签名 | string | `'i'` | - | ❌ |
| className | 自定义类名 | string | - | - | ❌ |
| customPrefix | 自定义字体前缀 | string | `'caf-icon'` | - | ❌ |
