---
title: select(选单样式)
date: 2016-01-13 16:30:00
tags:
---
作者：`kevinhehe`
版本：`v.1`
依赖：`mocha.css`
<div class="demo-qrcode"><a id="QRcode" href="http://tgideas.github.io/mocha/demo/select/demo.html" target="_blank">点击运行Demo</a></div>
### 样式1-1行一个 `.mocha-select-scheme1`
<div class="demo-preview"><div class="box-w320"><div class="mocha-select mocha-select-scheme1 mocha-select-skin1"><select><option value="请选择省份">请选择省份</option></select><select><option value="请选择城市">请选择城市</option></select><div class="mocha-select-panel"><label for="">省份</label><select><option value="请选择省份">请选择省份</option></select></div><div class="mocha-select-panel"><label for="">城市</label><select><option value="请选择城市">请选择城市</option></select></div></div></div>
``` html
<div class="mocha-select mocha-select-scheme1 mocha-select-skin1">
    <select><option value="请选择省份">请选择省份</option></select>
    <select><option value="请选择城市">请选择城市</option></select>
    <div class="mocha-select-panel">
        <label for="">省份</label>
        <select><option value="请选择省份">请选择省份</option></select>
    </div>
    <div class="mocha-select-panel">
        <label for="">城市</label>
        <select><option value="请选择城市">请选择城市</option></select>
    </div>
</div>
```
</div>
### 样式2-1行2个 `.mocha-select-scheme2`
<div class="demo-preview"><div class="box-w320"><div class="mocha-select mocha-select-scheme2 mocha-select-skin1"><select><option value="请选择省份">请选择省份</option></select><select><option value="请选择城市">请选择城市</option></select><div class="mocha-select-panel"><label for="">省份</label><select><option value="请选择省份">请选择省份</option></select></div><div class="mocha-select-panel"><label for="">城市</label><select><option value="请选择城市">请选择城市</option></select></div></div></div>
``` html
<div class="mocha-select mocha-select-scheme2 mocha-select-skin1">
    <select><option value="请选择省份">请选择省份</option></select>
    <select><option value="请选择城市">请选择城市</option></select>
    <div class="mocha-select-panel">
        <label for="">省份</label>
        <select><option value="请选择省份">请选择省份</option></select>
    </div>
    <div class="mocha-select-panel">
        <label for="">城市</label>
        <select><option value="请选择城市">请选择城市</option></select>
    </div>
</div>  
```
</div>
### 样式3-1行3个 `.mocha-select-scheme3`
<div class="demo-preview"><div class="box-w320"><div class="mocha-select mocha-select-scheme3 mocha-select-skin1"><select><option value="请选择省份">请选择省份</option></select><select><option value="请选择城市">请选择城市</option></select><select><option value="请选择城市">请选择城市</option></select><div class="mocha-select-panel"><label for="">省份</label><select><option value="请选择省份">请选择省份</option></select></div><div class="mocha-select-panel"><label for="">城市</label><select><option value="请选择城市">请选择城市</option></select></div><div class="mocha-select-panel"><label for="">城市</label><select><option value="请选择城市">请选择城市</option></select></div></div></div>
``` html
<div class="mocha-select mocha-select-scheme3 mocha-select-skin1">
    <select><option value="请选择省份">请选择省份</option></select>
    <select><option value="请选择城市">请选择城市</option></select>
    <select><option value="请选择城市">请选择城市</option></select>
    <div class="mocha-select-panel">
        <label for="">省份</label>
        <select><option value="请选择省份">请选择省份</option></select>
    </div>
    <div class="mocha-select-panel">
        <label for="">城市</label>
        <select><option value="请选择城市">请选择城市</option></select>
    </div>
    <div class="mocha-select-panel">
        <label for="">城市</label>
        <select><option value="请选择城市">请选择城市</option></select>
    </div>
</div>     
```
</div>
### 样式4-1行1个左字右控件 `.mocha-select-scheme4`
<div class="demo-preview"><div class="box-w320"><div class="mocha-select mocha-select-scheme4 mocha-select-skin1"><div class="mocha-select-panel"><label for="">请选择大区:</label><select><option value="请选择省份">请选择省份</option></select></div><div class="mocha-select-panel"><label for="">选择大区:</label><select><option value="请选择城市">请选择城市</option></select></div></div></div>
``` html
<div class="mocha-select mocha-select-scheme4 mocha-select-skin1">
    <div class="mocha-select-panel">
        <label for="">请选择大区:</label>
        <select><option value="请选择省份">请选择省份</option></select>
    </div>
    <div class="mocha-select-panel">
        <label for="">选择大区:</label>
        <select><option value="请选择城市">请选择城市</option></select>
    </div>
</div>    
```
</div>
### 样式5-1行2个左字右控件 `.mocha-select-scheme5`
<div class="demo-preview"><div class="box-w320"><div class="mocha-select mocha-select-scheme5 mocha-select-skin1"><div class="mocha-select-panel"><label for="">请选择大区:</label><select><option value="请选择省份">请选择省份</option></select><select><option value="请选择城市">请选择城市</option></select></div><div class="mocha-select-panel"><label for="">选择大区:</label><select><option value="请选择城市">请选择城市</option></select><select><option value="请选择城市">请选择城市</option></select></div></div> </div>
``` html
<div class="mocha-select mocha-select-scheme5 mocha-select-skin1">
    <div class="mocha-select-panel">
        <label for="">请选择大区:</label>
        <select><option value="请选择省份">请选择省份</option></select>
        <select><option value="请选择城市">请选择城市</option></select>
    </div>
    <div class="mocha-select-panel">
        <label for="">选择大区:</label>
        <select><option value="请选择城市">请选择城市</option></select>
        <select><option value="请选择城市">请选择城市</option></select>
    </div>
</div>   
```
</div>
### 修改模块皮肤CSS 
模块的默认皮肤类`.mocha-select-skin1`，您可以在您项目的`page.css`里修改`.mocha-select-skin1`皮肤类，或者新增`.mocha-select-skin2`。
``` css
/* skin */
.mocha-select-skin1 select{font-size:0.12rem;color:#000;border-color:#65655b;}
```