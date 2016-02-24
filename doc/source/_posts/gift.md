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
            <img src="http://dummyimage.com/290x107/000/fff" alt="">
            <p>礼品x1</p>
            <a href="javascript:;">领取礼包</a>
        </li>
    </ul>
</div>
```

### 样式2-1行2个 `.mocha-gift-scheme2`
``` html
<div class="mocha-gift mocha-gift-scheme2 mocha-gift-skin1">
    <ul>
        <li>
            <img src="http://dummyimage.com/290x107/000/fff" alt="">
            <p>礼品x1</p>
            <a href="javascript:;">领取礼包</a>
        </li>
        <li>
            <img src="http://dummyimage.com/290x107/000/fff" alt="">
            <p>礼品x1</p>
            <a href="javascript:;">领取礼包</a>
        </li>
    </ul>
</div>
```

### 样式3-1行3个 `.mocha-gift-scheme3`
``` html
<div class="mocha-gift mocha-gift-scheme3 mocha-gift-skin1">
    <ul>
        <li>
            <img src="http://dummyimage.com/290x107/000/fff" alt="">
            <p>礼品x1</p>
            <a href="javascript:;">领取礼包</a>
        </li>
        <li>
            <img src="http://dummyimage.com/290x107/000/fff" alt="">
            <p>礼品x1</p>
            <a href="javascript:;">领取礼包</a>
        </li>
        <li>
            <img src="http://dummyimage.com/290x107/000/fff" alt="">
            <p>礼品x1</p>
            <a href="javascript:;">领取礼包</a>
        </li>
    </ul>
</div>  
```

![gift](http://game.gtimg.cn/images/js/mocha/images/demo/gift2.png)

### 样式4-上图下字且多图一按钮 `.mocha-gift-scheme4`
``` html
<div class="mocha-gift mocha-gift-scheme3 mocha-gift-scheme4 mocha-gift-skin1">
    <ul>
        <li>
            <img src="http://dummyimage.com/290x107/000/fff" alt="">
            <p>礼品x1</p>
        </li>
        <li>
            <img src="http://dummyimage.com/290x107/000/fff" alt="">
            <p>礼品x1</p>
        </li>
        <li>
            <img src="http://dummyimage.com/290x107/000/fff" alt="">
            <p>礼品x1</p>
        </li>
    </ul>
    <ul>
        <li>
            <img src="http://dummyimage.com/290x107/000/fff" alt="">
            <p>礼品x1</p>
        </li>
        <li>
            <img src="http://dummyimage.com/290x107/000/fff" alt="">
            <p>礼品x1</p>
        </li>
        <li>
            <img src="http://dummyimage.com/290x107/000/fff" alt="">
            <p>礼品x1</p>
        </li>
    </ul>
    <a href="javascript:;">领取礼包</a>
</div>    
```

### 修改模块皮肤CSS 
模块的默认皮肤类`.mocha-gift-skin1`，您可以在您项目的`page.css`里修改`.mocha-gift-skin1`皮肤类，或者新增`.mocha-gift-skin2`。
``` css
/* skin */
.mocha-gift-skin1{font-size: .16em;}
.mocha-gift-skin1 p{font-size: .12em;}
.mocha-gift-skin1 a{color: #fff;background-color: #717171;}
```
