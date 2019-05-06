## 引入

```jsx
import { Swiper } from 'components';
const { SwiperItem } = Swiper;
```

## 使用

```jsx
<Swiper
  initialIndex={0}
  showIndicators={true}
  autoplay={true}
  intervel={3000}
  onChange={action('handleChange')}
>
  {Array(...Array(sliderNum)).map((_, ind) => (
    <SwiperItem key={ind}>{ind + 1}</SwiperItem>
  ))}
</Swiper>
```
自定义指示器

```jsx

// ...
renderCustom() {
  const { current } = this.state;
  return (
    <div style="padding: 4px 10px;position: absolute;right: 10px;bottom:10px;background: rgba(0,0,0, .6);color: #fff;font-size:12px;">
      {current + 1}/4
    </div>
  );
}
// ...
<Swiper onChange={this.change} customIndicator={this.renderCustom()}>
  {Array(...Array(4)).map((_, ind) => (
    <SwiperItem key={ind}>{ind + 1}</SwiperItem>
  ))}
</Swiper>

```

## 配置项

| 参数 | 说明 | 类型 | 默认值 | 备选值 | 是否必须 |
| ---- | ---- | ---- | ---- | ---- | ---- |
| autoplay | 是否自动切换 | boolean | true | - | 否 |
| intervel | 切换间隔事件（毫秒） | number | 3000 | - | 否 |
| initialIndex | 初始index | number | 0 | - | 否 |
| showIndicators | 是否显示指示器 | boolean | true | - | 否 |
| onChange | 切换时触发事件 | funs | - | - | 否 |
| customIndicator | 自定义指示器 | () => HTMLElement | - | - | 否 |