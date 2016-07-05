---
title: loading(进度条)
date: 2016-03-22 16:30:00
tags:
---
作者：`janfzhao`
版本：`v.1`
依赖：`mocha.css`
<div class="demo-qrcode"><a id="QRcode" href="http://tgideas.github.io/mocha/demo/loading/demo.html" target="_blank">点击运行Demo</a></div>

### 样式1-局部加载中 `.mocha-loading-scheme1`
<div class="demo-preview"><div class="box-w520"><div class="mocha-loading mocha-loading-scheme1"><p class="mocha-loading-txt" style="margin:0;">努力加载中...</p><i class="mocha-loading-icon"></i></div></div>
``` html
<div class="mocha-loading mocha-loading-scheme1">
	<p class="mocha-loading-txt">努力加载中...</p>
	<i class="mocha-loading-icon"></i>
</div>
```
</div>
### 样式2 页面加载中 `.mocha-loading-scheme2`
<div class="demo-preview"><div class="box-w520"><div class="mocha-loading mocha-loading-scheme2 mocha-loading-skin1"><i class="mocha-loading-icon"></i><p class="mocha-loading-txt">努力加载中...</p></div></div>
``` html
<div class="mocha-loading mocha-loading-scheme2 mocha-loading-skin1">
	<i class="mocha-loading-icon"></i>
	<p class="mocha-loading-txt">努力加载中...</p>
</div>
```
</div>
### 修改模块皮肤CSS 
模块的默认皮肤类`.mocha-loading-skin1`，您可以在您项目的`page.css`里修改`.mocha-loading-skin1`皮肤类，或者新增`.mocha-loading-skin2`。
``` css
/* skin */
.mocha-loading-skin1{width:100px;height:70px;background: rgba(0,0,0,.65); border-radius: 6px; color: #fff;} 
```
