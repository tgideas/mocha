---
title: lottery(抽奖模块)
date: 2016-07-20 09:45:13
tags:
---

作者：`dereksu`
版本：`v.1`
依赖：`mocha.min.css` `zepto.js` `lottery.min.js`
<div class="demo-qrcode"><a id="QRcode" href="http://tgideas.github.io/mocha/demo/lottery/demo.html" target="_blank">点击运行Demo</a></div>

### **样式一 方形抽奖** `.mocha-lottery-scheme1`

<div class="demo-preview">
![lottery 样式一（方形）](http://ossweb-img.qq.com/images/js/mocha/images/demo/lottery1.png)

``` html
<div id="lottery1" data-psdw="640" data-isscale="true" class="mocha-lottery mocha-lottery-scheme1 mocha-lottery-skin1">
  <div id="lottery1content" class="content"></div>
</div>
```

可以在您的css中覆盖`.mocha-lottery-scheme1.mocha-lottery-skin1`皮肤类
``` css
/* skin */
.mocha-lottery-scheme1.mocha-lottery-skin1 .content{width:614px; height: 494px;background: url(http://game.gtimg.cn/images/moba/cp/a20151016bbzbm/cj_bg.jpg) no-repeat;background-size: 100% auto;}
```

自定义属性说明
<table class="table table-bordered table-striped table-condensed"><tr><th>自定义属性</th><th>说明</th></tr><tr><td>data-psdw</td><td>设计稿宽度</td></tr><tr><td>data-isscale</td><td>true/false，代表是否要自适应屏幕尺寸进行缩放，不配置默认为true。`(如果本身body有进行整体缩放的话，这里就不要再缩放了，即设为false)`</td></tr></table>

JS代码
```js
//缩放方法
function lotteryScaleFun(a){var b=parseInt($("#"+a).data("psdw"));document.getElementById(a).style.width=b+"px";var c=document.documentElement.clientWidth?document.documentElement.clientWidth:b;document.getElementById(a).style.zoom=c/b}function lotteryScale(b){var a=$("#"+b).data("isscale");if(a!==false){lotteryScaleFun(b);$(window).bind("orientationchange",function(c){lotteryScaleFun(b)});$(window).bind("resize",function(c){lotteryScaleFun(b)})}};

//点击开始抽奖
function callJsToStart1() {
  callFlashToRoll1(3);
}
//开发获得抽奖结果 开始播放效果
function callFlashToRoll1(id) {
  //通知转盘转到对应的中奖产品的id （序号从0,1,2.....，0是指针初始指示的位置，沿着顺时针的方向递增）
  if (lotteryObj1) lotteryObj1.stopRoll(id);
}
//动画完成通知js
function callJsToComplete1() {
  alert('lotteryObj1-恭喜你获奖了！');
}
//初始化抽奖对象的lotteryObj1 
var lotteryObj1 = new mo.Lottery({
  //'lighturl':'http://ossweb-img.qq.com/images/motion/lottery/light.png',
  'total': 12,
  'width': 614,
  'height': 494,
  'sbtnx': 154,
  'sbtny': 124,
  'sbtnw': 306,
  'sbtnh': 246,
  'boxw': 150,
  'boxh': 120,
  'position': "0_0,154_0,308_0,462_0,462_124,462_248,462_372,308_372,154_372,0_372,0_248,0_124",
  'contentId': 'lottery1content',
  'onClickRollEvent': callJsToStart1,
  'onCompleteRollEvent': callJsToComplete1
});
//执行缩放
lotteryScale('lottery1');
```
</div>

### **样式二 圆形抽奖** `.mocha-lottery-scheme2`

<div class="demo-preview">
![lottery 样式二（圆形）](http://ossweb-img.qq.com/images/js/mocha/images/demo/lottery2.png)

``` html
<div id="lottery2" data-psdw="640" data-isscale="true" class="mocha-lottery mocha-lottery-scheme2 mocha-lottery-skin1">
  <div id="lottery2content" class="content"></div>
</div>
```

可以在您的css中覆盖`.mocha-lottery-scheme2.mocha-lottery-skin1`皮肤类
``` css
/* skin */
.mocha-lottery-scheme2.mocha-lottery-skin1 .content{width:488px; height: 488px;}
```

自定义属性说明
<table class="table table-bordered table-striped table-condensed"><tr><th>自定义属性</th><th>说明</th></tr><tr><td>data-psdw</td><td>设计稿宽度</td></tr><tr><td>data-isscale</td><td>true/false，代表是否要自适应屏幕尺寸进行缩放，不配置默认为true。`(如果本身body有进行整体缩放的话，这里就不要再缩放了，即设为false)`</td></tr></table>

JS代码
```js
//缩放方法
function lotteryScaleFun(a){var b=parseInt($("#"+a).data("psdw"));document.getElementById(a).style.width=b+"px";var c=document.documentElement.clientWidth?document.documentElement.clientWidth:b;document.getElementById(a).style.zoom=c/b}function lotteryScale(b){var a=$("#"+b).data("isscale");if(a!==false){lotteryScaleFun(b);$(window).bind("orientationchange",function(c){lotteryScaleFun(b)});$(window).bind("resize",function(c){lotteryScaleFun(b)})}};

//点击开始抽奖
function callJsToStart2() {
  callFlashToRoll2(5);
}
//开发获得抽奖结果 开始播放效果 
function callFlashToRoll2(id) {
  //通知转盘转到对应的中奖产品的id （序号从0,1,2.....，0是指针初始指示的位置，沿着顺时针的方向递增）
  if (lotteryObj2) lotteryObj2.stopRoll(id);
}
//动画完成通知js
function callJsToComplete2() {
  alert('lotteryObj2-恭喜你获奖了！');
}
//初始化抽奖对象的lotteryObj2 
var lotteryObj2 = new mo.Lottery({
  //'flashUrl' : 'http://ossweb-img.qq.com/images/flash/lottery/circle/lotteyround_2013_v1.swf',
  'r': 8, //奖品总数
  'width': 488, //转盘宽度
  'height': 488, //转盘高度
  'flashFirst': false,
  'b': 'http://ossweb-img.qq.com/images/flash/lottery/circle/g.png', //圆盘的图片
  's': 'http://ossweb-img.qq.com/images/flash/lottery/circle/z.png', //开始抽奖按钮图片
  'bx': 0, //圆盘的图片位置x坐标 （转盘的中心点坐标为（0,0））
  'by': 0, //圆盘的图片位置y坐标
  'sx': 0, //开始抽奖按钮x坐标
  'sy': 0, //开始抽奖按钮y坐标
  'contentId': 'lottery2content', //转盘div层的id 
  'onClickRollEvent': callJsToStart2, //对应上面接口
  'onCompleteRollEvent': callJsToComplete2 //对应上面接口
});
//执行缩放
lotteryScale('lottery2');
```
</div>