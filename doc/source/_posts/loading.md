---
title: loading
date: 2016-03-22 16:30:00
tags:
---

## loading(进度条)
作者：`janfzhao`
版本：`v.1`
依赖：`mocha.css`

![loading](http://game.gtimg.cn/images/js/mocha/images/demo/loading.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/loading/demo.html "loading(加载中)")

### 样式1-局部加载中 `.mocha-loading-scheme1`
``` html
<div class="mocha-loading mocha-loading-scheme1">
	<p class="mocha-loading-txt">努力加载中...</p>
	<i class="mocha-loading-icon"></i>
</div>
```

### 样式2 页面加载中 `.mocha-loading-scheme2`
``` html
<div class="mocha-loading mocha-loading-scheme2 mocha-loading-skin1">
	<i class="mocha-loading-icon"></i>
	<p class="mocha-loading-txt">努力加载中...</p>
</div>
```
### 修改模块皮肤CSS 
模块的默认皮肤类`.mocha-loading-skin1`，您可以在您项目的`page.css`里修改`.mocha-loading-skin1`皮肤类，或者新增`.mocha-loading-skin2`。
``` css
/* skin */
.mocha-loading-skin1{width:100px;height:70px;background: rgba(0,0,0,.65); border-radius: 6px; color: #fff;} 
```
