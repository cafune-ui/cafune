# 安装

```bash
$ npm install cafune-ui --save
```

---

# 引入

## 正常引入

### 组件引入

```jsx
import { Button } from 'cafune';
```

### 样式引入

1. 引入全部样式

   ```jsx
   import 'cafune/style';
   ```

2. 引入单个样式
   ```jsx
   import 'cafune/style/button';
   ```

## 按需加载

`cafune` 支持使用 `babel-plugin-import` 来进行按需引入组件的方式

```bash
$ npm install babel-plugin-import --save-dev
```

在.babelrc 中配置

```js
{
  "plugins": [
    ["import", { libraryName: "cafune", style: true }] // `style: true` 会加载 scss 文件
  ]
}
```

如果使用 Babel 7，可以在 `babel.config.js` 中配置

```js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'cafune',
        libraryDirectory: 'es',
        style: true
      },
      'cafune'
    ]
  ]
};
```

然后只需引入组件即可，无需再引入样式

```jsx
// babel-plugin-import 会帮助你加载 JS 和 CSS
import { Button } from 'cafune';

      ↓ ↓ ↓ ↓ ↓ ↓

var _button = require('cafune/lib/button');
require('cafune/lib/button/style');
```


## 屏幕适配

部分全面屏机型会有底部安全区域，如需适配，需要加入或修改`meta` 标签中的`viewport-fit` 属性，`Cafune` 已经对此做了适配， 如下：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover">
```

