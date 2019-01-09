---
title: countdown(倒计时)
date: 2016-07-20 11:22:02
tags:
---

作者：`dereksu`
版本：`v.1`
依赖：`mocha.min.css` `countdown.min.js`
<div class="demo-qrcode"><a id="QRcode" href="http://tgideas.github.io/mocha/demo/countdown/demo.html" target="_blank">点击运行Demo</a></div>

### **demo1 Ajax请求favicon.ico获取服务器时间（演示自定义时间间隔符）** `.mocha-countdown-scheme1`

<div class="demo-preview">
![countdown demo1](http://ossweb-img.qq.com/images/js/mocha/images/demo/countdown1.png)

``` html
<div class="mocha-countdown mocha-countdown-scheme1 mocha-countdown-skin1">
  <p id="ctime1" class="content ctime1"></p>
</div>
```

可以在您的css中覆盖`.mocha-countdown-skin1`皮肤类
``` css
/* skin */
.mocha-countdown-skin1 .content{line-height: .3rem;font-size: .2rem;padding: .2rem .04rem;display: inline-block;letter-spacing: .01rem;background-color:#4e4e4e;color:#fff;}
```

JS代码
```js
var ctimer1 = new countDown("ctime1",{
  ttime:[2025,10,11,12,00,00],
  gap:getServerTime().stgap,
  sp:["-","-","-",""]
});
```
</div>

### **demo2 通过PHP获取服务器时间（演示CSS3动画、自定义时间间隔符）** `.mocha-countdown-scheme1`

<div class="demo-preview">
![countdown demo2](http://ossweb-img.qq.com/images/js/mocha/images/demo/countdown2.png)

``` html
<div class="mocha-countdown mocha-countdown-scheme1 mocha-countdown-skin1">
  <p id="ctime2" class="content ctime2"></p>
</div>
```

可以在您的css中覆盖`.mocha-countdown-skin1`皮肤类
``` css
/* skin */
.mocha-countdown-skin1 .content{line-height: .3rem;font-size: .2rem;padding: .2rem .04rem;display: inline-block;letter-spacing: .01rem;background-color:#4e4e4e;color:#fff;}
.mocha-countdown-skin1 .content .ctime2_p{display:inline-block;vertical-align:middle;margin:0 .01rem;width:.16rem;height:.4rem;line-height:.4rem;overflow:hidden;text-align:center;color:#4e4e4e;border:1px solid #eee;border-radius:.05rem;background:#fff;box-shadow:3px 3px 7px rgba(0,0,0,0.3)}
.mocha-countdown-skin1 .content .nanistyle{-webkit-animation:nanistyle 0.8s;}
@-webkit-keyframes nanistyle{
  0% {opacity: 0;-webkit-transform-origin: 50% 0%;-webkit-transform: perspective(800px) rotateX(90deg);}
  50% {opacity: 1;-webkit-transform-origin: 50% 0%;-webkit-transform: perspective(800px) rotateX(-20deg);}
  100% {opacity: 1;-webkit-transform-origin: 50% 0%;-webkit-transform: perspective(800px) rotateX(0deg);}
}
```

JS代码
```js
var scriptLoader=function(b,a,f){var d=b.split("."),c=d[d.length-1],e=document.createElement("script"),g="src";e.setAttribute(g,b);document.body.appendChild(e);e.onload=function(){if(typeof a=="function"){if(typeof f!="undefined"){a(f)}else{a()}}};e.onerror=function(){}};
scriptLoader('http://apps.game.qq.com/CommArticle/app/reg/gdate.php',function(){
//通过php获取本地与服务器时间差_gapTime，获取不到则使用客户端时间
var _gapTime = typeof(json_curdate)!=="undefined" ? +new Date(json_curdate.replace(/-/g,"/"))-(+new Date()) : 0;

var ctimer2 = new countDown("ctime2",{
  ttime:[2025,10,11,12,00,00],
  gap:_gapTime,
  nani:'nanistyle',
  sp:["天","时","分","秒"]
});

});
```
</div>

### **demo3 倒计时结束（演示当倒计时到00天的时候隐藏'00天'、倒计时完成的回调方法）** `.mocha-countdown-scheme1`

<div class="demo-preview">
![countdown demo3](http://ossweb-img.qq.com/images/js/mocha/images/demo/countdown3.png)

``` html
<div class="mocha-countdown mocha-countdown-scheme1 mocha-countdown-skin1">
  <p id="ctime3" class="content ctime3"></p>
</div>
```

可以在您的css中覆盖`.mocha-countdown-skin1`皮肤类
``` css
/* skin */
.mocha-countdown-skin1 .content{line-height: .3rem;font-size: .2rem;padding: .2rem .04rem;display: inline-block;letter-spacing: .01rem;background-color:#4e4e4e;color:#fff;}
```

JS代码
```js
var scriptLoader=function(b,a,f){var d=b.split("."),c=d[d.length-1],e=document.createElement("script"),g="src";e.setAttribute(g,b);document.body.appendChild(e);e.onload=function(){if(typeof a=="function"){if(typeof f!="undefined"){a(f)}else{a()}}};e.onerror=function(){}};
scriptLoader('http://apps.game.qq.com/CommArticle/app/reg/gdate.php',function(){
//通过php获取本地与服务器时间差_gapTime，获取不到则使用客户端时间
var _gapTime = typeof(json_curdate)!=="undefined" ? +new Date(json_curdate.replace(/-/g,"/"))-(+new Date()) : 0;

var ctimer3 = new countDown("ctime3",{
  ttime:[2015,12,25,18,41,00],
  gap:_gapTime,
  sp:["天","时","分","秒"],
  hideday:true,
  done:function(){
    console.info('ctime3倒计时时间到！');
  }
});

});
```

countDown(param1,parem2)参数描述
<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>param1</td><td>String</td><td>容器id，必选</td></tr><tr><td>param2</td><td>Object</td><td><br>{ttime:[],gap:0,sp:[],nani:'',hideday:true,done:function(){}}<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>ttime</td><td>Array</td><td>倒计时的时间，年月日时分秒，如[2016,12,25,12,00,00]，必选;</td></tr><tr><td>gap</td><td>Number</td><td>客户端与服务器时间差(单位ms)，默认为0，调用客户端时间，可选;</td></tr><tr><td>sp</td><td>Array</td><td>时间分隔符，默认为[":",":",":",""]，可选;</td></tr><tr><td>nani</td><td>String</td><td>数字变化时的CSS3效果，默认为'nani'，可选;</td></tr><tr><td>hideday</td><td>Boolean</td><td>是否当倒计时到00天的时候隐藏'00天'，默认为false，可选;</td></tr><tr><td>done</td><td>Function</td><td>倒计时完成时的回调函数，可选</td></tr></table></td></tr></table>

每个实例可使用的方法
<table class="table table-bordered table-striped table-condensed"><tr><th>名称</th><th>类型</th><th>描述</th></tr><tr><td>pause</td><td>Function</td><td>暂停倒计时，如ctimer1.pause();可在切换到其他场景时暂停倒计时的执行</td></tr><tr><td>play</td><td>Function</td><td>暂停之后再次播放倒计时，如ctimer1.play();</td></tr></table>
</div>
