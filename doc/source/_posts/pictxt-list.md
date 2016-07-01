---
title: pictxt-list(图文列表)
date: 2016-01-11 15:45:38
tags:
---
作者：`sonichuang`
版本：`v.1`
依赖：`mocha.css`
<div class="demo-qrcode"><a id="QRcode" href="http://tgideas.github.io/mocha/demo/pictxt-list/demo.html" target="_blank">点击运行Demo</a></div>

### 样式1-上图下文`.mocha-pic-list-scheme1`
#### 正常图片情况
<div class="demo-preview"><div class="box-w320"><div class="mocha-pictxt-list mocha-pictxt-list-scheme1 mocha-pictxt-list-skin1"><ul class="mocha-pictxt-list-ul"><li class="mocha-ptlu-item"><a href="" class="mocha-ptlu-item-a"><img width="100%" src="http://dummyimage.com/400x250/222/fff.png&amp;text=&lt;img&gt;" alt="" class="pic"><h4>视频标题显示在这里视频标题显示在这里</h4></a><p class="mocha-ptlu-item-meta"><time>2015-11-17</time></p></li> <li class="mocha-ptlu-item"><a href="" class="mocha-ptlu-item-a"><img width="100%" src="http://dummyimage.com/400x250/222/fff.png&amp;text=&lt;img&gt;" alt="" class="pic"><h4>视频标题显示在这里</h4></a><p class="mocha-ptlu-item-meta"><time>2015-11-17</time></p></li> <li class="mocha-ptlu-item"><a href="" class="mocha-ptlu-item-a"><img width="100%" src="http://dummyimage.com/400x250/222/fff.png&amp;text=&lt;img&gt;" alt="" class="pic"><h4>视频标题显示在这里</h4></a><p class="mocha-ptlu-item-meta"><time>2015-11-17</time></p></li> <li class="mocha-ptlu-item"><a href="" class="mocha-ptlu-item-a"><img width="100%" src="http://dummyimage.com/400x250/222/fff.png&amp;text=&lt;img&gt;" alt="" class="pic"><h4>视频标题显示在这里</h4></a><p class="mocha-ptlu-item-meta"><time>2015-11-17</time></p></li></ul></div></div>
``` html
<div class="mocha-pictxt-list mocha-pictxt-list-scheme1 mocha-pictxt-list-skin1">
	<ul class="mocha-pictxt-list-ul">
		<li class="mocha-ptlu-item">
			<a href="" class="mocha-ptlu-item-a">
				<img width="100%" src="http://dummyimage.com/400x250/222/fff.png&amp;text=&lt;img&gt;" alt="" class="pic">
				<h4>视频标题显示在这里视频标题显示在这里</h4>
			</a>
			<p class="mocha-ptlu-item-meta"><time>2015-11-17</time></p>
		</li>
		<li class="mocha-ptlu-item">
			<a href="" class="mocha-ptlu-item-a">
				<img width="100%" src="http://dummyimage.com/400x250/222/fff.png&amp;text=&lt;img&gt;" alt="" class="pic">
				<h4>视频标题显示在这里</h4>
			</a>
			<p class="mocha-ptlu-item-meta"><time>2015-11-17</time></p>
		</li>
		<li class="mocha-ptlu-item">
			<a href="" class="mocha-ptlu-item-a">
				<img width="100%" src="http://dummyimage.com/400x250/222/fff.png&amp;text=&lt;img&gt;" alt="" class="pic">
				<h4>视频标题显示在这里</h4>
			</a>
			<p class="mocha-ptlu-item-meta"><time>2015-11-17</time></p>
		</li>
		<li class="mocha-ptlu-item">
			<a href="" class="mocha-ptlu-item-a">
				<img width="100%" src="http://dummyimage.com/400x250/222/fff.png&amp;text=&lt;img&gt;" alt="" class="pic">
				<h4>视频标题显示在这里</h4>
			</a>
			<p class="mocha-ptlu-item-meta"><time>2015-11-17</time></p>
		</li>
	</ul>
</div>
```
</div>
#### 视频截图情况
<div class="demo-preview"><div class="box-w320"><div class="mocha-pictxt-list mocha-pictxt-list-scheme1 mocha-pictxt-list-skin1"><ul class="mocha-pictxt-list-ul"><li class="mocha-ptlu-item"><a href="" class="mocha-ptlu-item-a"><img width="100%" src="http://dummyimage.com/400x250/222/fff.png&text=<img>" alt="" class="pic" /><i class="icon-play"></i><h4>视频标题显示在这里视频标题显示在这里</h4></a><p class="mocha-ptlu-item-meta"><time>2015-11-17</time></p></li> <li class="mocha-ptlu-item"><a href="" class="mocha-ptlu-item-a"><img width="100%" src="http://dummyimage.com/400x250/222/fff.png&text=<img>" alt="" class="pic" /><i class="icon-play"></i><h4>视频标题显示在这里</h4></a><p class="mocha-ptlu-item-meta"><time>2015-11-17</time></p></li></ul></div></div>
``` html
<div class="mocha-pictxt-list mocha-pictxt-list-scheme1 mocha-pictxt-list-skin1">
	<ul class="mocha-pictxt-list-ul">
		<li class="mocha-ptlu-item">
			<a href="" class="mocha-ptlu-item-a">
				<img width="100%" src="http://dummyimage.com/400x250/222/fff.png&text=<img>" alt="" class="pic" />
				<i class="icon-play"></i>
				<h4>视频标题显示在这里视频标题显示在这里</h4>
			</a>
			<p class="mocha-ptlu-item-meta"><time>2015-11-17</time></p>
		</li>
		<li class="mocha-ptlu-item">
			<a href="" class="mocha-ptlu-item-a">
				<img width="100%" src="http://dummyimage.com/400x250/222/fff.png&text=<img>" alt="" class="pic" />
				<i class="icon-play"></i>
				<h4>视频标题显示在这里</h4>
			</a>
			<p class="mocha-ptlu-item-meta"><time>2015-11-17</time></p>
		</li>
	</ul>
</div>
```
</div>
### 样式2-左图右文`.mocha-pic-list-scheme2`
<div class="demo-preview"><div class="box-w320"><div class="mocha-pictxt-list mocha-pictxt-list-scheme2 mocha-pictxt-list-skin1"><ul class="mocha-pictxt-list-ul"><li class="mocha-ptlu-item"><a href="" class="mocha-ptlu-item-a"><img width="100%" src="http://dummyimage.com/400x250/222/fff.png&text=<img>" alt="" class="pic" /><h4>视频标题显示在这里视频标题显示在这里视频标题显示在这里</h4></a><p class="mocha-ptlu-item-meta"><time>2015-11-17</time><span>其它相关信息</span></p><p class="mocha-ptlu-item-meta"><span>分类：公告</span></p></li><li class="mocha-ptlu-item"><a href="" class="mocha-ptlu-item-a"><img width="100%" src="http://dummyimage.com/400x250/222/fff.png&text=<img>" alt="" class="pic" /><h4>视频标题显示在这里</h4></a><p class="mocha-ptlu-item-meta"><time>2015-11-17</time><span>其它相关信息</span></p><p class="mocha-ptlu-item-meta"><span>分类：公告</span></p></li></ul></div></div>
``` html
<div class="mocha-pictxt-list mocha-pictxt-list-scheme2 mocha-pictxt-list-skin1">
	<ul class="mocha-pictxt-list-ul">
		<li class="mocha-ptlu-item">
			<a href="" class="mocha-ptlu-item-a">
				<img width="100%" src="http://dummyimage.com/400x250/222/fff.png&text=<img>" alt="" class="pic" />
				<h4>视频标题显示在这里视频标题显示在这里视频标题显示在这里</h4>
			</a>
			<p class="mocha-ptlu-item-meta">
				<time>2015-11-17</time>
				<span>其它相关信息</span>
			</p>
			<p class="mocha-ptlu-item-meta">
				<span>分类：公告</span>
			</p>
		</li>
		<li class="mocha-ptlu-item">
			<a href="" class="mocha-ptlu-item-a">
				<img width="100%" src="http://dummyimage.com/400x250/222/fff.png&text=<img>" alt="" class="pic" />
				<h4>视频标题显示在这里</h4>
			</a>
			<p class="mocha-ptlu-item-meta">
				<time>2015-11-17</time>
				<span>其它相关信息</span>
			</p>
			<p class="mocha-ptlu-item-meta">
				<span>分类：公告</span>
			</p>
		</li>
	</ul>
</div>
```
</div>
### 样式3-左图右文+按钮`.mocha-pic-list-scheme3`
<div class="demo-preview"><div class="box-w320"><div class="mocha-pictxt-list mocha-pictxt-list-scheme3 mocha-pictxt-list-skin1"><ul class="mocha-pictxt-list-ul"><li class="mocha-ptlu-item"><a href="" class="mocha-ptlu-item-a"><img width="80" height="80" src="http://dummyimage.com/160x160/222/fff.png&text=<img>" alt="" class="pic" /><h4>标题显示在此（5个）</h4></a><p class="mocha-ptlu-item-meta"><span>消耗荣誉点：<em>150</em></span><span>剩余数量：<em>9999</em></span></p><div class="mocha-ptlu-item-btn"><a href="" class="mocha-button mocha-button-scheme1 mocha-button-skin1">兑换</a></div></li><li class="mocha-ptlu-item"><a href="" class="mocha-ptlu-item-a"><img width="80" height="80" src="http://dummyimage.com/160x160/222/fff.png&text=<img>" alt="" class="pic" /><h4>标题显示在此（5个）</h4></a><p class="mocha-ptlu-item-meta"><span>消耗荣誉点：<em>150</em></span><span>剩余数量：<em>9999</em></span></p><div class="mocha-ptlu-item-btn"><a href="" class="mocha-button mocha-button-scheme1 mocha-button-skin1">兑换</a></div></li></ul></div></div>
``` html
<div class="mocha-pictxt-list mocha-pictxt-list-scheme3 mocha-pictxt-list-skin1">
	<ul class="mocha-pictxt-list-ul">
		<li class="mocha-ptlu-item">
			<a href="" class="mocha-ptlu-item-a">
				<img width="80" height="80" src="http://dummyimage.com/160x160/222/fff.png&text=<img>" alt="" class="pic" />
				<h4>标题显示在此（5个）</h4>
			</a>
			<p class="mocha-ptlu-item-meta">
				<span>消耗荣誉点：<em>150</em></span>
				<span>剩余数量：<em>9999</em></span>
			</p>
			<div class="mocha-ptlu-item-btn">
				<a href="" class="mocha-button mocha-button-scheme1 mocha-button-skin1">兑换</a>
			</div>
		</li>
		<li class="mocha-ptlu-item">
			<a href="" class="mocha-ptlu-item-a">
				<img width="80" height="80" src="http://dummyimage.com/160x160/222/fff.png&text=<img>" alt="" class="pic" />
				<h4>标题显示在此（5个）</h4>
			</a>
			<p class="mocha-ptlu-item-meta">
				<span>消耗荣誉点：<em>150</em></span>
				<span>剩余数量：<em>9999</em></span>
			</p>
			<div class="mocha-ptlu-item-btn">
				<a href="" class="mocha-button mocha-button-scheme1 mocha-button-skin1">兑换</a>
			</div>
		</li>
	</ul>
</div>
```
</div>
### 修改模块皮肤CSS
模块的默认皮肤类`.mocha-pictxt-list-skin1`，您可以在您项目的`page.css`里修改`.mocha-pictxt-list-skin1`皮肤类，或者新增`.mocha-pictxt-list-skin2`。
``` css
/* skin */
.mocha-pictxt-list-skin1{font-size:0.14rem;}
.mocha-pictxt-list-skin1 .mocha-ptlu-item h4{color: #333;}
.mocha-pictxt-list-skin1 .mocha-ptlu-item-meta{color: #999;}
.mocha-pictxt-list-skin1.mocha-pictxt-list-scheme2 .mocha-ptlu-item{border-bottom-color:#ddd;}
```
