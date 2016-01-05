---
title: my first post
date: 2016-01-04 17:45:01
tags:
---

## 图文模块
作者：`sonichuang`
版本：`v.1`
依赖：`/css/mocha.css`

### 样式1-图片加文字



<p style="width:90%;margin:0 auto;text-align:justify">
	<a href="javascript:;" class="mocha-button mocha-button-scheme3 mocha-button-skin1">次按钮1</a>
</p>

#### html
``` html
<p style="width:90%;font-size:0;margin:0 auto;text-align:justify">
	<a href="javascript:;" class="mocha-button mocha-button-scheme3 mocha-button-skin1">次按钮1</a>
	<a href="javascript:;" class="mocha-button mocha-button-scheme3 mocha-button-skin1">次按钮2</a>
	<a href="javascript:;" class="mocha-button mocha-button-scheme3 mocha-button-skin1 mocha-button-disable">次按钮3</a>
</p>
```
#### css
``` css
.mocha-button{line-height:0.4rem;text-align: center;}
	/* scheme */
	.mocha-button-scheme1{display:block;width: 100%;}
	.mocha-button-scheme2{display:inline-block;width:48%;margin-right:2%;}
	.mocha-button-scheme3{display:inline-block;width:32%;margin-right:1%;}
	.mocha-button-scheme4{display:inline-block;margin-right:1%;padding:0 0.08rem;}
	/* skin */
	.mocha-button-skin1{font-size:0.16rem;color: #fff;background-color: #ee3e45;border-radius:0.032rem;box-shadow:inset 0 -0.03rem 0 #be3237;}
	.mocha-button-skin1:active{background-color: #be3237;box-shadow:inset 0 0.03rem 0 #9d2c2c;}
	.mocha-button-skin1.mocha-button-disable{background-color: #898989;box-shadow:inset 0 -0.03rem 0 #6f6f6f;}
```
