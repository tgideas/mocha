---
title: tab
date: 2016-01-10 19:46:20
tags:
---

## tab(选项卡模块)
作者：`sonichuang`
版本：`v.1`
依赖：`mocha.css` `zepto.js` `motion`

![tab](http://game.gtimg.cn/images/js/mocha/images/demo/tab.png)
### [运行Demo](http://tgideas.github.io/mocha/demo/tab/demo.html "tab(选项卡模块)")

### 样式1 `.mocha-tab-scheme1`
``` html
<div id="tabBox1" class="mocha-tab mocha-tab-scheme1 mocha-tab-skin1">
	<div class="mocha-tab-triggers">
		<ul class="mocha-tab-triggers-ul">
			<li class="current">页签1</li>
			<li>页签2</li>
			<li>页签3</li>
			<li>页签4</li>
		</ul>
	</div>
	<div class="mocha-tab-panels">
		<div class="mocha-tab-panel" style="display:block">
			<p>页签1内容区</p>
		</div>
		<div class="mocha-tab-panel">
			<p>页签2内容区</p>
		</div>
		<div class="mocha-tab-panel">
			<p>页签3内容区</p>
		</div>
		<div class="mocha-tab-panel">
			<p>页签4内容区</p>
		</div>
	</div>
</div>
```

### 样式2 `.mocha-tab-scheme2`
``` html
<div id="tabBox2" class="mocha-tab mocha-tab-scheme2 mocha-tab-skin1">
	<div class="mocha-tab-triggers">
		<ul class="mocha-tab-triggers-ul">
			<li class="current">页签1</li>
			<li>页签2</li>
			<li>页签3</li>
			<li>页签4</li>
		</ul>
	</div>
	<div class="mocha-tab-panels">
		<div class="mocha-tab-panel" style="display:block">
			<p>页签1内容区</p>
		</div>
		<div class="mocha-tab-panel">
			<p>页签2内容区</p>
		</div>
		<div class="mocha-tab-panel">
			<p>页签3内容区</p>
		</div>
		<div class="mocha-tab-panel">
			<p>页签4内容区</p>
		</div>
	</div>
</div>
```

### tab实例化JS
依赖`zepto.js`和`motion`的[tab](http://tgideas.github.io/motion/doc/data/component/mo.Tab.html)组件
``` html
<script src="http://game.gtimg.cn/images/js/zepto/zepto.min.js"></script>
<script src="http://game.gtimg.cn/images/js/motion/tab.min.js"></script>
<script>
// 实例化页签功能
$(function(){
	window.tab1 = new mo.Tab({
		target: $('#tabBox1 div.mocha-tab-panel'),
		controller: $('#tabBox1 .mocha-tab-triggers-ul li')
		// lazy: true
	});
	window.tab2 = new mo.Tab({
		target: $('#tabBox2 div.mocha-tab-panel'),
		controller: $('#tabBox2 .mocha-tab-triggers-ul li'),
		lazy: true
	});
});
</script>
```

### 修改模块皮肤CSS 
模块的默认皮肤类`.mocha-tab-skin1`，您可以在您项目的`page.css`里修改`.mocha-tab-skin1`皮肤类，或者新增`.mocha-tab-skin2`。
``` css
/* skin */
.mocha-tab-skin1{font-size:0.16rem;}
.mocha-tab-skin1 .mocha-tab-triggers{background-color: #ddd;}
.mocha-tab-scheme1.mocha-tab-skin1 .mocha-tab-triggers-ul .current{color: #fff;background-color: #09f;border-left:none;}
.mocha-tab-scheme2.mocha-tab-skin1 .mocha-tab-triggers-ul .current{color: #09f;font-weight: bold;border-color:#09f;}
```