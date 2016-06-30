---
title: text(文本文字)
date: 2016-03-16 15:45:38
tags:
---
作者：`sonichuang`
版本：`v.1`
依赖：`mocha.css`
<div class="demo-qrcode"><a id="QRcode" href="http://tgideas.github.io/mocha/demo/text/demo.html" target="_blank">点击运行Demo</a></div>
### 所有文本标签
集成于mocha.css的base样式中，无需增加任何 class
<div class="demo-preview"><div class="box-w320"><div><h1>h1--标题：32px</h1><h2>h2--栏目：30px</h2><h3>h3--内文：28px</h3><h4>h4--内文：26px</h4><h5>h5--副内文：24px</h5><h6>h6--辅助文字：20px</h6><p>div,p--默认字体大小16px</p></div></div>
``` html
<div>
	<h1>h1--标题：32px</h1>
	<h2>h2--栏目：30px</h2>
	<h3>h3--内文：28px</h3>
	<h4>h4--内文：26px</h4>
	<h5>h5--副内文：24px</h5>
	<h6>h6--辅助文字：20px</h6>
	<p>div,p--默认字体大小16px</p>
</div>
```
</div>
### 文本模块
居左（默认） 居中 `.mohca-text-center`  居右 `.mohca-text-right`
<div class="demo-preview"><div class="box-w320"><div class="mocha-text mocha-text-center"><h4>文字标题</h4><p>文字模块内容文字模块内容文字模块内容文字模块内容文字模块内容文字模块内容文字模块内容文字模块内容</p><ol><li>项目</li><li>项目</li></ol><ul><li>文本</li><li>文本</li></ul></div></div>
``` html
<div class="mocha-text mocha-text-center">
	<h4>文字标题</h4>
	<p>文字模块内容文字模块内容文字模块内容文字模块内容文字模块内容文字模块内容文字模块内容文字模块内容</p>
	<ol>
		<li>项目</li>
		<li>项目</li>
	</ol>
	<ul>
		<li>文本</li>
		<li>文本</li>
	</ul>
</div>
```
</div>
### 文本模块-修改不同皮肤
####  `mocha.css`已提供2套预设皮肤
- 皮肤1(白底，标题下划线) `.mohca-text-skin1` 
- 皮肤2(黑底白字) `.mohca-text-skin2`

<div class="demo-preview"><div class="box-w320"><div class="mocha-text mocha-text-skin1"><h5>文字标题</h5><p>文字模块内容文字模块内容文字模块内容文字模块内容文字模块内容文</p><ol><li>项目</li><li>项目</li></ol><ul><li>文本</li><li>文本</li></ul></div><div class="mocha-text mocha-text-skin2"><h5>文字标题</h5><p>文字模块内容文字模块内容文字模块内容文字模块内容文字模块内容文</p><ol><li>项目</li><li>项目</li></ol><ul><li>文本</li><li>文本</li></ul></div></div>
``` html
<div class="mocha-text mocha-text-skin1">
	<h5>文字标题</h5>
	<p>文字模块内容文字模块内容文字模块内容文字模块内容文字模块内容文</p>
	<ol>
		<li>项目</li>
		<li>项目</li>
	</ol>
	<ul>
		<li>文本</li>
		<li>文本</li>
	</ul>
</div>
<div class="mocha-text mocha-text-skin2">
	<h5>文字标题</h5>
	<p>文字模块内容文字模块内容文字模块内容文字模块内容文字模块内容文</p>
	<ol>
		<li>项目</li>
		<li>项目</li>
	</ol>
	<ul>
		<li>文本</li>
		<li>文本</li>
	</ul>
</div>
```
</div>
您可以在您项目的`page.css`里修改`.mocha-text-skin1`，`.mocha-text-skin2`皮肤类，或者新增`.mocha-text-skin3`。
``` css
/* skin */
.mocha-text-skin1 h1,.mocha-text-skin1 h2,.mocha-text-skin1 h3,.mocha-text-skin1 h4,.mocha-text-skin1 h5,.mocha-text-skin1 h6{border-bottom: 1px solid #ddd;}
.mocha-text-skin1 div,.mocha-text-skin1 p,.mocha-text-skin1 li{color: #333;}
.mocha-text-skin2{color: #fff;background-color: #222;}
```