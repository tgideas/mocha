---
title: box(盒模块)
date: 2016-01-08 12:45:01
tags:
---
作者：`sonichuang`
版本：`v.1`
依赖：`mocha.css`
<div class="demo-qrcode"><a id="QRcode" href="http://tgideas.github.io/mocha/demo/box/demo.html" target="_blank">点击运行Demo</a></div>
### 样式1 `.mocha-box-scheme1`
<div class="demo-preview"><div class="box-w320"><div class="mocha-box mocha-box-scheme1 mocha-box-skin1"><div class="mocha-box-hd"><h3 class="mocha-box-hd-title">模块标题</h3></div><div class="mocha-box-bd"><p>{模块内容显示区}</p></div><div class="mocha-box-fd"><a href="#" class="mocha-box-fd-more">查看更多&gt;</a></div></div></div>
``` html
<div class="mocha-box mocha-box-scheme1 mocha-box-skin1">
	<div class="mocha-box-hd">
		<h3 class="mocha-box-hd-title">模块标题</h3>
	</div>
	<div class="mocha-box-bd">
		<p>{模块内容显示区}</p>
	</div>
	<div class="mocha-box-fd">
		<a href="#" class="mocha-box-fd-more">查看更多&gt;</a>
	</div>
</div>
```
</div>
### 修改模块皮肤CSS 
模块的默认皮肤类`.mocha-box-skin1`，您可以在您项目的`page.css`里修改`.mocha-box-skin1`皮肤类，或者新增`.mocha-box-skin2`。
``` css
/* skin */
.mocha-box-skin1{font-size:0.16rem;color: #666;}
.mocha-box-skin1 .mocha-box-hd{background-color: #ddd;}
.mocha-box-skin1 .mocha-box-fd{border-top-color:#ddd;}
.mocha-box-skin1 .mocha-box-fd-more{color:#666;}
```