webpackJsonp([35],{WtmG:function(s){s.exports='<span class="hljs-keyword">import</span> { Swiper } <span class="hljs-keyword">from</span> <span class="hljs-string">\'cafune\'</span>;\n<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'preact\'</span>;\n<span class="hljs-keyword">const</span> { SwiperItem } = Swiper;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">SwiperComp</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Component</span> </span>{\n  state = {\n    <span class="hljs-attr">current</span>: <span class="hljs-number">1</span>\n  };\n  renderCustom() {\n    <span class="hljs-keyword">const</span> { current } = <span class="hljs-keyword">this</span>.state;\n    <span class="hljs-keyword">return</span> (\n      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding: 4px 10px;position: absolute;right: 10px;bottom:10px;background: rgba(0,0,0, .6);color: #fff;font-size:12px;"</span>&gt;</span>\n        {current + 1}/4\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n    );\n  }\n  change = <span class="hljs-function"><span class="hljs-params">ind</span> =&gt;</span> {\n    <span class="hljs-keyword">this</span>.setState({\n      <span class="hljs-attr">current</span>: ind\n    });\n  };\n  render() {\n    <span class="hljs-keyword">const</span> sliderNum = <span class="hljs-number">4</span>;\n    <span class="hljs-keyword">return</span> (\n      <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">""</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>默认<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Swiper</span>\n          <span class="hljs-attr">initialIndex</span>=<span class="hljs-string">{0}</span>\n          <span class="hljs-attr">showIndicators</span>=<span class="hljs-string">{true}</span>\n          <span class="hljs-attr">autoplay</span>=<span class="hljs-string">{true}</span>\n          <span class="hljs-attr">intervel</span>=<span class="hljs-string">{3000}</span>\n        &gt;</span>\n          {Array(...Array(sliderNum)).map((_, ind) =&gt; (\n            <span class="hljs-tag">&lt;<span class="hljs-name">SwiperItem</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{ind}</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"height: 80px;text-align:center;line-height: 80px;"</span>&gt;</span>\n                {ind + 1}\n              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">SwiperItem</span>&gt;</span>\n          ))}\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Swiper</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>自定义指示器<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">Swiper</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{this.change}</span> <span class="hljs-attr">customIndicator</span>=<span class="hljs-string">{this.renderCustom()}</span>&gt;</span>\n          {Array(...Array(4)).map((_, ind) =&gt; (\n            <span class="hljs-tag">&lt;<span class="hljs-name">SwiperItem</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{ind}</span>&gt;</span>\n              <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"height: 80px;text-align:center;line-height: 80px;"</span>&gt;</span>\n                {ind + 1}\n              <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n            <span class="hljs-tag">&lt;/<span class="hljs-name">SwiperItem</span>&gt;</span>\n          ))}\n        <span class="hljs-tag">&lt;/<span class="hljs-name">Swiper</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>\n    );\n  }\n}\n'}});