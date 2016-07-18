---
title: data-user(用户资料)
date: 2016-03-31 21:00:00
tags:
---
作者：`kevinhehe`
版本：`v.1`
依赖：`mocha.css`
<div class="demo-qrcode"><a id="QRcode" href="http://tgideas.github.io/mocha/demo/data-user/demo.html" target="_blank">点击运行Demo</a></div>
### 样式1-资料位1个 `.mocha-data-user-scheme1`
<div class="demo-preview"><div class="box-w320"><img src="http://ossweb-img.qq.com/images/js/mocha/images/demo/data-user1.png" alt="样式1-资料位1个"></div>
``` html
<div class="mocha-data-user mocha-data-user-scheme1 mocha-data-user-skin1">
    <div class="mocha-data-user-hd">
        <div class="mocha-data-user-img"><img src="http://dummyimage.com/100x100/222/fff.png&text=head" alt="头像"></div>
        <div class="mocha-data-user-content">
            <span class="mocha-data-user-level">Lv.51</span>
            <h1 class="mocha-data-user-name">哟呵123</h1>
        </div>
    </div>
    <div class="mocha-data-user-bd">
        <div class="mocha-data-user-box">
            <p>战斗力</p>
            <span class="mocha-data-user-num">6186</span>
        </div>
    </div>
    <div class="mocha-data-user-btn">
        <a href="javascript:;">跳转按钮<i class="mocha-data-user-ui"></i></a>
    </div>
</div>
```
</div>
### 样式2-资料位2个 `.mocha-data-user-scheme2`
<div class="demo-preview"><div class="box-w320"><img src="http://ossweb-img.qq.com/images/js/mocha/images/demo/data-user2.png" alt="样式2-资料位2个"></div>
``` html
<div class="mocha-data-user mocha-data-user-scheme2 mocha-data-user-skin1">
    <div class="mocha-data-user-hd">
        <div class="mocha-data-user-img"><img src="http://dummyimage.com/100x100/222/fff.png&text=head" alt="头像"></div>
        <div class="mocha-data-user-content">
            <span class="mocha-data-user-level">Lv.51</span>
            <h1 class="mocha-data-user-name">哟呵123</h1>
        </div>
    </div>
    <div class="mocha-data-user-bd">
        <div class="mocha-data-user-box">
            <p>战斗力</p>
            <span class="mocha-data-user-num">6186</span>
        </div>
    </div>
    <div class="mocha-data-user-bd">
        <div class="mocha-data-user-box">
            <p>累积杀敌数</p>
            <span class="mocha-data-user-num">0</span>
        </div>
    </div>
    <div class="mocha-data-user-btn">
        <a href="javascript:;">跳转按钮<i class="mocha-data-user-ui"></i></a>
    </div>
</div>
```
</div>
### 样式3-资料位3个 `.mocha-data-user-scheme3`
<div class="demo-preview"><div class="box-w320"><img src="http://ossweb-img.qq.com/images/js/mocha/images/demo/data-user3.png" alt="样式3-资料位3个"></div>
``` html
<div class="mocha-data-user mocha-data-user-scheme3 mocha-data-user-skin1">
    <div class="mocha-data-user-hd">
        <div class="mocha-data-user-img"><img src="http://dummyimage.com/100x100/222/fff.png&text=head" alt="头像"></div>
        <div class="mocha-data-user-content">
            <span class="mocha-data-user-level">Lv.51</span>
            <h1 class="mocha-data-user-name">哟呵123</h1>
        </div>
    </div>
    <div class="mocha-data-user-bd">
        <div class="mocha-data-user-box">
            <p>战斗力</p>
            <span class="mocha-data-user-num">6186</span>
        </div>
    </div>
    <div class="mocha-data-user-bd">
        <div class="mocha-data-user-box">
            <p>累积杀敌数</p>
            <span class="mocha-data-user-num">0</span>
        </div>
    </div>
    <div class="mocha-data-user-bd">
        <div class="mocha-data-user-box">
            <p>通宝数量</p>
            <span class="mocha-data-user-num">0</span>
        </div>
    </div>
    <div class="mocha-data-user-btn">
        <a href="javascript:;">跳转按钮<i class="mocha-data-user-ui"></i></a>
    </div>
</div>
```
</div>
### 修改模块皮肤CSS 
模块的默认皮肤类`.mocha-data-user-skin1`，您可以在您项目的`page.css`里修改`.mocha-data-user-skin1`皮肤类，或者新增`.mocha-data-user-skin2`。
``` css
/* skin */
.mocha-data-user-skin1{color: #474747;background: #e5e5e5;border:1px solid #afaeae;}
.mocha-data-user-skin1 .mocha-data-user-bd{border-left: 1px solid #c4c4c4;}
.mocha-data-user-skin1 .mocha-data-user-level{background: #818181;colfff;}
.mocha-data-user-skin1 .mocha-data-user-content p,.mocha-data-user-skimocha-data-user-bd p{font-size: .09rem;line-height: .14rem;color:#474747;}
.mocha-data-user-skin1 .mocha-data-user-name,.mocha-data-user-skin1 .modata-user-num{font-size: .15rem;line-height: .24rem;}
.mocha-data-user-skin1 .mocha-data-user-num{font-size: .18rem;font-weibold;}
.mocha-data-user-skin1 .mocha-data-user-level{font-size: .09rem;line-he: .14rem;}
.mocha-data-user-skin1 .mocha-data-user-btn a{font-size: .13rem;backgro #afaeae;color:#fff;}
.mocha-data-user-skin1 .mocha-data-user-ui{color: #fff;border: 1px solfff;}
.mocha-data-user-skin1 .mocha-data-user-ui:before{border-color: #fff;}
```
