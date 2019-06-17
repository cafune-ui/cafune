## 引入

```javascript
import { Skeleton } from 'components';
const { Rect, Circle } = Skeleton;
```

## 使用

```jsx
<Skeleton>
  <Circle radius={32} x={32} y={32} />
  <Rect radius={4} width={120} height={20} x={80} y={10} />
  <Rect radius={4} width={120} height={20} x={80} y={35} />
</Skeleton>
```

## Skeleton 配置项

| 参数           | 说明         | 类型          | 默认值      | 备选值 | 是否必须 |
| -------------- | ------------ | ------------- | ----------- | ------ | -------- |
| speed          | 动画速度     | number        | 2           | -      | 否       |
| width          | 骨架屏宽度   | string/number | `'100%'`    | -      | 否       |
| height         | 骨架屏高度   | string/number | `'9.28rem'` | -      | 否       |
| primaryColor   | 背景颜色     | string        | `'#f5f5f5'` | -      | 否       |
| secondaryColor | 渐变动画颜色 | string        | `'#eaeaea'` | -      | 否       |

## Rect 配置项
                                                                                                                                                                                                                                                         
| 参数   | 说明       | 类型   | 默认值 | 备选值 | 是否必须 |
| ------ | ---------- | ------ | ------ | ------ | -------- |
| x      | 元素横坐标 | number | 0      | -      | 否       |
| y      | 元素纵坐标 | number | 0      | -      | 否       |
| radius | 元素半径   | number | 0      | -      | 否       |
| width  | 元素宽度   | number | 50     | -      | 否       |
| height | 元素高度   | number | 50     | -      | 否       |

## Circle 配置项

| 参数   | 说明       | 类型   | 默认值 | 备选值 | 是否必须 |
| ------ | ---------- | ------ | ------ | ------ | -------- |
| x      | 元素横坐标 | number | 0      | -      | 否       |
| y      | 元素纵坐标 | number | 0      | -      | 否       |
| radius | 元素半径   | number | 50     | -      | 否       |
