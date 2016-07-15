---
title: progress(进度条)
date: 2016-01-13 16:30:00
tags:
---
作者：`kevinhehe`
版本：`v.1`
依赖：`mocha.css`
<div class="demo-qrcode"><a id="QRcode" href="http://tgideas.github.io/mocha/demo/progress/demo.html" target="_blank">点击运行Demo</a></div>
### 样式1-无动图 `.mocha-progress-scheme1`
<div class="demo-preview"><div class="box-w320"><div class="mocha-progress mocha-progress-scheme1 mocha-progress-skin1"><div class="mocha-progress-bar"><span class="mocha-progress-bar-bg" style="-webkit-transform:translate(30%,0)"></span><p class="mocha-progress-num">30%</p></div></div></div>
``` html
<div class="mocha-progress mocha-progress-scheme1 mocha-progress-skin1">
    <div class="mocha-progress-bar">
        <span class="mocha-progress-bar-bg" style="-webkit-transform: translate(30%,0);"></span>
        <p class="mocha-progress-num">30%</p>
    </div>
</div>
```
</div>
### 样式2-有动图 `.mocha-progress-scheme2`
<div class="demo-preview"><div class="box-w320"><div class="mocha-progress mocha-progress-scheme2 mocha-progress-skin1"><img class="mocha-progress-img" src="http://mpt.webplat.ied.com/img.php?120*60" alt="动图"><div class="mocha-progress-bar"><span class="mocha-progress-bar-bg" style="-webkit-transform:translate(50%,0)"></span><p class="mocha-progress-num">50%</p></div></div></div>
``` html
<div class="mocha-progress mocha-progress-scheme2 mocha-progress-skin1">
    <img class="mocha-progress-img" src="http://mpt.webplat.ied.com/img.php?120*60" alt="动图">
    <div class="mocha-progress-bar">
        <span class="mocha-progress-bar-bg" style="-webkit-transform: translate(50%,0);"></span>
        <p class="mocha-progress-num">50%</p>
    </div>
</div>
```
</div>
### 修改模块皮肤CSS 
模块的默认皮肤类`.mocha-progress-skin1`，您可以在您项目的`page.css`里修改`.mocha-progress-skin1`皮肤类，或者新增`.mocha-progress-skin2`。
``` css
/* skin */
.mocha-progress-skin1{font-size: .16rem;}
.mocha-progress-skin1 .mocha-progress-bar{background-color: #bbb;}
.mocha-progress-skin1 .mocha-progress-bar-bg{background-color: #009dfe;}
```
