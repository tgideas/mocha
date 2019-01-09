---
title: tab(选项卡)
date: 2016-01-10 19:46:20
tags:
---
作者：`sonichuang`
版本：`v.1`
依赖：`mocha.css` `zepto.js` `motion`
<div class="demo-qrcode"><a id="QRcode" href="http://tgideas.github.io/mocha/demo/tab/demo.html" target="_blank">点击运行Demo</a></div>

### 样式1 `.mocha-tab-scheme1`
<div class="demo-preview"><div class="box-w320"><div id="tabBox1" class="mocha-tab mocha-tab-scheme1 mocha-tab-skin1"><div class="mocha-tab-triggers"><ul class="mocha-tab-triggers-ul"><li class="current">页签1</li><li>页签2</li><li>页签3</li><li>页签4</li></ul></div><div class="mocha-tab-panels"><div class="mocha-tab-panel" style="display:block"><p>页签1内容区</p></div><div class="mocha-tab-panel"><p>页签2内容区</p></div><div class="mocha-tab-panel"><p>页签3内容区</p></div><div class="mocha-tab-panel"><p>页签4内容区</p></div></div></div></div>
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
<script src="http://game.gtimg.cn/images/js/zepto/zepto.min.js"></script>
<!-- 实例化:【点击式选择卡】 -->
<script src="http://game.gtimg.cn/images/js/motion/tab.min.js"></script>
<script>
$(function(){
	window.tab1 = new mo.Tab({
		target: $('#tabBox1 div.mocha-tab-panel'),
		controller: $('#tabBox1 .mocha-tab-triggers-ul li'),
		lazy: true
	});
});
</script>
```
</div>
### 样式2 `.mocha-tab-scheme2`
<div class="demo-preview"><div class="box-w320"><div id="tabBox2" class="mocha-tab mocha-tab-scheme2 mocha-tab-skin1"><div class="mocha-tab-triggers"><ul class="mocha-tab-triggers-ul"><li class="current">页签1</li><li>页签2</li><li>页签3</li><li>页签4</li></ul></div><div class="mocha-tab-panels"><div class="mocha-tab-panel" style="display:block"><p>页签1内容区</p></div><div class="mocha-tab-panel"><p>页签2内容区</p></div><div class="mocha-tab-panel"><p>页签3内容区</p></div><div class="mocha-tab-panel"><p>页签4内容区</p></div></div></div></div>
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
<script src="http://game.gtimg.cn/images/js/zepto/zepto.min.js"></script>
<!-- 实例化:【滑动式选择卡】 -->
<script src="http://game.gtimg.cn/images/js/motion/slide.v2.0.min.js"></script>
<script>
	$('#tabBox2 div.mocha-tab-panels').css("height",100);	//指定slider内容区高度
	tab2 = new mo.Slide({
		target: $('#tabBox2 div.mocha-tab-panel'),
		controller: $('#tabBox2 .mocha-tab-triggers-ul li'),
		direction: 'x',
		effect: 'slide',
		circle: true,
		autoPlay: false
	})	
</script>
```
</div>
### tab实例化JS
【点击式选择卡】依赖`zepto.js`和`motion`的[tab](http://tgideas.github.io/motion/doc/data/component/mo.Tab.html)组件
【滑动式选择卡】依赖`zepto.js`和`motion`的[slide](http://tgideas.github.io/motion/doc/data/component/mo.Slide.html)组件
``` html
<script src="http://game.gtimg.cn/images/js/zepto/zepto.min.js"></script>
<!-- 实例化:【点击式选择卡】 -->
<script src="http://game.gtimg.cn/images/js/motion/tab.min.js"></script>
<script>
$(function(){
	window.tab1 = new mo.Tab({
		target: $('#tabBox1 div.mocha-tab-panel'),
		controller: $('#tabBox1 .mocha-tab-triggers-ul li'),
		lazy: true
	});
});
</script>
<!-- 实例化:【滑动式选择卡】 -->
<script src="http://game.gtimg.cn/images/js/motion/slide.v2.0.min.js"></script>
<script>
	$('#tabBox2 div.mocha-tab-panels').css("height",100);	//指定slider内容区高度
	tab2 = new mo.Slide({
		target: $('#tabBox2 div.mocha-tab-panel'),
		controller: $('#tabBox2 .mocha-tab-triggers-ul li'),
		direction: 'x',
		effect: 'slide',
		circle: true,
		autoPlay: false
	})	
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