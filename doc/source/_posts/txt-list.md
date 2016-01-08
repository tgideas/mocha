---
title: txt-list
date: 2016-01-08 12:44:01
tags:
---

## txt-list(文字列表模块)
作者：`sonichuang`
版本：`v.1`
依赖：`mocha.css`

![txt-list](http://game.gtimg.cn/images/js/mocha/images/demo/txt-list.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/txt-list/demo.html "txt-list(文字列表模块)")

### 样式1-带图标 `.mocha-txt-list-scheme1`
``` html
<div class="mocha-txt-list mocha-txt-list-scheme1 mocha-txt-list-skin1">
	<ul class="mocha-txt-list-ul">
		<li class="mocha-tlu-item">
			<cite class="mocha-tlu-item-icon style1">公告</cite>
			<h4 class="mocha-tlu-item-title"><a href="#">11月新八本本爆料：木桩世界BOSS</a></h4>
			<p class="mocha-tlu-item-meta"><em>我叫MT运营团队</em><time>11/03</time></p>
		</li>
		<li class="mocha-tlu-item">
			<cite class="mocha-tlu-item-icon">公告</cite>
			<h4 class="mocha-tlu-item-title"><a href="#">11月新八本本爆料：木桩世界BOSS</a></h4>
			<p class="mocha-tlu-item-meta"><em>我叫MT运营团队</em><time>11/03</time></p>
		</li>
		<li class="mocha-tlu-item">
			<cite class="mocha-tlu-item-icon">公告</cite>
			<h4 class="mocha-tlu-item-title"><a href="#">11月新八本本爆料：木桩世界BOSS</a></h4>
			<p class="mocha-tlu-item-meta"><em>我叫MT运营团队</em><time>11/03</time></p>
		</li>
	</ul>
</div>
```

### 样式2 不带图标 `.mocha-txt-list-scheme2`
``` html
<div class="mocha-txt-list mocha-txt-list-scheme2 mocha-txt-list-skin1">
	<ul class="mocha-txt-list-ul">
		<li class="mocha-tlu-item">
			<cite class="mocha-tlu-item-icon style1">公告</cite>
			<h4 class="mocha-tlu-item-title"><a href="#">11月新八本本爆料：木桩世界BOSS</a></h4>
			<p class="mocha-tlu-item-meta"><em>我叫MT运营团队</em><time>11/03</time></p>
		</li>
		<li class="mocha-tlu-item">
			<cite class="mocha-tlu-item-icon">公告</cite>
			<h4 class="mocha-tlu-item-title"><a href="#">11月新八本本爆料：木桩世界BOSS</a></h4>
			<p class="mocha-tlu-item-meta"><em>我叫MT运营团队</em><time>11/03</time></p>
		</li>
		<li class="mocha-tlu-item">
			<cite class="mocha-tlu-item-icon">公告</cite>
			<h4 class="mocha-tlu-item-title"><a href="#">11月新八本本爆料：木桩世界BOSS</a></h4>
			<p class="mocha-tlu-item-meta"><em>我叫MT运营团队</em><time>11/03</time></p>
		</li>
	</ul>
</div>
```

### 样式3 显示一行 `.mocha-txt-list-scheme3`
``` html
<div class="mocha-txt-list mocha-txt-list-scheme3 mocha-txt-list-skin1">
	<ul class="mocha-txt-list-ul">
		<li class="mocha-tlu-item">
			<span class="mocha-tlu-item-sup"><a href="#">[玩家社区]</a></span>
			<h4 class="mocha-tlu-item-title"><a href="#">11月新八本本爆料：木桩世界BOSS</a></h4>
			<p class="mocha-tlu-item-meta"><time>11/03</time></p>
		</li>
		<li class="mocha-tlu-item">
			<span class="mocha-tlu-item-sup"><a href="#">[玩家社区]</a></span>
			<h4 class="mocha-tlu-item-title"><a href="#">11月新八本本爆料：木桩世界BOSS</a></h4>
			<p class="mocha-tlu-item-meta"><time>11/03</time></p>
		</li>
		<li class="mocha-tlu-item">
			<span class="mocha-tlu-item-sup"><a href="#">[玩家社区]</a></span>
			<h4 class="mocha-tlu-item-title"><a href="#">11月新八本本爆料：木桩世界BOSS</a></h4>
			<p class="mocha-tlu-item-meta"><time>11/03</time></p>
		</li>
	</ul>
</div>
```

### 您可以修改默认的`.mocha-txt-list-skin1`皮肤类，或者在`page.css`新增`.mocha-txt-list-skin2`
``` css
/* skin */
.mocha-txt-list-skin1{font-size:0.14rem;}
.mocha-txt-list-skin1 a:link,.mocha-txt-list-skin1 a:visited{color: #666;}
.mocha-txt-list-skin1 .mocha-tlu-item{border-bottom: 1px solid #ddd;}
.mocha-txt-list-skin1 .mocha-tlu-item-meta{color: #999;}
.mocha-txt-list-skin1 .mocha-tlu-item-icon{color: #fff;background-color: #00c2f5;}
.mocha-txt-list-skin1 .mocha-tlu-item-icon.style1{background-color: #f97d01;}
```