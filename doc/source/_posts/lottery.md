---
title: lottery
date: 2016-01-21 19:45:13
tags:
---

## lottery(抽奖模块)
作者：`dereksu`
版本：`v.1`
依赖：`mocha.min.css` `zepto.js` `lottery.min.js`

![lottery 样式一（方形）](http://ossweb-img.qq.com/images/js/mocha/images/demo/lottery1.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/lottery/demo.html#lotterydemo1 "lottery 样式一（方形）")

### **样式一 方形抽奖** `.mocha-lottery-scheme1`
``` html
<div id="lottery1" data-psdw="640" data-isscale="true" class="mocha-lottery mocha-lottery-scheme1 mocha-lottery-skin1">
  <div id="lottery1content" class="content"></div>
</div>
```

### 可以在您的css中覆盖`.mocha-lottery-scheme1.mocha-lottery-skin1`皮肤类
``` css
/* skin */
.mocha-lottery-scheme1.mocha-lottery-skin1 .content{width:307px; height: 247px;background: url(http://game.gtimg.cn/images/moba/cp/a20151016bbzbm/cj_bg.jpg) no-repeat;background-size: 100% auto;}
```

### 自定义属性说明
<table class="table table-bordered table-striped table-condensed"><tr><th>自定义属性</th><th>说明</th></tr><tr><td>data-psdw</td><td>设计稿宽度</td></tr><tr><td>data-isscale</td><td>true/false，代表是否要自适应屏幕尺寸进行缩放，不配置默认为true。`(如果本身body有进行整体缩放的话，这里就不要再缩放了，即设为false)`</td></tr></table>

### JS代码
```js
//缩放方法
function lotteryScaleFun(a){var b=parseInt($("#"+a).data("psdw"))/2;document.getElementById(a).style.width=b+"px";var c=document.documentElement.clientWidth?document.documentElement.clientWidth:b;document.getElementById(a).style.zoom=c/b}function lotteryScale(b){var a=$("#"+b).data("isscale");if(a!==false){lotteryScaleFun(b);$(window).bind("orientationchange",function(c){lotteryScaleFun(b)});$(window).bind("resize",function(c){lotteryScaleFun(b)})}};

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
  'width': 307,
  'height': 247,
  'sbtnx': 77,
  'sbtny': 62,
  'sbtnw': 153,
  'sbtnh': 123,
  'boxw': 75,
  'boxh': 60,
  'position': "0_0,77_0,154_0,231_0,231_62,231_124,231_186,154_186,77_186,0_186,0_124,0_62",
  'contentId': 'lottery1content',
  'onClickRollEvent': callJsToStart1,
  'onCompleteRollEvent': callJsToComplete1
});
//执行缩放
lotteryScale('lottery1');
```

![lottery 样式二（圆形）](http://ossweb-img.qq.com/images/js/mocha/images/demo/lottery2.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/lottery/demo.html#lotterydemo2 "lottery 样式二（圆形）")

### **样式二 圆形抽奖** `.mocha-lottery-scheme2`
``` html
<div id="lottery2" data-psdw="640" data-isscale="true" class="mocha-lottery mocha-lottery-scheme2 mocha-lottery-skin1">
  <div id="lottery2content" class="content"></div>
</div>
```

### 可以在您的css中覆盖`.mocha-lottery-scheme2.mocha-lottery-skin1`皮肤类
``` css
/* skin */
.mocha-lottery-scheme2.mocha-lottery-skin1 .content{width:244px; height: 244px;}
```

### 自定义属性说明
<table class="table table-bordered table-striped table-condensed"><tr><th>自定义属性</th><th>说明</th></tr><tr><td>data-psdw</td><td>设计稿宽度</td></tr><tr><td>data-isscale</td><td>true/false，代表是否要自适应屏幕尺寸进行缩放，不配置默认为true。`(如果本身body有进行整体缩放的话，这里就不要再缩放了，即设为false)`</td></tr></table>

### JS代码
```js
//缩放方法
function lotteryScaleFun(a){var b=parseInt($("#"+a).data("psdw"))/2;document.getElementById(a).style.width=b+"px";var c=document.documentElement.clientWidth?document.documentElement.clientWidth:b;document.getElementById(a).style.zoom=c/b}function lotteryScale(b){var a=$("#"+b).data("isscale");if(a!==false){lotteryScaleFun(b);$(window).bind("orientationchange",function(c){lotteryScaleFun(b)});$(window).bind("resize",function(c){lotteryScaleFun(b)})}};

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
  'width': 244, //转盘宽度
  'height': 244, //转盘高度
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