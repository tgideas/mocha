---
title: loading
date: 2016-01-13 16:30:00
tags:
---

## loading(进度条)
作者：`kevinhehe`
版本：`v.1`
依赖：`mocha.css`

![loading](http://game.gtimg.cn/images/js/mocha/images/demo/loading.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/loading/demo.html "loading(进度条)")

### 样式1-无动图 `.mocha-loading-scheme1`
``` html
<div class="mocha-loading mocha-loading-scheme1 mocha-loading-skin1">
    <div class="mocha-loading-bar">
        <span class="mocha-loading-bar-bg" style="-webkit-transform: translate(30%,0);"></span>
        <p class="mocha-loading-num">30%</p>
    </div>
</div>
```

### 样式2-有动图 `.mocha-loading-scheme2`
``` html
<div class="mocha-loading mocha-loading-scheme2 mocha-loading-skin1">
    <img class="mocha-loading-img" src="http://mpt.webplat.ied.com/img.php?120*60" alt="动图">
    <div class="mocha-loading-bar">
        <span class="mocha-loading-bar-bg" style="-webkit-transform: translate(50%,0);"></span>
        <p class="mocha-loading-num">50%</p>
    </div>
</div>
```

### 修改模块皮肤CSS 
模块的默认皮肤类`.mocha-loading-skin1`，您可以在您项目的`page.css`里修改`.mocha-loading-skin1`皮肤类，或者新增`.mocha-loading-skin2`。
``` css
/* skin */
.mocha-loading-skin1{font-size: .16rem;}
.mocha-loading-skin1 .mocha-loading-bar{background-color: #bbb;}
.mocha-loading-skin1 .mocha-loading-bar-bg{background-color: #009dfe;}
```
