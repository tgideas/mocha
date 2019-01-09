---
title: dialog(弹层)
date: 2016-01-09 12:44:01
tags:
---
作者：`sonichuang`
版本：`v.1`
依赖：`mocha.css`
<div class="demo-qrcode"><a id="QRcode" href="http://tgideas.github.io/mocha/demo/dialog/demo.html" target="_blank">点击运行Demo</a></div>

### 样式1-有标题及按钮 `.mocha-dialog-scheme1`
<div class="demo-preview"><div class="box-w320 box-h520"><div id="demoDialog1" class="mocha-dialog mocha-dialog-scheme1 mocha-dialog-skin1"><div class="mocha-dialog-mark" style="position: absolute;"></div><div class="mocha-dialog-box" style="position: absolute;"><a href="javascript:;" class="mocha-dialog-close">&times;</a><div class="mocha-dialog-hd"><h3 class="mocha-dialog-hd-title">样式1-有标题及按钮</h3></div><div class="mocha-dialog-bd"><p>{模块内容}</p><p>{模块内容}</p></div><div class="mocha-dialog-fd"><a href="#" class="mocha-box-fd-btn">按钮文字</a><a href="#" class="mocha-box-fd-btn">按钮文字</a></div></div></div></div>
``` html
<div id="demoDialog1" class="mocha-dialog mocha-dialog-scheme1 mocha-dialog-skin1" style="display:none">
	<div class="mocha-dialog-mark"></div>
	<div class="mocha-dialog-box">
		<a href="javascript:;" class="mocha-dialog-close">&times;</a>
		<div class="mocha-dialog-hd">
			<h3 class="mocha-dialog-hd-title">样式1-有标题及按钮</h3>
		</div>
		<div class="mocha-dialog-bd">
			<p>{模块内容}</p>
			<p>{模块内容}</p>
		</div>
		<div class="mocha-dialog-fd">
			<a href="#" class="mocha-box-fd-btn">按钮文字</a>
			<a href="#" class="mocha-box-fd-btn">按钮文字</a>
		</div>
	</div>
</div>
```
</div>
### 样式2-无标题及按钮 `.mocha-dialog-scheme2`
<div class="demo-preview"><div class="box-w320 box-h520"><div id="demoDialog2" class="mocha-dialog mocha-dialog-scheme2 mocha-dialog-skin1"><div class="mocha-dialog-mark" style="position: absolute;"></div><div class="mocha-dialog-box" style="position: absolute;"><a href="javascript:;" class="mocha-dialog-close">&times;</a><div class="mocha-dialog-bd"><p>{模块内容-无标题及按钮}</p></div></div></div></div>
``` html
<div id="demoDialog2" class="mocha-dialog mocha-dialog-scheme2 mocha-dialog-skin1" style="display:none;">
	<div class="mocha-dialog-mark"></div>
	<div class="mocha-dialog-box">
		<a href="javascript:;" class="mocha-dialog-close">&times;</a>
		<div class="mocha-dialog-bd">
			<p>{模块内容-无标题及按钮}</p>
		</div>
	</div>
</div>
```
</div>
### 二维码浮层 `.mocha-dialog-scheme2`
<div class="demo-preview"><div class="box-w320 box-h520"><div id="demoDialog3" class="mocha-dialog mocha-dialog-scheme2 mocha-dialog-skin1"><div class="mocha-dialog-mark" style="position: absolute;"></div><div class="mocha-dialog-box" style="position: absolute;"><a href="javascript:;" class="mocha-dialog-close">&times;</a><div class="mocha-dialog-bd"><p><img width="200" height="200" src="http://ui.code.oa.com/files/image/201503/20150313112541495.png" alt=""></p><p>长按识别二维码</p><p>关注XXXX官方公众号</p></div></div></div></div>
``` html
<div id="demoDialog3" class="mocha-dialog mocha-dialog-scheme2 mocha-dialog-skin1" style="display:none;">
	<div class="mocha-dialog-mark"></div>
	<div class="mocha-dialog-box">
		<a href="javascript:;" class="mocha-dialog-close">&times;</a>
		<div class="mocha-dialog-bd">
			<p><img width="200" height="200" src="http://ui.code.oa.com/files/image/201503/20150313112541495.png" alt=""></p>
			<p>长按识别二维码</p>
			<p>关注XXXX官方公众号</p>
		</div>
	</div>
</div>
```
</div>
### 修改模块皮肤CSS 
模块的默认皮肤类`.mocha-dialog-skin1`，您可以在您项目的`page.css`里修改`.mocha-dialog-skin1`皮肤类，或者新增`.mocha-dialog-skin2`。
``` css
/* skin */
	.mocha-dialog-skin1{font-size:0.16rem;}
	.mocha-dialog-skin1 .mocha-dialog-box{background-color: #fff;}
	.mocha-dialog-skin1 .mocha-dialog-hd{background-color: #ddd;}
	.mocha-dialog-skin1 .mocha-dialog-close{color: #666;}
	.mocha-dialog-skin1 .mocha-dialog-close:active{color: #333;}
	.mocha-dialog-skin1 .mocha-box-fd-btn{background-color: #ddd;color: #333;font-size:0.16rem;}
	.mocha-dialog-scheme2.mocha-dialog-skin1 .mocha-dialog-box{background:none;color: #fff;}
	.mocha-dialog-scheme2.mocha-dialog-skin1 .mocha-dialog-close{color: #ccc;}
```