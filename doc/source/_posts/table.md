---
title: table
date: 2016-01-13 16:30:00
tags:
---

## table(表格样式)
作者：`kevinhehe`
版本：`v.1`
依赖：`mocha.css`

![table](http://game.gtimg.cn/images/js/mocha/images/demo/table.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/table/demo.html "table(表格样式)")

### 样式1 `.mocha-table-scheme1`
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

### 修改模块皮肤CSS 
模块的默认皮肤类`.mocha-table-skin1`，您可以在您项目的`page.css`里修改`.mocha-table-skin1`皮肤类，或者新增`.mocha-table-skin2`。
``` css
/* skin */
.mocha-table-skin1{font-size: .16rem;color: #000;}
.mocha-table-skin1 th{background-color: #1b1b1b;color: #fff;}
.mocha-table-skin1 tr:nth-child(odd){background-color: #bbb;}
.mocha-table-skin1 tr:nth-child(even){background-color: #fff;}
```