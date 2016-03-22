---
title: fill-info
date: 2016-03-22 12:44:01
tags:
---

## fill-info(填写资料模块)
作者：`jsonliu`
版本：`v.1`
依赖：`mocha.css`

![fill-info](http://game.gtimg.cn/images/js/mocha/images/demo/fill-info.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/fill-info/demo.html "fill-info(填写资料模块)")

``` html
<div class="mocha-fill-info">
	<div class="mocha-fill-main">
        <div class="mocha-fill-hd">
            <div class="mocha-fill-mark"></div>
        </div>
        <div class="mocha-fill-info-bd">
            <div class="mocha-fill-info-box">
                <div class="mocha-fill-info-panel">
                    <label>用户姓名：</label>
                    <input type="text" class="mocha-fill-info-name">
                </div>
                <div class="mocha-fill-info-panel" id="isex">
                    <label>性别：</label>
                    <span>男</span>
                    <input type="radio" name="sex" value="0" checked="">
                    <span>女</span>
                    <input type="radio" name="sex" value="1">
                </div>
            </div>
            <div class="mocha-fill-info-box">
                <div class="mocha-fill-info-panel">
                    <label>身份证号：</label>
                    <input type="text" class="mocha-fill-info-id">
                </div>
                <div class="mocha-fill-info-panel">
                    <label>联系电话：</label>
                    <input type="text" class="mocha-fill-info-mob" >
                </div>
            </div>
            <div class="mocha-fill-info-box">
                <label>QQ号码&nbsp;：</label>
                <input type="text" class="mocha-fill-info-post">
            </div>
            <div class="mocha-fill-info-box">
                <label>收货地址：</label>
                <input type="text" class="mocha-fill-info-addr" >
            </div>
        </div>
        <div class="mocha-fill-info-fd">
            <a class="mocha-fill-info-btn-submit" href="#">确认提交</a>
        </div>
   </div>
</div>
```
