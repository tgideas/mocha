---
title: gift
date: 2016-01-13 16:30:00
tags:
---

## gift(领取礼包模块)
作者：`kevinhehe`
版本：`v.1`
依赖：`mocha.css`

![gift](http://game.gtimg.cn/images/js/mocha/images/demo/gift.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/gift/demo.html "gift(领取礼包模块)")

### 样式1-1行1个 `.mocha-gift-scheme1`
``` html
<div class="mocha-gift mocha-gift-scheme1 mocha-gift-skin1">
    <ul>
        <li>
            <div class="mocha-gift-box">
                <img src="http://dummyimage.com/290x107/000/fff" width="100%" height="100%" alt="">
            </div>
            <p>礼品x1</p>
            <a href="javascript:;" class="mocha-gift-btn">领取礼包</a>
        </li>
    </ul>
</div>
```

### 样式2-1行2个 `.mocha-gift-scheme2`
``` html
<div class="mocha-gift mocha-gift-scheme2 mocha-gift-skin1">
    <ul>
        <li>
            <div class="mocha-gift-box">
                <img src="http://dummyimage.com/290x107/000/fff" width="100%" height="100%" alt="">
            </div>
            <p>礼品x1</p>
            <a href="javascript:;" class="mocha-gift-btn">领取礼包</a>
        </li>
        <li>
            <div class="mocha-gift-box">
                <img src="http://dummyimage.com/290x107/000/fff" width="100%" height="100%" alt="">
            </div>
            <p>礼品x1</p>
            <a href="javascript:;" class="mocha-gift-btn">领取礼包</a>
        </li>
    </ul>
</div>
```

### 样式3-1行3个 `.mocha-gift-scheme3`
``` html
<div class="mocha-gift mocha-gift-scheme3 mocha-gift-skin1">
    <ul>
        <li>
            <div class="mocha-gift-box">
                <img src="http://dummyimage.com/290x107/000/fff" width="100%" height="100%" alt="">
            </div>
            <p>礼品x1</p>
            <a href="javascript:;" class="mocha-gift-btn">领取礼包</a>
        </li>
        <li>
            <div class="mocha-gift-box">
                <img src="http://dummyimage.com/290x107/000/fff" width="100%" height="100%" alt="">
            </div>
            <p>礼品x1</p>
            <a href="javascript:;" class="mocha-gift-btn">领取礼包</a>
        </li>
        <li>
            <div class="mocha-gift-box">
                <img src="http://dummyimage.com/290x107/000/fff" width="100%" height="100%" alt="">
            </div>
            <p>礼品x1</p>
            <a href="javascript:;" class="mocha-gift-btn">领取礼包</a>
        </li>
    </ul>
</div> 
```

### 样式4-1行4个 `.mocha-gift-scheme4`
``` html
<div class="mocha-gift mocha-gift-scheme4 mocha-gift-skin1">
    <ul>
        <li>
            <div class="mocha-gift-box">
                <img src="http://dummyimage.com/290x107/000/fff" width="100%" height="100%" alt="">
            </div>
            <p>礼品x1</p>
            <a href="javascript:;" class="mocha-gift-btn">领取礼包</a>
        </li>
        <li>
            <div class="mocha-gift-box">
                <img src="http://dummyimage.com/290x107/000/fff" width="100%" height="100%" alt="">
            </div>
            <p>礼品x1</p>
            <a href="javascript:;" class="mocha-gift-btn">领取礼包</a>
        </li>
        <li>
            <div class="mocha-gift-box">
                <img src="http://dummyimage.com/290x107/000/fff" width="100%" height="100%" alt="">
            </div>
            <p>礼品x1</p>
            <a href="javascript:;" class="mocha-gift-btn">领取礼包</a>
        </li>
        <li>
            <div class="mocha-gift-box">
                <img src="http://dummyimage.com/290x107/000/fff" width="100%" height="100%" alt="">
            </div>
            <p>礼品x1</p>
            <a href="javascript:;" class="mocha-gift-btn">领取礼包</a>
        </li>
    </ul>
</div> 
```

![gift](http://game.gtimg.cn/images/js/mocha/images/demo/gift2.png)

### 样式5-上图下字和一按钮 ,`.mocha-gift-scheme1~3`控制每行显示礼包的数量  (1到3个)，`.mocha-gift-scheme5`控制的是上图下字。以上图为例，需添加`.mocha-gift-scheme3`+`.mocha-gift-scheme5`方可实现。
``` html
<div class="mocha-gift mocha-gift-scheme3 mocha-gift-scheme5 mocha-gift-skin1">
    <ul>
        <li>
            <div class="mocha-gift-box">
                <img src="http://dummyimage.com/290x107/000/fff" width="100%" height="100%" alt="">
            </div>
            <p>礼品礼品礼品礼品礼品礼品x1</p>
        </li>
        <li>
            <div class="mocha-gift-box">
                <img src="http://dummyimage.com/290x107/000/fff" width="100%" height="100%" alt="">
            </div>
            <p>礼品x1</p>
        </li>
        <li>
            <div class="mocha-gift-box">
                <img src="http://dummyimage.com/290x107/000/fff" width="100%" height="100%" alt="">
            </div>
            <p>礼品x1</p>
        </li>
        <li>
            <div class="mocha-gift-box">
                <img src="http://dummyimage.com/290x107/000/fff" width="100%" height="100%" alt="">
            </div>
            <p>礼品x1</p>
        </li>
        <li>
            <div class="mocha-gift-box">
                <img src="http://dummyimage.com/290x107/000/fff" width="100%" height="100%" alt="">
            </div>
            <p>礼品x1</p>
        </li>
        <li>
            <div class="mocha-gift-box">
                <img src="http://dummyimage.com/290x107/000/fff" width="100%" height="100%" alt="">
            </div>
            <p>礼品x1</p>
        </li>
    </ul>
    <a href="javascript:;" class="mocha-gift-btn">领取礼包</a>
</div>      
```

![gift](http://game.gtimg.cn/images/js/mocha/images/demo/gift3.png)

### 样式6-礼包签到,在样式4的基础上对li添加类名`.act`为当前标识样式，对按钮添加类名`.mocha-gift-btn-disabled`为按钮灰化样式。
``` html
<div class="mocha-gift mocha-gift-scheme3 mocha-gift-scheme5 mocha-gift-skin1">
    <ul>
        <li class="act">
            <p>第一天</p>
            <div class="mocha-gift-box">
                <img src="http://dummyimage.com/290x107/000/fff" width="100%" height="100%" alt="">
            </div>
            <p>礼品礼品礼品礼品礼品礼品x1</p>
        </li>
        <li class="act">
            <p>第二天</p>
            <div class="mocha-gift-box">
                <img src="http://dummyimage.com/290x107/000/fff" width="100%" height="100%" alt="">
            </div>
            <p>礼品x1</p>
        </li>
        <li>
            <p>第三天</p>
            <div class="mocha-gift-box">
                <img src="http://dummyimage.com/290x107/000/fff" width="100%" height="100%" alt="">
            </div>
            <p>礼品x1</p>
        </li>
        <li>
            <p>第四天</p>
            <div class="mocha-gift-box">
                <img src="http://dummyimage.com/290x107/000/fff" width="100%" height="100%" alt="">
            </div>
            <p>礼品x1</p>
        </li>
        <li>
            <p>第五天</p>
            <div class="mocha-gift-box">
                <img src="http://dummyimage.com/290x107/000/fff" width="100%" height="100%" alt="">
            </div>
            <p>礼品x1</p>
        </li>
    </ul>
    <a href="javascript:;" class="mocha-gift-btn mocha-gift-btn-disabled">领取礼包</a>
</div>  
```

### 修改模块皮肤CSS 
模块的默认皮肤类`.mocha-gift-skin1`，您可以在您项目的`page.css`里修改`.mocha-gift-skin1`皮肤类，或者新增`.mocha-gift-skin2`。
``` css
/* skin */
.mocha-gift-scheme1 li{width: 100%;}
.mocha-gift-scheme1 li:last-child{margin-right: 0;}
.mocha-gift-scheme2 li{width: 48.25%;}
.mocha-gift-scheme2 li:nth-child(even){margin-right: 0;}
.mocha-gift-scheme3 li{width: 31%;}
.mocha-gift-scheme3 li:nth-child(3n){margin-right: 0;}
.mocha-gift-scheme4 p{display: block;}
/* skin */
.mocha-gift-skin1{font-size: .16rem;}
.mocha-gift-skin1 p{font-size: .12rem;}
.mocha-gift-skin1 .mocha-gift-btn{font-size: .16rem;color: #fff;background-color: #04BE02;}
.mocha-gift-skin1 .mocha-gift-btn-disabled{background-color: #717171;}
```
