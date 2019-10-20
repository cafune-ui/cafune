# 定制主题

Cafune UI 支持一定程度的样式定制

### 全局变量覆盖
<br>
Cafune UI 的组件样式是使用 SCSS 编写的，你可以通过以下步骤覆盖主题变量来改变样式

  1. 新建自定义主题文件，并覆写变量
  ```scss
  $color_theme_blue: #369;
  @import 'cafune/lib/index.scss';
  ```

  2. 在全局文件中引入自定义主题文件
  ```js
  import './custom.scss'
  ```

---

### 按需加载

  - 修改变量影响所有组件（推荐使用）

  在 webpack 中使用[sass-resources-loader](https://github.com/shakacode/sass-resources-loader) 引入定制的主题文件即可覆盖掉全局变量

  ```js
    //...
    test: /\.scss$/,
    // { loader: 'sass-loader', options: { sourceMap: true } },
    // ...
    {
      loader: 'sass-resources-loader',
      options: {
        sourceMap: true,
        resources: [resolve(cwd, 'src/custom.scss')]
      }
    };
  ```


  - 仅修改当前组件

  首先需要在`babel-plugin-import` 选项中将需要定制的组件排除

  ```js
  [
    require.resolve('babel-plugin-import'),
    {
      libraryName: 'cafune',
      libraryDirectory: 'lib',
      style: name => {
        if (/cafune\/lib\/switch/.test(name)) {
          return false;
        }
        return `${name}/style`;
      }
    }
  ];
  ```

  然后在组件中用如下方式引入样式文件，即可

  ```js
  // 组件js
  import './style/custom.scss';
  ```

  ```scss
  // ./style/custom.scss
  $color_theme_blue: #369;
  @import 'cafune/lib/switch/style';
  ```

