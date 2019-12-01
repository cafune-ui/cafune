# Transition - 过渡

## 引入
```jsx
import { Transition } from 'cafune';
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| visible | 是否可见 | boolean | `false` | - | ❌ |
| instant | 是否一开始无动画进入 | boolean | `false` | - | ❌ |
| css | 是否跳过css检测 | boolean | `true` | - | ❌ |
| name | 动画前缀 | string | - | - | ❌ |
| beforeEnter | 进入之前钩子 | (node: HTMLElement) => void | - | - | ❌ |
| enter | 进入钩子 | (node: HTMLElement, done?) => void | - | - | ❌ |
| afterEnter | 进入之后钩子 | (node: HTMLElement) => void | - | - | ❌ |
| beforeLeave | 离开之前钩子 | (node: HTMLElement) => void | - | - | ❌ |
| leave | 离开钩子 | (node: HTMLElement, done?) => void | - | - | ❌ |
| afterLeave | 离开之后钩子 | (node: HTMLElement) => void | - | - | ❌ |
