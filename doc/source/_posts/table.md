---
title: table(表格样式)
date: 2016-01-13 16:30:00
tags:
---
作者：`kevinhehe`
版本：`v.1`
依赖：`mocha.css`
<div class="demo-qrcode"><a id="QRcode" href="http://tgideas.github.io/mocha/demo/table/demo.html" target="_blank">点击运行Demo</a></div>
### 样式1 `.mocha-table-scheme1`
<div class="demo-preview"><div class="box-w320 box-h520"><table class="mocha-table mocha-table-scheme1 mocha-table-skin1"><tr><th>标题</th><th>标题</th><th>标题</th></tr><tr><td>内容</td><td>内容内容内容内容内容内容</td><td>内容</td></tr><tr><td>内容</td><td>内容内容内容</td><td>内容</td></tr><tr><td>内容</td><td>内容内容内容</td><td>内容</td></tr><tr><td>内容</td><td>内容内容内容</td><td>内容</td></tr></table></div>
``` html
<table class="mocha-table mocha-table-scheme1 mocha-table-skin1">
    <tr>
        <th>标题</th>
        <th>标题</th>
        <th>标题</th>
    </tr>
    <tr>
        <td>内容</td>
        <td>内容内容内容内容内容内容</td>
        <td>内容</td>
    </tr>
    <tr>
        <td>内容</td>
        <td>内容内容内容</td>
        <td>内容</td>
    </tr>
    <tr>
        <td>内容</td>
        <td>内容内容内容</td>
        <td>内容</td>
    </tr>
    <tr>
        <td>内容</td>
        <td>内容内容内容</td>
        <td>内容</td>
    </tr>
</table>
```
</div>
### 修改模块皮肤CSS 
模块的默认皮肤类`.mocha-table-skin1`，您可以在您项目的`page.css`里修改`.mocha-table-skin1`皮肤类，或者新增`.mocha-table-skin2`。
``` css
/* skin */
.mocha-table-skin1{font-size: .16rem;color: #000;}
.mocha-table-skin1 th{background-color: #1b1b1b;color: #fff;}
.mocha-table-skin1 tr:nth-child(odd){background-color: #bbb;}
.mocha-table-skin1 tr:nth-child(even){background-color: #fff;}
```