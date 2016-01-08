---
title: box
date: 2016-01-08 12:45:01
tags:
---

## box(盒模块)
作者：`sonichuang`
版本：`v.1`
依赖：`mocha.css`

![box](http://game.gtimg.cn/images/js/mocha/images/demo/box.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/box/demo.html "box(盒模块)")

### 样式1 `.mocha-box-scheme1`
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

### 您可以修改默认的`.mocha-box-skin1`皮肤类，或者在`page.css`新增`.mocha-box-skin2`
``` css
/* skin */
.mocha-box-skin1{font-size:0.16rem;color: #666;}
.mocha-box-skin1 .mocha-box-hd{background-color: #ddd;}
.mocha-box-skin1 .mocha-box-fd{border-top-color:#ddd;}
.mocha-box-skin1 .mocha-box-fd-more{color:#666;}
```