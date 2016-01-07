---
title: button
date: 2016-01-04 17:45:01
tags:
---

## 按钮模块
作者：`sonichuang`
版本：`v.1`
依赖：`mocha.css`

### 样式1-图片加文字



#### 一行html
``` html
<!--!1行一个按钮-->
<h3 class="h3">1行1个</h3>
<p style="width:90%;font-size:0;margin:0 auto;">
	<a href="javascript:;" class="mocha-button mocha-button-scheme1 mocha-button-skin1">主按钮</a>
</p>

<h3 class="h3">1行2个</h3>
<p style="width:90%;font-size:0;margin:0 auto;text-align:justify">
	<a href="javascript:;" class="mocha-button mocha-button-scheme2 mocha-button-skin1">次按钮1</a>
	<a href="javascript:;" class="mocha-button mocha-button-scheme2 mocha-button-skin1">次按钮2</a>
</p>

<h3 class="h3">1行3个</h3>
<p style="width:90%;font-size:0;margin:0 auto;text-align:justify">
	<a href="javascript:;" class="mocha-button mocha-button-scheme3 mocha-button-skin1">次按钮1</a>
	<a href="javascript:;" class="mocha-button mocha-button-scheme3 mocha-button-skin1">次按钮2</a>
	<a href="javascript:;" class="mocha-button mocha-button-scheme3 mocha-button-skin1 mocha-button-disable">次按钮3</a>
</p>

<h3 class="h3">1行多个按钮</h3>
<p style="width:90%;font-size:0;margin:0 auto;text-align:justify">
	<a href="javascript:;" class="mocha-button mocha-button-scheme4 mocha-button-skin1">按钮1</a>
	<a href="javascript:;" class="mocha-button mocha-button-scheme4 mocha-button-skin1">按钮2</a>
	<a href="javascript:;" class="mocha-button mocha-button-scheme4 mocha-button-skin1">按钮3</a>
	<a href="javascript:;" class="mocha-button mocha-button-scheme4 mocha-button-skin1 mocha-button-disable">按钮4</a>
</p>
```


#### 您可以修改默认的`.mocha-button-skin1`皮肤类，或者新增
``` css
/* skin */
.mocha-button-skin1{font-size:0.16rem;color: #fff;background-color: #ee3e45;border-radius:0.032rem;box-shadow:inset 0 -0.03rem 0 #be3237;}
.mocha-button-skin1:active{background-color: #be3237;box-shadow:inset 0 0.03rem 0 #9d2c2c;}
.mocha-button-skin1.mocha-button-disable{background-color: #898989;box-shadow:inset 0 -0.03rem 0 #6f6f6f;}
```
