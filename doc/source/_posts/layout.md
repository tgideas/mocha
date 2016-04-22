---
title: layout
date: 2016-04-22 15:45:38
tags:
---

## layout(布局模块)
作者：`sonichuang`
版本：`v.1`
依赖：`mocha.css`

### 左右布局 `.mocha-layout-scheme1`
![左右布局](http://game.gtimg.cn/images/js/mocha/images/demo/layout1.png)
### [运行Demo](http://tgideas.github.io/mocha/demo/layout/demo.html "layout(布局模块)")
### 左右布局 - 左2右2
``` html
<div class="mocha-layout mocha-layout-scheme1">
	<div class="mocha-layout-flex">
		<div class="mocha-layout-box">A</div>
		<div class="mocha-layout-box">B</div>
	</div>
	<div class="mocha-layout-flex">
		<div class="mocha-layout-box">C</div>
		<div class="mocha-layout-box">D</div>
	</div>
</div>
```
### 左右布局 - 左2右1
``` html
<div class="mocha-layout mocha-layout-scheme1">
	<div class="mocha-layout-flex">
		<div class="mocha-layout-box">A</div>
		<div class="mocha-layout-box">B</div>
	</div>
	<div class="mocha-layout-flex">
		<div class="mocha-layout-box">C</div>
	</div>
</div>
```
### 左右布局 - 左1右2
``` html
<div class="mocha-layout mocha-layout-scheme1">
	<div class="mocha-layout-flex">
		<div class="mocha-layout-box">A</div>
	</div>
	<div class="mocha-layout-flex">
		<div class="mocha-layout-box">B</div>
		<div class="mocha-layout-box">C</div>
	</div>
</div>
```
### 左右布局 - 左右非等分
![左右布局](http://game.gtimg.cn/images/js/mocha/images/demo/layout2.png)
### [运行Demo](http://tgideas.github.io/mocha/demo/layout/demo.html "layout(布局模块)")

#### 左右1:2 `.mocha-layout-row-1-2`
``` html
<div class="mocha-layout mocha-layout-scheme1 mocha-layout-row-1-2">
	<div class="mocha-layout-flex">
		<div class="mocha-layout-box">A</div>
	</div>
	<div class="mocha-layout-flex">
		<div class="mocha-layout-box">B</div>
	</div>
</div>
```
#### 左右2:3 `.mocha-layout-row-2-3`
``` html
<div class="mocha-layout mocha-layout-scheme1 mocha-layout-row-2-3">
	<div class="mocha-layout-flex">
		<div class="mocha-layout-box">A</div>
	</div>
	<div class="mocha-layout-flex">
		<div class="mocha-layout-box">B</div>
	</div>
</div>
```
#### 左右3:2 `.mocha-layout-row-3-2`
``` html
<div class="mocha-layout mocha-layout-scheme1 mocha-layout-row-3-2">
	<div class="mocha-layout-flex">
		<div class="mocha-layout-box">A</div>
	</div>
	<div class="mocha-layout-flex">
		<div class="mocha-layout-box">B</div>
	</div>
</div>
```
#### 左右2:1 `.mocha-layout-row-2-1`
``` html
<div class="mocha-layout mocha-layout-scheme1 mocha-layout-row-2-1">
	<div class="mocha-layout-flex">
		<div class="mocha-layout-box">A</div>
	</div>
	<div class="mocha-layout-flex">
		<div class="mocha-layout-box">B</div>
	</div>
</div>
```

### 上下布局 `.mocha-layout-scheme2`
![上下布局](http://game.gtimg.cn/images/js/mocha/images/demo/layout3.png)
### [运行Demo](http://tgideas.github.io/mocha/demo/layout/demo.html "layout(布局模块)")
### 上下布局 上2下1
``` html
<div class="mocha-layout mocha-layout-scheme2">
	<div class="mocha-layout-flex">
		<div class="mocha-layout-box">A</div>
		<div class="mocha-layout-box">B</div>
	</div>
	<div class="mocha-layout-flex">
		<div class="mocha-layout-box">C</div>
	</div>
</div>
```
### 上下布局 上1下2
``` html
<div class="mocha-layout mocha-layout-scheme2">
	<div class="mocha-layout-flex">
		<div class="mocha-layout-box">A</div>	
	</div>
	<div class="mocha-layout-flex">
		<div class="mocha-layout-box">B</div>
		<div class="mocha-layout-box">C</div>
	</div>
</div>
```
### 上下布局 - 左右非等分
![上下布局](http://game.gtimg.cn/images/js/mocha/images/demo/layout4.png)
### [运行Demo](http://tgideas.github.io/mocha/demo/layout/demo.html "layout(布局模块)")
#### 左右1:2 `.mocha-layout-row-1-2`
``` html
<div class="mocha-layout mocha-layout-scheme2">
	<div class="mocha-layout-flex">
		<div class="mocha-layout-box">A</div>	
	</div>
	<div class="mocha-layout-flex mocha-layout-row-1-2">
		<div class="mocha-layout-box">B</div>
		<div class="mocha-layout-box">C</div>
	</div>
</div>
```
#### 左右2:3 `.mocha-layout-row-2-3`
``` html
<div class="mocha-layout mocha-layout-scheme2">
	<div class="mocha-layout-flex">
		<div class="mocha-layout-box">A</div>	
	</div>
	<div class="mocha-layout-flex mocha-layout-row-2-3">
		<div class="mocha-layout-box">B</div>
		<div class="mocha-layout-box">C</div>
	</div>
</div>
```
#### 左右3:2 `.mocha-layout-row-3-2`
``` html
<div class="mocha-layout mocha-layout-scheme2">
	<div class="mocha-layout-flex">
		<div class="mocha-layout-box">A</div>	
	</div>
	<div class="mocha-layout-flex mocha-layout-row-3-2">
		<div class="mocha-layout-box">B</div>
		<div class="mocha-layout-box">C</div>
	</div>
</div>
```
#### 左右2:1 `.mocha-layout-row-2-1`
``` html
<div class="mocha-layout mocha-layout-scheme2">
	<div class="mocha-layout-flex">
		<div class="mocha-layout-box">A</div>	
	</div>
	<div class="mocha-layout-flex mocha-layout-row-2-1">
		<div class="mocha-layout-box">B</div>
		<div class="mocha-layout-box">C</div>
	</div>
</div>
```
