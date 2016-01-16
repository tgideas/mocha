---
title: menu
date: 2016-01-14 11:00:00
tags:
---

## menu(功能栏)
作者：`kevinhehe`
版本：`v.1`
依赖：`mocha.css`

![menu](http://game.gtimg.cn/images/js/mocha/images/demo/menu.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/menu/demo.html "menu(功能栏)")

### 样式1-有标题无图标及贴底 `.mocha-menu-scheme1`
``` html
<div class="mocha-menu mocha-menu-scheme1 mocha-menu-skin1">
    <ul>
        <li>
            <a href="javascript:;" title="游戏攻略"><i class="mocha-menu-icon style1">图标</i>游戏攻略</a>
        </li>
        <li>
            <a href="javascript:;" title="签到领礼"><i class="mocha-menu-icon">图标</i>签到领礼</a>
        </li>
        <li>
            <a href="javascript:;" title="游戏论坛"><i class="mocha-menu-icon">图标</i>游戏论坛</a>
        </li>
    </ul>
</div>
```

### 样式2-有标题及图标 `.mocha-menu-scheme2`
``` html
<div class="mocha-menu mocha-menu-scheme2 mocha-menu-skin1">
    <ul>
        <li>
            <a href="javascript:;" title="游戏攻略"><i class="mocha-menu-icon style1">图标</i>游戏攻略</a>
        </li>
        <li>
            <a href="javascript:;" title="签到领礼"><i class="mocha-menu-icon">图标</i>签到领礼</a>
        </li>
        <li>
            <a href="javascript:;" title="游戏论坛"><i class="mocha-menu-icon">图标</i>游戏论坛</a>
        </li>
    </ul>
</div>
```

### 样式3-有标题及图标上下结构 `.mocha-menu-scheme3`
``` html
<div class="mocha-menu mocha-menu-scheme3 mocha-menu-skin1">
    <ul>
        <li>
            <a href="javascript:;" title="精选"><i class="mocha-menu-icon style1">图标</i>精选</a>
        </li>
        <li>
            <a href="javascript:;" title="攻略"><i class="mocha-menu-icon">图标</i>攻略</a>
        </li>
        <li>
            <a href="javascript:;" title="个人"><i class="mocha-menu-icon">图标</i>个人</a>
        </li>
        <li>
            <a href="javascript:;" title="勋章"><i class="mocha-menu-icon">图标</i>勋章</a>
        </li>
    </ul>
</div> 
```

### 修改模块皮肤CSS 
模块的默认皮肤类`.mocha-menu-skin1`，您可以在您项目的`page.css`里修改`.mocha-menu-skin1`皮肤类，或者新增`.mocha-menu-skin2`。
``` css
/* skin */
.mocha-menu-skin1{font-size: .16rem;background-color: #717171;}
.mocha-menu-skin1 a{color: #fff;}
.mocha-menu-skin1 .mocha-menu-icon{background-color: #fff;}
```