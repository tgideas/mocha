---
title: slider
date: 2016-01-26 10:45:00
tags:
---

## slider(slider模块)
作者：`dereksu`
版本：`v.1`
依赖：`mocha.min.css` `slider.min.js`

![slider 样式一（demo1）](http://ossweb-img.qq.com/images/js/mocha/images/demo/slider1.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/slider/demo.html#sliderdemo1 "slider 样式一（demo1）")

### **样式一（demo1）没有接入广告系统** `.mocha-slider-scheme1`
``` html
<div id="slider1" data-psdw="640" data-sliderw="640" data-sliderh="330" class="mocha-slider mocha-slider-scheme1 mocha-slider-skin1">
  <ul class="content">
    <li><a href='#'><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/640x330.jpg" alt=""></a></li>
    <li><a href='#'><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/640x330-2.jpg" alt=""></a></li>
    <li><a href='#'><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/640x330-3.jpg" alt=""></a></li>
    <li><a href='#'><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/640x330-4.jpg" alt=""></a></li>
    <li><a href='#'><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/640x330-5.jpg" alt=""></a></li>
  </ul>
</div>
```

### 可以在您的css中覆盖`.mocha-slider-scheme1.mocha-slider-skin1`皮肤类
``` css
/* skin */
.mocha-slider-scheme1.mocha-slider-skin1 .controller{position:absolute;bottom:7px;right:10px;height:10px;text-align:right;}
.mocha-slider-scheme1.mocha-slider-skin1 .controller li{width:20px;height:4px;margin:3px;background-color:#8a8a8a;}
.mocha-slider-scheme1.mocha-slider-skin1 .controller li.current{background-color:#ffdb72;}
```

### 自定义属性说明
<table class="table table-bordered table-striped table-condensed"><tr><th>自定义属性</th><th>说明</th></tr><tr><td>data-psdw</td><td>设计稿宽度</td></tr><tr><td>data-sliderw</td><td>滑动块宽度</td></tr><tr><td>data-sliderh</td><td>滑动块高度</td></tr></table>

### 创建实例
```js
//Slider初始化
Slider.init(function(slider) {
  //创建实例sliderObj.slider1
  slider.type(1, [{
    id: "slider1",
    callback: function() {
      console.log('slider1创建完成');
      sliderObj.slider1.play();
    }
  }]);
});
```

### type(param1,parem2)参数描述
<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>param1</td><td>Number</td><td>数字代表Slider样式一~样式六（1-6）</td></tr><tr><td>param2</td><td>Array</td><td>数组存放一个或多个Object类型数据<br><br>{id:'',callback:function(){}}<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>id</td><td>String</td><td>slider的id</td></tr><tr><td>callback</td><td>Function</td><td>实例化完成的回调方法<br><br>**slider实例可使用的方法**<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>play</td><td>Function</td><td>自动播放，如sliderObj.slider1.play();</td></tr><tr><td>playTo</td><td>Function</td><td>播放到第几个滑动块，如sliderObj.slider1.playTo(2);</td></tr><tr><td>stop</td><td>Function</td><td>停止自动播放，如sliderObj.slider1.stop();</td></tr><tr><td>prev</td><td>Function</td><td>播放前一个，如sliderObj.slider1.prev();</td></tr><tr><td>next</td><td>Function</td><td>播放后一个，如sliderObj.slider1.next();</td></tr></table></td></tr></table></td></tr></table>


![slider 样式一（demo2）](http://ossweb-img.qq.com/images/js/mocha/images/demo/slider2.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/slider/demo.html#sliderdemo2 "slider 样式一（demo2）")

### **样式一（demo2）有接入广告系统** `.mocha-slider-scheme1`
``` html
<div id="slider2" data-channelid="14482" data-showlink="true" data-tcssprefix="a20151208mocha.index.actshow1" data-psdw="640" data-sliderw="580" data-sliderh="300" class="mocha-slider mocha-slider-scheme1 mocha-slider-skin1">
  <ul class="content">
    <li data-posid="12359"></li>
    <li data-posid="12360"></li>
    <li data-posid="12361"></li>
    <li data-posid="12362"></li>
  </ul>
</div>
```

### 可以在您的css中覆盖`.mocha-slider-scheme1.mocha-slider-skin1`皮肤类
``` css
/* skin */
.mocha-slider-scheme1.mocha-slider-skin1 .controller{position:absolute;bottom:7px;right:10px;height:10px;text-align:right;}
.mocha-slider-scheme1.mocha-slider-skin1 .controller li{width:20px;height:4px;margin:3px;background-color:#8a8a8a;}
.mocha-slider-scheme1.mocha-slider-skin1 .controller li.current{background-color:#ffdb72;}
```

### 自定义属性说明
<table class="table table-bordered table-striped table-condensed"><tr><th>自定义属性</th><th>说明</th></tr><tr><td>data-psdw</td><td>设计稿宽度</td></tr><tr><td>data-sliderw</td><td>滑动块宽度</td></tr><tr><td>data-sliderh</td><td>滑动块高度</td></tr><tr><td>data-channelid</td><td>频道ID，`不配置data-channelid，将不读取广告系统数据` 频道ID如[http://game.qq.com/time/qqadv/Info_new_14482.js](http://game.qq.com/time/qqadv/Info_new_14482.js)（14482）</td></tr><tr><td>data-showlink</td><td>true/false，代表slider每一项是否有a标签链接，不配置默认为true</td></tr><tr><td>data-tcssprefix</td><td>slider每一项的tcss点击流前缀，不配置将不添加点击流统计代码。格式如：a20151208mocha.index.actshow1</td></tr><tr><td>data-posid</td><td>广告位ID</td></tr></table>

### 创建实例
```js
//Slider初始化
Slider.init(function(slider) {
  //创建实例sliderObj.slider2
  slider.type(1, [{
    id: "slider2",
    callback: function() {
      console.log('slider2创建完成');
      sliderObj.slider2.play();
    }
  }]);
});
```

### type(param1,parem2)参数描述
<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>param1</td><td>Number</td><td>数字代表Slider样式一~样式六（1-6）</td></tr><tr><td>param2</td><td>Array</td><td>数组存放一个或多个Object类型数据<br><br>{id:'',callback:function(){}}<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>id</td><td>String</td><td>slider的id</td></tr><tr><td>callback</td><td>Function</td><td>实例化完成的回调方法<br><br>**slider实例可使用的方法**<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>play</td><td>Function</td><td>自动播放，如sliderObj.slider1.play();</td></tr><tr><td>playTo</td><td>Function</td><td>播放到第几个滑动块，如sliderObj.slider1.playTo(2);</td></tr><tr><td>stop</td><td>Function</td><td>停止自动播放，如sliderObj.slider1.stop();</td></tr><tr><td>prev</td><td>Function</td><td>播放前一个，如sliderObj.slider1.prev();</td></tr><tr><td>next</td><td>Function</td><td>播放后一个，如sliderObj.slider1.next();</td></tr></table></td></tr></table></td></tr></table>

![slider 样式二（demo1）](http://ossweb-img.qq.com/images/js/mocha/images/demo/slider3.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/slider/demo.html#sliderdemo3 "slider 样式二（demo1）")

### **样式二（demo1）没有接入广告系统** `.mocha-slider-scheme2`
``` html
<div id="slider3" data-psdw="640" data-sliderw="640" data-sliderh="330" class="mocha-slider mocha-slider-scheme2 mocha-slider-skin1">
  <ul class="content">
    <li><a href='#'><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/640x330-6.jpg" alt=""></a></li>
    <li><a href='#'><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/640x330-6.jpg" alt=""></a></li>
    <li><a href='#'><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/640x330-6.jpg" alt=""></a></li>
    <li><a href='#'><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/640x330-6.jpg" alt=""></a></li>
    <li><a href='#'><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/640x330-6.jpg" alt=""></a></li>
  </ul>
</div>
```

### 可以在您的css中覆盖`.mocha-slider-scheme2.mocha-slider-skin1`皮肤类
``` css
/* skin */
.mocha-slider-scheme2.mocha-slider-skin1 .controller{position:absolute;bottom:7px;right:0;height:10px;text-align:center;}
.mocha-slider-scheme2.mocha-slider-skin1 .controller li{width:20px;height:4px;margin:3px;background-color:#8a8a8a;}
.mocha-slider-scheme2.mocha-slider-skin1 .controller li.current{background-color:#ffdb72;}
```

### 自定义属性说明
<table class="table table-bordered table-striped table-condensed"><tr><th>自定义属性</th><th>说明</th></tr><tr><td>data-psdw</td><td>设计稿宽度</td></tr><tr><td>data-sliderw</td><td>滑动块宽度</td></tr><tr><td>data-sliderh</td><td>滑动块高度</td></tr></table>

### 创建实例
```js
//Slider初始化
Slider.init(function(slider) {
  //创建实例sliderObj.slider3
  slider.type(2, [{
    id: 'slider3',
    controllerH: 24,
    callback: function() {
      console.log('slider3创建完成');
      sliderObj.slider3.play();
    }
  }]);
});
```

### type(param1,parem2)参数描述
<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>param1</td><td>Number</td><td>数字代表Slider样式一~样式六（1-6）</td></tr><tr><td>param2</td><td>Array</td><td>数组存放一个或多个Object类型数据<br><br>{id:'',controllerH:0,callback:function(){}}<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>id</td><td>String</td><td>slider的id</td></tr><tr><td>controllerH</td><td>Number</td><td>slider底部controller多余的高度（实际值）</td></tr><tr><td>callback</td><td>Function</td><td>实例化完成的回调方法<br><br>**slider实例可使用的方法**<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>play</td><td>Function</td><td>自动播放，如sliderObj.slider1.play();</td></tr><tr><td>playTo</td><td>Function</td><td>播放到第几个滑动块，如sliderObj.slider1.playTo(2);</td></tr><tr><td>stop</td><td>Function</td><td>停止自动播放，如sliderObj.slider1.stop();</td></tr><tr><td>prev</td><td>Function</td><td>播放前一个，如sliderObj.slider1.prev();</td></tr><tr><td>next</td><td>Function</td><td>播放后一个，如sliderObj.slider1.next();</td></tr></table></td></tr></table></td></tr></table>

![slider 样式二（demo2）](http://ossweb-img.qq.com/images/js/mocha/images/demo/slider4.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/slider/demo.html#sliderdemo4 "slider 样式二（demo2）")

### **样式二（demo2）有接入广告系统** `.mocha-slider-scheme2`
``` html
<div id="slider4" data-channelid="14482" data-showlink="true" data-tcssprefix="a20151208mocha.index.actshow2" data-psdw="640" data-sliderw="580" data-sliderh="300" class="mocha-slider mocha-slider-scheme2 mocha-slider-skin1">
  <ul class="content">
    <li data-posid="12359"></li>
    <li data-posid="12360"></li>
    <li data-posid="12361"></li>
    <li data-posid="12362"></li>
  </ul>
</div>
```

### 可以在您的css中覆盖`.mocha-slider-scheme2.mocha-slider-skin1`皮肤类
``` css
/* skin */
.mocha-slider-scheme2.mocha-slider-skin1 .controller{position:absolute;bottom:7px;right:0;height:10px;text-align:center;}
.mocha-slider-scheme2.mocha-slider-skin1 .controller li{width:20px;height:4px;margin:3px;background-color:#8a8a8a;}
.mocha-slider-scheme2.mocha-slider-skin1 .controller li.current{background-color:#ffdb72;}
```

### 自定义属性说明
<table class="table table-bordered table-striped table-condensed"><tr><th>自定义属性</th><th>说明</th></tr><tr><td>data-psdw</td><td>设计稿宽度</td></tr><tr><td>data-sliderw</td><td>滑动块宽度</td></tr><tr><td>data-sliderh</td><td>滑动块高度</td></tr><tr><td>data-channelid</td><td>频道ID，`不配置data-channelid，将不读取广告系统数据` 频道ID如[http://game.qq.com/time/qqadv/Info_new_14482.js](http://game.qq.com/time/qqadv/Info_new_14482.js)（14482）</td></tr><tr><td>data-showlink</td><td>true/false，代表slider每一项是否有a标签链接，不配置默认为true</td></tr><tr><td>data-tcssprefix</td><td>slider每一项的tcss点击流前缀，不配置将不添加点击流统计代码。格式如：a20151208mocha.index.actshow1</td></tr><tr><td>data-posid</td><td>广告位ID</td></tr></table>

### 创建实例
```js
//Slider初始化
Slider.init(function(slider) {
  //创建实例sliderObj.slider4
  slider.type(2, [{
    id: 'slider4',
    controllerH: 24,
    callback: function() {
      console.log('slider4创建完成');
      sliderObj.slider4.playTo(1);
    }
  }]);
});
```

### type(param1,parem2)参数描述
<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>param1</td><td>Number</td><td>数字代表Slider样式一~样式六（1-6）</td></tr><tr><td>param2</td><td>Array</td><td>数组存放一个或多个Object类型数据<br><br>{id:'',controllerH:0,callback:function(){}}<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>id</td><td>String</td><td>slider的id</td></tr><tr><td>controllerH</td><td>Number</td><td>slider底部controller多余的高度（实际值）</td></tr><tr><td>callback</td><td>Function</td><td>实例化完成的回调方法<br><br>**slider实例可使用的方法**<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>play</td><td>Function</td><td>自动播放，如sliderObj.slider1.play();</td></tr><tr><td>playTo</td><td>Function</td><td>播放到第几个滑动块，如sliderObj.slider1.playTo(2);</td></tr><tr><td>stop</td><td>Function</td><td>停止自动播放，如sliderObj.slider1.stop();</td></tr><tr><td>prev</td><td>Function</td><td>播放前一个，如sliderObj.slider1.prev();</td></tr><tr><td>next</td><td>Function</td><td>播放后一个，如sliderObj.slider1.next();</td></tr></table></td></tr></table></td></tr></table>


![slider 样式三（demo1）](http://ossweb-img.qq.com/images/js/mocha/images/demo/slider5.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/slider/demo.html#sliderdemo5 "slider 样式三（demo1）")

### **样式三（demo1）没有接入广告系统** `.mocha-slider-scheme3`
``` html
<div id="slider5Wrapper" class="mocha-slider-wrapper">
  <div id="slider5" data-psdw="640" data-sliderw="560" data-sliderh="300" class="mocha-slider mocha-slider-scheme3 mocha-slider-skin1">
    <ul class="content">
      <li><a href='#'><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/560x300.jpg" alt=""></a></li>
      <li><a href='#'><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/560x300.jpg" alt=""></a></li>
      <li><a href='#'><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/560x300.jpg" alt=""></a></li>
      <li><a href='#'><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/560x300.jpg" alt=""></a></li>
      <li><a href='#'><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/560x300.jpg" alt=""></a></li>
    </ul>
  </div>
  <a href="javascript:void(0);" class="mocha-slider-btn mocha-slider-btn-skin1 prevBtn">&lt;</a>
  <a href="javascript:void(0);" class="mocha-slider-btn mocha-slider-btn-skin1 nextBtn">&gt;</a>
</div>
```

### 可以在您的css中覆盖`.mocha-slider-scheme3.mocha-slider-skin1`和`.mocha-slider-btn-skin1`皮肤类
``` css
/* skin */
.mocha-slider-scheme3.mocha-slider-skin1 .controller{position:absolute;bottom:7px;right:0;height:20px;text-align:center;}
.mocha-slider-scheme3.mocha-slider-skin1 .controller li{width:10px;height:10px;margin:5px;border-radius:50%;-webkit-border-radius:50%;background-color:#8a8a8a;}
.mocha-slider-scheme3.mocha-slider-skin1 .controller li.current{background-color:#ffdb72;}
/* slider-btn-skin */
.mocha-slider-btn-skin1{color:#fff;font-size:.16rem;font-weight:bolder;padding:.08rem;width:.50rem;height:.50rem;line-height:.50rem;top:50%;background-color: #a72525;border-radius: 50%;-webkit-border-radius: 50%;}
.mocha-slider-btn-skin1.prevBtn{left:-.47rem;text-align: right;}
.mocha-slider-btn-skin1.nextBtn{right:-.47rem;text-align: left;}
```

### 自定义属性说明
<table class="table table-bordered table-striped table-condensed"><tr><th>自定义属性</th><th>说明</th></tr><tr><td>data-psdw</td><td>设计稿宽度</td></tr><tr><td>data-sliderw</td><td>滑动块宽度</td></tr><tr><td>data-sliderh</td><td>滑动块高度</td></tr></table>

### 创建实例
```js
//Slider初始化
Slider.init(function(slider) {
  //创建实例sliderObj.slider5
  slider.type(3, [{
    id: 'slider5',
    controllerH: 34,
    callback: function() {
      console.log('slider5创建完成');
      sliderObj.slider5.play();
    }
  }]);
});
```

### type(param1,parem2)参数描述
<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>param1</td><td>Number</td><td>数字代表Slider样式一~样式六（1-6）</td></tr><tr><td>param2</td><td>Array</td><td>数组存放一个或多个Object类型数据<br><br>{id:'',controllerH:0,callback:function(){}}<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>id</td><td>String</td><td>slider的id</td></tr><tr><td>controllerH</td><td>Number</td><td>slider底部controller多余的高度（实际值）</td></tr><tr><td>callback</td><td>Function</td><td>实例化完成的回调方法<br><br>**slider实例可使用的方法**<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>play</td><td>Function</td><td>自动播放，如sliderObj.slider1.play();</td></tr><tr><td>playTo</td><td>Function</td><td>播放到第几个滑动块，如sliderObj.slider1.playTo(2);</td></tr><tr><td>stop</td><td>Function</td><td>停止自动播放，如sliderObj.slider1.stop();</td></tr><tr><td>prev</td><td>Function</td><td>播放前一个，如sliderObj.slider1.prev();</td></tr><tr><td>next</td><td>Function</td><td>播放后一个，如sliderObj.slider1.next();</td></tr></table></td></tr></table></td></tr></table>

![slider 样式三（demo2）](http://ossweb-img.qq.com/images/js/mocha/images/demo/slider6.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/slider/demo.html#sliderdemo6 "slider 样式三（demo2）")

### **样式三（demo2）有接入广告系统** `.mocha-slider-scheme3`
``` html
<div id="slider6Wrapper" class="mocha-slider-wrapper">
  <div id="slider6" data-channelid="14482" data-showlink="true" data-tcssprefix="a20151208mocha.index.actshow3" data-psdw="640" data-sliderw="560" data-sliderh="300" class="mocha-slider mocha-slider-scheme3 mocha-slider-skin2">
    <ul class="content">
      <li data-posid="12359"></li>
      <li data-posid="12360"></li>
      <li data-posid="12361"></li>
      <li data-posid="12362"></li>
    </ul>
  </div>
  <a href="javascript:void(0);" class="mocha-slider-btn mocha-slider-btn-skin1 prevBtn">&lt;</a>
  <a href="javascript:void(0);" class="mocha-slider-btn mocha-slider-btn-skin1 nextBtn">&gt;</a>
</div>
```

### 可以在您的css中覆盖`.mocha-slider-scheme3.mocha-slider-skin2`和`.mocha-slider-btn-skin1`皮肤类
``` css
/* skin */
.mocha-slider-scheme3.mocha-slider-skin2 .controller{position:absolute;bottom:7px;right:0;height:10px;text-align:center;}
.mocha-slider-scheme3.mocha-slider-skin2 .controller li{width:10px;height:10px;margin:0 5px;border-radius:50%;-webkit-border-radius:50%;background-color:#8a8a8a;}
.mocha-slider-scheme3.mocha-slider-skin2 .controller li.current{background-color:#ffdb72;}
/* slider-btn-skin */
.mocha-slider-btn-skin1{color:#fff;font-size:.16rem;font-weight:bolder;padding:.08rem;width:.50rem;height:.50rem;line-height:.50rem;top:50%;background-color: #a72525;border-radius: 50%;-webkit-border-radius: 50%;}
.mocha-slider-btn-skin1.prevBtn{left:-.47rem;text-align: right;}
.mocha-slider-btn-skin1.nextBtn{right:-.47rem;text-align: left;}
```

### 自定义属性说明
<table class="table table-bordered table-striped table-condensed"><tr><th>自定义属性</th><th>说明</th></tr><tr><td>data-psdw</td><td>设计稿宽度</td></tr><tr><td>data-sliderw</td><td>滑动块宽度</td></tr><tr><td>data-sliderh</td><td>滑动块高度</td></tr><tr><td>data-channelid</td><td>频道ID，`不配置data-channelid，将不读取广告系统数据` 频道ID如[http://game.qq.com/time/qqadv/Info_new_14482.js](http://game.qq.com/time/qqadv/Info_new_14482.js)（14482）</td></tr><tr><td>data-showlink</td><td>true/false，代表slider每一项是否有a标签链接，不配置默认为true</td></tr><tr><td>data-tcssprefix</td><td>slider每一项的tcss点击流前缀，不配置将不添加点击流统计代码。格式如：a20151208mocha.index.actshow1</td></tr><tr><td>data-posid</td><td>广告位ID</td></tr></table>

### 创建实例
```js
//Slider初始化
Slider.init(function(slider) {
  //创建实例sliderObj.slider6
  slider.type(3, [{
    id: 'slider6',
    controllerH: 0,
    callback: function() {
      console.log('slider6创建完成');
      sliderObj.slider6.play();
    }
  }]);
});
```

### type(param1,parem2)参数描述
<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>param1</td><td>Number</td><td>数字代表Slider样式一~样式六（1-6）</td></tr><tr><td>param2</td><td>Array</td><td>数组存放一个或多个Object类型数据<br><br>{id:'',controllerH:0,callback:function(){}}<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>id</td><td>String</td><td>slider的id</td></tr><tr><td>controllerH</td><td>Number</td><td>slider底部controller多余的高度（实际值）</td></tr><tr><td>callback</td><td>Function</td><td>实例化完成的回调方法<br><br>**slider实例可使用的方法**<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>play</td><td>Function</td><td>自动播放，如sliderObj.slider1.play();</td></tr><tr><td>playTo</td><td>Function</td><td>播放到第几个滑动块，如sliderObj.slider1.playTo(2);</td></tr><tr><td>stop</td><td>Function</td><td>停止自动播放，如sliderObj.slider1.stop();</td></tr><tr><td>prev</td><td>Function</td><td>播放前一个，如sliderObj.slider1.prev();</td></tr><tr><td>next</td><td>Function</td><td>播放后一个，如sliderObj.slider1.next();</td></tr></table></td></tr></table></td></tr></table>

![slider 样式四](http://ossweb-img.qq.com/images/js/mocha/images/demo/slider7.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/slider/demo.html#sliderdemo7 "slider 样式四")

### **样式四 有接入广告系统** `.mocha-slider-scheme4`
``` html
<div id="slider7" data-channelid="14482" data-showlink="true" data-tcssprefix="a20151208mocha.index.actshow4" data-psdw="640" data-sliderw="640" data-sliderh="380" data-liwidth="300" data-lipadding="20" class="mocha-slider mocha-slider-scheme4 mocha-slider-skin1">
  <ul class="content">
    <li data-posid="12359"></li>
    <li data-posid="12360"></li>
    <li data-posid="12361"></li>
    <li data-posid="12362"></li>
  </ul>
</div>
```

### 可以在您的css中覆盖`.mocha-slider-scheme4.mocha-slider-skin1`皮肤类
``` css
/* skin */
.mocha-slider-scheme4.mocha-slider-skin1 .controller{position:absolute;bottom:7px;right:0;height:20px;text-align:center;}
.mocha-slider-scheme4.mocha-slider-skin1 .controller li{width:10px;height:10px;margin:5px;border-radius:50%;-webkit-border-radius:50%;background-color:#8a8a8a;}
.mocha-slider-scheme4.mocha-slider-skin1 .controller li.current{background-color:#ffdb72;}
```

### 自定义属性说明
<table class="table table-bordered table-striped table-condensed"><tr><th>自定义属性</th><th>说明</th></tr><tr><td>data-psdw</td><td>设计稿宽度</td></tr><tr><td>data-sliderw</td><td>滑动块宽度</td></tr><tr><td>data-sliderh</td><td>滑动块高度</td></tr><tr><td>data-channelid</td><td>频道ID，`不配置data-channelid，将不读取广告系统数据` 频道ID如[http://game.qq.com/time/qqadv/Info_new_14482.js](http://game.qq.com/time/qqadv/Info_new_14482.js)（14482）</td></tr><tr><td>data-showlink</td><td>true/false，代表slider每一项是否有a标签链接，不配置默认为true</td></tr><tr><td>data-tcssprefix</td><td>slider每一项的tcss点击流前缀，不配置将不添加点击流统计代码。格式如：a20151208mocha.index.actshow1</td></tr><tr><td>data-posid</td><td>广告位ID</td></tr></table>

### 创建实例
```js
//Slider初始化
Slider.init(function(slider) {
  //创建实例sliderObj.slider7
  slider.type(4, [{
    id: 'slider7',
    controllerH: 34,
    callback: function() {
      console.log('slider7创建完成');
      sliderObj.slider7.play();
    }
  }]);
});
```

### type(param1,parem2)参数描述
<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>param1</td><td>Number</td><td>数字代表Slider样式一~样式六（1-6）</td></tr><tr><td>param2</td><td>Array</td><td>数组存放一个或多个Object类型数据<br><br>{id:'',controllerH:0,callback:function(){}}<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>id</td><td>String</td><td>slider的id</td></tr><tr><td>controllerH</td><td>Number</td><td>slider底部controller多余的高度（实际值）</td></tr><tr><td>callback</td><td>Function</td><td>实例化完成的回调方法<br><br>**slider实例可使用的方法**<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>play</td><td>Function</td><td>自动播放，如sliderObj.slider1.play();</td></tr><tr><td>playTo</td><td>Function</td><td>播放到第几个滑动块，如sliderObj.slider1.playTo(2);</td></tr><tr><td>stop</td><td>Function</td><td>停止自动播放，如sliderObj.slider1.stop();</td></tr><tr><td>prev</td><td>Function</td><td>播放前一个，如sliderObj.slider1.prev();</td></tr><tr><td>next</td><td>Function</td><td>播放后一个，如sliderObj.slider1.next();</td></tr></table></td></tr></table></td></tr></table>


![slider 样式五（demo1）](http://ossweb-img.qq.com/images/js/mocha/images/demo/slider8.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/slider/demo.html#sliderdemo8 "slider 样式五（demo1）")

### **样式五（demo1）没有接入广告系统** `.mocha-slider-scheme5`
``` html
<div id="slider8" data-psdw="640" class="mocha-slider-wrapper">
  <div data-sliderw="640" data-sliderh="330" data-slidermarginbottom="20" class="gallery-top mocha-slider">
    <ul class="content">
      <li><a href='#'><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/gallery-640x330-1.jpg" alt=""></a></li>
      <li><a href='#'><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/gallery-640x330-2.jpg" alt=""></a></li>
      <li><a href='#'><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/gallery-640x330-3.jpg" alt=""></a></li>
      <li><a href='#'><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/gallery-640x330-4.jpg" alt=""></a></li>
      <li><a href='#'><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/gallery-640x330-5.jpg" alt=""></a></li>
    </ul>
  </div>
  <div data-sliderw="640" data-sliderh="110" data-lipaddingright="20" class="gallery-thumbs mocha-slider mocha-slider-scheme5">
    <ul class="content">
      <li><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/gallery-640x330-1.jpg" alt=""></li>
      <li><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/gallery-640x330-2.jpg" alt=""></li>
      <li><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/gallery-640x330-3.jpg" alt=""></li>
      <li><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/gallery-640x330-4.jpg" alt=""></li>
      <li><img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/gallery-640x330-5.jpg" alt=""></li>
    </ul>
  </div>
</div>
```

### 自定义属性说明
<table class="table table-bordered table-striped table-condensed"><tr><th>自定义属性</th><th>说明</th></tr><tr><td>data-psdw</td><td>设计稿宽度</td></tr><tr><td>data-sliderw</td><td>滑动块宽度</td></tr><tr><td>data-sliderh</td><td>滑动块高度</td></tr><tr><td>data-slidermarginbottom</td><td>大图与小图之间的间隙</td></tr><tr><td>data-lipaddingright</td><td>小图之间的间隙</td></tr></table>

### 创建实例
```js
//Slider初始化
Slider.init(function(slider) {
  //创建实例sliderObj.slider8
  slider.type(5, [{
    id: 'slider8',
    callback: function() {
      console.log('slider8创建完成');
      sliderObj.slider8.play();
    }
  }]);
});
```

### type(param1,parem2)参数描述
<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>param1</td><td>Number</td><td>数字代表Slider样式一~样式六（1-6）</td></tr><tr><td>param2</td><td>Array</td><td>数组存放一个或多个Object类型数据<br><br>{id:'',callback:function(){}}<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>id</td><td>String</td><td>slider的id</td></tr><tr><td>callback</td><td>Function</td><td>实例化完成的回调方法<br><br>**slider实例可使用的方法**<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>play</td><td>Function</td><td>自动播放，如sliderObj.slider1.play();</td></tr><tr><td>playTo</td><td>Function</td><td>播放到第几个滑动块，如sliderObj.slider1.playTo(2);</td></tr><tr><td>stop</td><td>Function</td><td>停止自动播放，如sliderObj.slider1.stop();</td></tr><tr><td>prev</td><td>Function</td><td>播放前一个，如sliderObj.slider1.prev();</td></tr><tr><td>next</td><td>Function</td><td>播放后一个，如sliderObj.slider1.next();</td></tr></table></td></tr></table></td></tr></table>


![slider 样式五（demo2）](http://ossweb-img.qq.com/images/js/mocha/images/demo/slider9.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/slider/demo.html#sliderdemo9 "slider 样式五（demo2）")

### **样式五（demo2）有接入广告系统** `.mocha-slider-scheme5`
``` html
<div id="slider9" data-channelid="14482" data-showlink="true" data-tcssprefix="a20151208mocha.index.actshow5" data-psdw="640" class="mocha-slider-wrapper">
  <div data-sliderw="580" data-sliderh="300" data-slidermarginbottom="20" class="gallery-top mocha-slider">
    <ul class="content">
      <li data-posid="12359"></li>
      <li data-posid="12360"></li>
      <li data-posid="12361"></li>
      <li data-posid="12362"></li>
    </ul>
  </div>
  <div data-sliderw="580" data-sliderh="110" data-lipaddingright="20" class="gallery-thumbs mocha-slider mocha-slider-scheme5">
    <ul class="content">
    </ul>
  </div>
</div>
```

### 自定义属性说明
<table class="table table-bordered table-striped table-condensed"><tr><th>自定义属性</th><th>说明</th></tr><tr><td>data-psdw</td><td>设计稿宽度</td></tr><tr><td>data-sliderw</td><td>滑动块宽度</td></tr><tr><td>data-sliderh</td><td>滑动块高度</td></tr><tr><td>data-slidermarginbottom</td><td>大图与小图之间的间隙</td></tr><tr><td>data-lipaddingright</td><td>小图之间的间隙</td></tr><tr><td>data-channelid</td><td>频道ID，`不配置data-channelid，将不读取广告系统数据` 频道ID如[http://game.qq.com/time/qqadv/Info_new_14482.js](http://game.qq.com/time/qqadv/Info_new_14482.js)（14482）</td></tr><tr><td>data-showlink</td><td>true/false，代表slider每一项是否有a标签链接，不配置默认为true</td></tr><tr><td>data-tcssprefix</td><td>slider每一项的tcss点击流前缀，不配置将不添加点击流统计代码。格式如：a20151208mocha.index.actshow1</td></tr><tr><td>data-posid</td><td>广告位ID</td></tr></table>

### 创建实例
```js
//Slider初始化
Slider.init(function(slider) {
  //创建实例sliderObj.slider9
  slider.type(5, [{
    id: 'slider9',
    callback: function() {
      console.log('slider9创建完成');
    }
  }]);
});
```

### type(param1,parem2)参数描述
<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>param1</td><td>Number</td><td>数字代表Slider样式一~样式六（1-6）</td></tr><tr><td>param2</td><td>Array</td><td>数组存放一个或多个Object类型数据<br><br>{id:'',callback:function(){}}<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>id</td><td>String</td><td>slider的id</td></tr><tr><td>callback</td><td>Function</td><td>实例化完成的回调方法<br><br>**slider实例可使用的方法**<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>play</td><td>Function</td><td>自动播放，如sliderObj.slider1.play();</td></tr><tr><td>playTo</td><td>Function</td><td>播放到第几个滑动块，如sliderObj.slider1.playTo(2);</td></tr><tr><td>stop</td><td>Function</td><td>停止自动播放，如sliderObj.slider1.stop();</td></tr><tr><td>prev</td><td>Function</td><td>播放前一个，如sliderObj.slider1.prev();</td></tr><tr><td>next</td><td>Function</td><td>播放后一个，如sliderObj.slider1.next();</td></tr></table></td></tr></table></td></tr></table>

![slider 样式六 视频播放](http://ossweb-img.qq.com/images/js/mocha/images/demo/slider10.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/slider/demo.html#sliderdemo10 "slider 样式六 视频播放")

### **样式六 视频播放（暂不提供接入广告系统）** `.mocha-slider-scheme6`
``` html
<div id="slider10" data-psdw="640" data-proportion="16-9" class="mocha-slider-wrapper">
  <div id="slider10_player" data-sliderw="640" data-slidermarginbottom="20" class="video-top mocha-slider" onclick="pgvSendClick({hottag:'a20151208mocha.index.videoslider1.videotop'})"></div>
  <div data-sliderw="640" data-sliderh="110" data-lipaddingright="20" class="video-thumbs mocha-slider mocha-slider-scheme6">
    <ul class="content">
      <li data-vid="b14016xwapw" onclick="pgvSendClick({hottag:'a20151208mocha.index.videoslider1.videothumbs1'});">
        <img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/videoimg-320x180-1.jpg" alt="">
        <p>新版桶牛竞技场新版桶牛竞技场</p>
      </li>
      <li data-vid="d01452426av" onclick="pgvSendClick({hottag:'a20151208mocha.index.videoslider1.videothumbs2'});">
        <img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/videoimg-320x180-2.jpg" alt="">
        <p>新版桶牛竞技场</p>
      </li>
      <li data-vid="h0144kvxbl2" onclick="pgvSendClick({hottag:'a20151208mocha.index.videoslider1.videothumbs3'});">
        <img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/videoimg-320x180-3.jpg" alt="">
        <p>新版桶牛竞技场</p>
      </li>
      <li data-vid="h0144kvxbl2" onclick="pgvSendClick({hottag:'a20151208mocha.index.videoslider1.videothumbs4'});">
        <img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/videoimg-320x180-4.jpg" alt="">
        <p>新版桶牛竞技场</p>
      </li>
      <li data-vid="i0144nkkkdy" onclick="pgvSendClick({hottag:'a20151208mocha.index.videoslider1.videothumbs5'});">
        <img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/videoimg-320x180-5.jpg" alt="">
        <p>新版桶牛竞技场</p>
      </li>
      <li data-vid="w0144rtcynq" onclick="pgvSendClick({hottag:'a20151208mocha.index.videoslider1.videothumbs6'});">
        <img data-src="http://game.gtimg.cn/images/tgideas/act/a20151201mochademo/videoimg-320x180-6.jpg" alt="">
        <p>新版桶牛竞技场</p>
      </li>
    </ul>
  </div>
</div>
```

### 自定义属性说明
<table class="table table-bordered table-striped table-condensed"><tr><th>自定义属性</th><th>说明</th></tr><tr><td>data-psdw</td><td>设计稿宽度</td></tr><tr><td>data-sliderw</td><td>滑动块宽度</td></tr><tr><td>data-sliderh</td><td>滑动块高度</td></tr><tr><td>data-slidermarginbottom</td><td>大图与小图之间的间隙</td></tr><tr><td>data-lipaddingright</td><td>小图之间的间隙</td></tr><tr><td>data-proportion</td><td>视频尺寸比例 如：16:9则填写16-9</td></tr><tr><td>data-vid</td><td>视频id</td></tr><tr><td>data-src</td><td>视频缩略图地址</td></tr></table>

### 创建实例
```js
//Slider初始化
Slider.init(function(slider) {
  //创建实例sliderObj.slider10
  slider.type(6, [{
    id: 'slider10',
    callback: function() {
      console.log('slider10创建完成');
      sliderObj.slider10.play();
    }
  }]);
});
```

### type(param1,parem2)参数描述
<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>param1</td><td>Number</td><td>数字代表Slider样式一~样式六（1-6）</td></tr><tr><td>param2</td><td>Array</td><td>数组存放一个或多个Object类型数据<br><br>{id:'',callback:function(){}}<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>id</td><td>String</td><td>slider的id</td></tr><tr><td>callback</td><td>Function</td><td>实例化完成的回调方法<br><br>**slider实例可使用的方法**<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>play</td><td>Function</td><td>自动播放，如sliderObj.slider1.play();</td></tr><tr><td>playTo</td><td>Function</td><td>播放到第几个滑动块，如sliderObj.slider1.playTo(2);</td></tr><tr><td>stop</td><td>Function</td><td>停止自动播放，如sliderObj.slider1.stop();</td></tr><tr><td>prev</td><td>Function</td><td>播放前一个，如sliderObj.slider1.prev();</td></tr><tr><td>next</td><td>Function</td><td>播放后一个，如sliderObj.slider1.next();</td></tr></table></td></tr></table></td></tr></table>