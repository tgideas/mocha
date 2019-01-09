---
title: pic-list(图片列表)
date: 2016-03-16 12:45:38
tags:
---
作者：`sonichuang`
版本：`v.2`
依赖：`mocha.css`
<div class="demo-qrcode"><a id="QRcode" href="http://tgideas.github.io/mocha/demo/pic-list/demo.html" target="_blank">点击运行Demo</a></div>

### 样式1-一行展示（水平滚动条）
一行展示所有图片 `.mocha-pic-list-scroll`
<div class="demo-preview"><div class="box-w320"><div class="mocha-pic-list mocha-pic-list-scroll"><ul class="mocha-pic-list-ul"><li class="mocha-pic-list-item"><a href="#"><img width="100" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a></li></ul></div></div>
``` html
<div class="mocha-pic-list mocha-pic-list-scroll">
	<ul class="mocha-pic-list-ul">
		<li class="mocha-pic-list-item">
			<a href="#"><img width="100" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#"><img width="100" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#"><img width="100" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#"><img width="100" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#"><img width="100" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#"><img width="100" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a>
		</li>
	</ul>
</div>
```
</div>

### 样式2-不带文字
一行一张图 `.mocha-pic-list-scheme1`
<div class="demo-preview"><div class="box-w320"><div class="mocha-pic-list mocha-pic-list-scheme1"><ul class="mocha-pic-list-ul"><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a></li></ul></div></div>
``` html
<div class="mocha-pic-list mocha-pic-list-scheme1">
	<ul class="mocha-pic-list-ul">
		<li class="mocha-pic-list-item">
			<a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a>
		</li>
	</ul>
</div>
```
</div>
一行二张图 `.mocha-pic-list-scheme2`
<div class="demo-preview"><div class="box-w320"><div class="mocha-pic-list mocha-pic-list-scheme2"><ul class="mocha-pic-list-ul"><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a></li></ul></div></div>
``` html
<div class="mocha-pic-list mocha-pic-list-scheme2">
	<ul class="mocha-pic-list-ul">
		<li class="mocha-pic-list-item">
			<a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a>
		</li>
	</ul>
</div>
```
</div>
一行三张图 `.mocha-pic-list-scheme3`
<div class="demo-preview"><div class="box-w320"><div class="mocha-pic-list mocha-pic-list-scheme3"><ul class="mocha-pic-list-ul"><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a></li></ul></div></div>
``` html
<div class="mocha-pic-list mocha-pic-list-scheme3">
	<ul class="mocha-pic-list-ul">
		<li class="mocha-pic-list-item">
			<a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a>
		</li>
	</ul>
</div>
```
</div>
一行四张图 `.mocha-pic-list-scheme4`
<div class="demo-preview"><div class="box-w320"><div class="mocha-pic-list mocha-pic-list-scheme4"><ul class="mocha-pic-list-ul"><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a></li></ul></div></div>
``` html
<div class="mocha-pic-list mocha-pic-list-scheme4">
	<ul class="mocha-pic-list-ul">
		<li class="mocha-pic-list-item">
			<a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"></a>
		</li>
	</ul>
</div>
```
</div>

