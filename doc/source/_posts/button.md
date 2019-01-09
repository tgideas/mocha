---
title: button(按钮)
date: 2016-01-07 17:45:01
tags:
---
作者：`sonichuang`
版本：`v.1`
依赖：`mocha.css`
<div class="demo-qrcode"><a id="QRcode" href="http://tgideas.github.io/mocha/demo/button/demo.html" target="_blank">点击运行Demo</a></div>
### 1行1个按钮 `.mocha-button-scheme1`
<div class="demo-preview"><div class="box-w320"><p><a href="javascript:;" class="mocha-button mocha-button-scheme1 mocha-button-skin1">主按钮</a></p></div>
``` html
<p>
	<a href="javascript:;" class="mocha-button mocha-button-scheme1 mocha-button-skin1">主按钮</a>
</p>
```
</div>
### 1行2个按钮 `.mocha-button-scheme2`
<div class="demo-preview"><div class="box-w320"><p><a href="javascript:;" class="mocha-button mocha-button-scheme2 mocha-button-skin1">次按钮1</a><a href="javascript:;" class="mocha-button mocha-button-scheme2 mocha-button-skin1">次按钮2</a></p></div>
``` html
<p>
	<a href="javascript:;" class="mocha-button mocha-button-scheme2 mocha-button-skin1">次按钮1</a>
	<a href="javascript:;" class="mocha-button mocha-button-scheme2 mocha-button-skin1">次按钮2</a>
</p>
```
</div>
### 1行3个按钮 `.mocha-button-scheme3`
<div class="demo-preview"><div class="box-w320"><p><a href="javascript:;" class="mocha-button mocha-button-scheme3 mocha-button-skin1">次按钮1</a><a href="javascript:;" class="mocha-button mocha-button-scheme3 mocha-button-skin1">次按钮2</a><a href="javascript:;" class="mocha-button mocha-button-scheme3 mocha-button-skin1 mocha-button-disable">次按钮3</a></p></div>
``` html
<p>
	<a href="javascript:;" class="mocha-button mocha-button-scheme3 mocha-button-skin1">次按钮1</a>
	<a href="javascript:;" class="mocha-button mocha-button-scheme3 mocha-button-skin1">次按钮2</a>
	<a href="javascript:;" class="mocha-button mocha-button-scheme3 mocha-button-skin1 mocha-button-disable">次按钮3</a>
</p>
```
</div>
### 1行3个以上按钮 `.mocha-button-scheme4`
<div class="demo-preview"><div class="box-w320"><p><a href="javascript:;" class="mocha-button mocha-button-scheme4 mocha-button-skin1">按钮1</a><a href="javascript:;" class="mocha-button mocha-button-scheme4 mocha-button-skin1">按钮2</a><a href="javascript:;" class="mocha-button mocha-button-scheme4 mocha-button-skin1">按钮3</a><a href="javascript:;" class="mocha-button mocha-button-scheme4 mocha-button-skin1 mocha-button-disable">按钮4</a></p></div>
``` html
<p>
	<a href="javascript:;" class="mocha-button mocha-button-scheme4 mocha-button-skin1">按钮1</a>
	<a href="javascript:;" class="mocha-button mocha-button-scheme4 mocha-button-skin1">按钮2</a>
	<a href="javascript:;" class="mocha-button mocha-button-scheme4 mocha-button-skin1">按钮3</a>
	<a href="javascript:;" class="mocha-button mocha-button-scheme4 mocha-button-skin1 mocha-button-disable">按钮4</a>
</p>
```
</div>
### 修改模块皮肤CSS 
模块的默认皮肤类`.mocha-button-skin1`，您可以在您项目的`page.css`里修改`.mocha-button-skin1`皮肤类，或者新增`.mocha-button-skin2`。
``` css
/* skin */
.mocha-button-skin1{font-size:0.16rem;color: #fff;background-color: #ee3e45;border-radius:0.032rem;box-shadow:inset 0 -0.03rem 0 #be3237;}
.mocha-button-skin1:active{background-color: #be3237;box-shadow:inset 0 0.03rem 0 #9d2c2c;}
.mocha-button-skin1.mocha-button-disable{background-color: #898989;box-shadow:inset 0 -0.03rem 0 #6f6f6f;}
```
