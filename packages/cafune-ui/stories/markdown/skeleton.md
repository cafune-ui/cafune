# Skeleton - 骨架屏

## 引入
```jsx
import { Skeleton } from 'components';
```
## 使用

```jsx
<Skeleton>
  <Circle radius={32} x={32} y={32} />
  <Rect radius={4} width={120} height={20} x={80} y={10} />
  <Rect radius={4} width={120} height={20} x={80} y={35} />
</Skeleton>
```

## 配置项
| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| speed | 动画速度 | number | `2` | - | ❌ |
| width | 骨架屏宽度 | union | `'100%'` | - | ❌ |
| height | 骨架屏高度 | union | `'9.28rem'` | - | ❌ |
| primaryColor | 背景颜色 | string | `'#f5f5f5'` | - | ❌ |
| secondaryColor | 渐变动画颜色 | string | `'#eaeaea'` | - | ❌ |


---

### Circle 配置项

| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| x | 元素横坐标（计算时以圆心为原点） | union | `0` | - | ❌ |
| y | 元素纵坐标（计算时以圆心为原点） | union | `0` | - | ❌ |
| radius | 元素半径 | union | `50` | - | ❌ |


---

### Rect 配置项

| 参数 | 说明 | 类型 | 默认值 |备选值 | 是否必须 |
| --- | --- | --- | --- | --- | --- |
| x | 元素横坐标 | union | `0` | - | ❌ |
| y | 元素纵坐标 | union | `0` | - | ❌ |
| radius | 元素半径 | union | `50` | - | ❌ |
| width | 元素宽度 | union | `50` | - | ❌ |
| height | 元素高度 | union | `50` | - | ❌ |