### 样式3-带文字
一行一张图 `.mocha-pic-list-scheme1`
<div class="demo-preview"><div class="box-w320"><div class="mocha-pic-list mocha-pic-list-scheme1 mocha-pic-list-skin1"><ul class="mocha-pic-list-ul"><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"><span class="txt">小爱神-丘比特</span></a></li></ul></div></div>
``` html
<div class="mocha-pic-list mocha-pic-list-scheme1 mocha-pic-list-skin1">
	<ul class="mocha-pic-list-ul">
		<li class="mocha-pic-list-item">
			<a href="#">
				<img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic">
				<span class="txt">小爱神-丘比特</span>
			</a>
		</li>
	</ul>
</div>
```
</div>
一行二张图 `.mocha-pic-list-scheme2`
<div class="demo-preview"><div class="box-w320"><div class="mocha-pic-list mocha-pic-list-scheme2 mocha-pic-list-skin1"><ul class="mocha-pic-list-ul"><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"><span class="txt">小爱神-丘比特</span></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"><span class="txt">小爱神-丘比特</span></a></li></ul></div></div>
``` html
<div class="mocha-pic-list mocha-pic-list-scheme2 mocha-pic-list-skin1">
	<ul class="mocha-pic-list-ul">
		<li class="mocha-pic-list-item">
			<a href="#">
				<img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic">
				<span class="txt">小爱神-丘比特</span>
			</a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#">
				<img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic">
				<span class="txt">小爱神-丘比特</span>
			</a>
		</li>
	</ul>
</div>
```
</div>
一行三张图 `.mocha-pic-list-scheme3`
<div class="demo-preview"><div class="box-w320"><div class="mocha-pic-list mocha-pic-list-scheme3 mocha-pic-list-skin1"><ul class="mocha-pic-list-ul"><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"><span class="txt">小爱神-丘比特</span></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"><span class="txt">小爱神-丘比特</span></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"><span class="txt">小爱神-丘比特</span></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"><span class="txt">小爱神-丘比特</span></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"><span class="txt">小爱神-丘比特</span></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"><span class="txt">小爱神-丘比特</span></a></li></ul></div></div>
``` html
<div class="mocha-pic-list mocha-pic-list-scheme3 mocha-pic-list-skin1">
	<ul class="mocha-pic-list-ul">
		<li class="mocha-pic-list-item">
			<a href="#">
				<img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic">
				<span class="txt">小爱神-丘比特</span>
			</a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#">
				<img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic">
				<span class="txt">小爱神-丘比特</span>
			</a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#">
				<img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic">
				<span class="txt">小爱神-丘比特</span>
			</a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#">
				<img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic">
				<span class="txt">小爱神-丘比特</span>
			</a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#">
				<img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic">
				<span class="txt">小爱神-丘比特</span>
			</a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#">
				<img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic">
				<span class="txt">小爱神-丘比特</span>
			</a>
		</li>
	</ul>
</div>
```
</div>
一行四张图 `.mocha-pic-list-scheme4`
<div class="demo-preview"><div class="box-w320"><div class="mocha-pic-list mocha-pic-list-scheme4 mocha-pic-list-skin1"><ul class="mocha-pic-list-ul"><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"><span class="txt">小爱神-丘比特</span></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"><span class="txt">小爱神-丘比特</span></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"><span class="txt">小爱神-丘比特</span></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"><span class="txt">小爱神-丘比特</span></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"><span class="txt">小爱神-丘比特</span></a></li><li class="mocha-pic-list-item"><a href="#"><img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic"><span class="txt">小爱神-丘比特</span></a></li></ul></div></div>
``` html
<div class="mocha-pic-list mocha-pic-list-scheme4 mocha-pic-list-skin1">
	<ul class="mocha-pic-list-ul">
		<li class="mocha-pic-list-item">
			<a href="#">
				<img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic">
				<span class="txt">小爱神-丘比特</span>
			</a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#">
				<img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic">
				<span class="txt">小爱神-丘比特</span>
			</a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#">
				<img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic">
				<span class="txt">小爱神-丘比特</span>
			</a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#">
				<img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic">
				<span class="txt">小爱神-丘比特</span>
			</a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#">
				<img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic">
				<span class="txt">小爱神-丘比特</span>
			</a>
		</li>
		<li class="mocha-pic-list-item">
			<a href="#">
				<img width="100%" src="http://dummyimage.com/400x400/222/fff.png&text=<img>" alt="" class="pic">
				<span class="txt">小爱神-丘比特</span>
			</a>
		</li>
	</ul>
</div>
```
</div>
### 修改模块皮肤CSS
模块的默认皮肤类`.mocha-pic-list-skin1`，您可以在您项目的`page.css`里修改`.mocha-pic-list-skin1`皮肤类，或者新增`.mocha-pic-list-skin2`。
``` css
/* skin */
.mocha-pic-list-skin1 .mocha-pic-list-item .txt{color: #333;}
```











