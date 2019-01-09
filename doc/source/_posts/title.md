---
title: title(标题)
date: 2016-03-17 15:45:38
tags:
---
作者：`sonichuang`
版本：`v.1`
依赖：`mocha.css`
<div class="demo-qrcode"><a id="QRcode" href="http://tgideas.github.io/mocha/demo/title/demo.html" target="_blank">点击运行Demo</a></div>
### 标题模块
<div class="demo-preview"><div class="box-w320"><div class="mocha-title"><h3 class="mocha-title-txt">标题文字</h3><div class="mocha-title-extra"><a href="#">链接1</a><a href="#">链接2</a></div></div></div>
``` html
<div class="mocha-title">
	<h3 class="mocha-title-txt">标题文字</h3>
	<div class="mocha-title-extra"><a href="#">链接1</a><a href="#">链接2</a></div>
</div>
```
</div>
### 标题模块-修改不同皮肤
####  `mocha.css`已提供3套预设皮肤
- 皮肤1(灰底上划线) `.mohca-title-skin1`
- 皮肤2(白底上下划线) `.mohca-title-skin2`
- 皮肤2(灰底左划线) `.mohca-title-skin3`

<div class="demo-preview"><div class="box-w320"><div class="mocha-title mocha-title-skin1"><h3 class="mocha-title-txt">标题文字</h3><div class="mocha-title-extra"><a href="#">链接1</a><a href="#">链接2</a></div></div><div class="mocha-title mocha-title-skin2"><h3 class="mocha-title-txt">标题文字</h3><div class="mocha-title-extra"><a href="#">链接1</a><a href="#">链接2</a></div></div><div class="mocha-title mocha-title-skin3"><h3 class="mocha-title-txt">标题文字</h3><div class="mocha-title-extra"><a href="#">链接1</a><a href="#">链接2</a></div></div></div>
``` html
<div class="mocha-title mocha-title-skin1">
	<h3 class="mocha-title-txt">标题文字</h3>
	<div class="mocha-title-extra"><a href="#">链接1</a><a href="#">链接2</a></div>
</div>
<div class="mocha-title mocha-title-skin2">
	<h3 class="mocha-title-txt">标题文字</h3>
	<div class="mocha-title-extra"><a href="#">链接1</a><a href="#">链接2</a></div>
</div>
<div class="mocha-title mocha-title-skin3">
	<h3 class="mocha-title-txt">标题文字</h3>
	<div class="mocha-title-extra"><a href="#">链接1</a><a href="#">链接2</a></div>
</div>
```
</div>
您可以在您项目的`page.css`里修改`.mocha-title-skin1`，`.mocha-title-skin2`，`.mocha-title-skin3`皮肤类，或者新增`.mocha-title-skin4`。
``` css
/* skin */
.mocha-title-skin1{background-color: #eee;border-top: 2px solid #666;}
.mocha-title-skin1 .mocha-title-txt{color: #000;}
.mocha-title-skin1 .mocha-title-extra a{color: #333;background-color: #fff;border:1px solid #eee;border-radius:0.1rem;}
.mocha-title-skin2{background-color: #fff;border-top: 1px solid #eee;border-bottom: 1px solid #eee;}
.mocha-title-skin2 .mocha-title-txt{color: #000;}
.mocha-title-skin2 .mocha-title-extra a{color: #333;background-color: #f6f6f6;border:1px solid #eee;border-radius:0.1rem;}
.mocha-title-skin3{background-color: #eee;padding:0 0.1rem 0 0;}
.mocha-title-skin3 .mocha-title-txt{color: #000;padding:0.1rem;border-left:6px solid #333;background-color: #fff;padding:0 0.1rem;}
.mocha-title-skin3 .mocha-title-extra a{color: #fff;background-color: #333;border-radius:0;}
```