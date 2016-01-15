---
title: sign-in
date: 2016-01-20 19:46:09
tags:
---

## sign-in(签到模块)
作者：`dereksu`
版本：`v.1`
依赖：`mocha.min.css` `qqapi.js` `zepto.js` `milo.js` `reporting.js`

![sign-in 样式一](http://ossweb-img.qq.com/images/js/mocha/images/demo/sign-in1.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/sign-in/demo.html#signindemo1 "sign-in 样式一")

### **样式一 日历签到** `.mocha-sign-in-scheme1`
``` html
<div class="mocha-sign-in mocha-sign-in-scheme1 mocha-sign-in-skin1">
  <div class="title-panel clearfix">
    <span class="tit">签到日历</span>
    <span class="total">本月已累积签到<i class="num" id="queryCheckInRes">0</i>天</span>
    <span class="qqnum" id="login_qq_span"></span>
  </div>
  <div class="date-panel clearfix">
    <span class="nowdate" id="nowDate"></span>
  </div>
  <div id="cal" class="calendar">
    <!-- 组件自动填充日历表格 -->
  </div>
  <div class="btn-panel">
    <a class="signinbtn" onclick="amsSubmit(39028,216921)">签到</a>
    <a class="querysigninbtn" onclick="amsInit(39028,216920);">查询签到 </a>
  </div>
</div>
```

### 可以在您的css中覆盖`.mocha-sign-in-scheme1.mocha-sign-in-skin1`皮肤类
``` css
/* skin */
.mocha-sign-in-scheme1.mocha-sign-in-skin1{background: #bbb;border: #2a2a2a solid 1px;}
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .title-panel{background:#2a2a2a;font-size: .12rem;color:#fff;line-height:.16rem;padding: .02rem 0;}
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .title-panel .tit{padding-left: 5px;}
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .title-panel .total{padding-right:5px;}
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .title-panel .qqnum{padding-right:5px;}
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .date-panel{font-size: .12rem;line-height: .16rem;padding: .02rem 0;color:#171717;border-top:1px #65655b solid;border-bottom: 1px #65655b solid;}
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .date-panel .nowdate{padding-right:5px;}
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .btn-panel{font-size: .12rem;color:#fff;line-height: .22rem;}
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .btn-panel .signinbtn{border: 1px solid #ccc;border-radius: 5px;background: #009dfe;margin:.1rem .05rem;padding:0 .05rem;}
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .btn-panel .querysigninbtn{border: 1px solid #ccc;border-radius: 5px;background: #009dfe;margin:.1rem .05rem;padding:0 .05rem;}
/*日历请用TABLE构造 以下为基础样式*/
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .calendar table{ border-collapse:collapse;margin:0 auto;padding:0;border: 0;}
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .calendar td{ border:5px #bbb solid; padding:.3em .3em;text-align:center;}
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .calendar th{border:5px #bbb solid; padding:.3em .3em;text-align:center;}
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .calendar tbody{background: #4f4f4f; color: #bbb; }
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .calendar thead{background: #bbb; color: #171717; }
/*以下样式为组件根据类名自动为对应元素追加的样式*/
/*可不用此类名，也可更改对应DOM结构，只需要修改对应控件接口即可*/
/*main是追加在标签TABLE上的样式*/
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .calendar .main{background: #4f4f4f; color: #bbb;font-size: .14rem;}
/*head是追加在标签THEAD上的样式*/
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .calendar .head{background: #bbb; color: #171717;}
/*head是追加在标签TBODY上的样式*/
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .calendar .body{}
/*week是追加在标签TBODY中的TR的样式*/
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .calendar .week{background: #4f4f4f; color: #bbb;}
/*normal是追加在标签TD上的样式，用以表示普通日的样式*/
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .calendar .normal{color:#fefefe;}
/*normal是追加在标签TD上的样式，用以表示非活动日的样式*/
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .calendar .noday{color: #bbb;}
/*normal是追加在标签TD上的样式，用以表示今日的样式*/
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .calendar .today{color: green;}
/*normal是追加在标签TD上的样式，用以表示特殊日的样式*/
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .calendar .special{color: #000; background:red;}
/*normal是追加在标签TD上的样式，用以表示周末的样式*/
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .calendar .weekend{color:red;}
/*normal是追加在标签TD上的样式，用以表示签到日的样式，仅在签到日历中使用*/
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .calendar .signcls{background:green;color:black;}
/*normal是追加在标签TD上的样式，用以表示未签到日的样式，仅在签到日历中使用*/
.mocha-sign-in-scheme1.mocha-sign-in-skin1 .calendar .nosigncls{background:gray;color:black;}
```

### JS代码
```js
//获取当前的日期
var myDate = new Date();
var nowYear = myDate.getFullYear(); //年
var nowMonth = myDate.getMonth() + 1; //月
var nowDate = myDate.getDate(); //日
document.getElementById('nowDate').innerHTML = nowYear + '年' + nowMonth + '月' + nowDate + '日';
//提交签到的配置
amsCfg_216921 = {
  type: "comit",
  sData: {
    "appid": "363"
  },
  success: function(res) {
    amsInit(39028, 216920);
    console.log(res.sMsg);
  }
};
//查询签到的配置
amsCfg_216920 = {
  type: "query",
  sData: {
    "appid": "363"
  },
  success: function(checkInInfo, signDateList) { //返回总天数
    g("queryCheckInRes").innerHTML = checkInInfo.total;
  },
  calCfg: { //日历显示的配置对象，更多参数可参考Calendar & SignCalendar 类
    specialday: [], //特殊日期
    container: "cal", //日历显示容器
    onCreateDay: function(day, type, y, m, d) { //日历对象的dom内容
      day.innerHTML = "" + d + "";
    },
    signDateList: []
  },
  css: "biz.calendar.cal", //css样式，有特殊样式，请用绝对地址
  calShow: true, //日历是否显示
  msg: { //msg 提示语句对象
    "systemError": "很抱歉，系统繁忙，请稍后再试",
    "hasCheckin": "您今天已签到",
    "checkinSuccess": "签到成功",
    "checkinFailure": "签到成功"
  }
};
//初始化签到
amsInit(39028, 216920);
//获取当前登录的QQ号
milo.ready(function() {
  need("biz.login", function(LoginManager) {
    LoginManager.checkLogin(function() {
      g("login_qq_span").innerHTML = LoginManager.getUserUin();
    });
  });
});
```

![sign-in 样式二](http://ossweb-img.qq.com/images/js/mocha/images/demo/sign-in2.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/sign-in/demo.html#signindemo2 "sign-in 样式二")

### **样式二 短期签到** `.mocha-sign-in-scheme2`
``` html
<div class="mocha-sign-in mocha-sign-in-scheme2 mocha-sign-in-skin1">
  <div class="content">
    <div class="signinbox clearfix">
      <a href="javascript:void(0);" class="signinitem signcls"></a>
      <a href="javascript:void(0);" class="signinitem signcls"></a>
      <a href="javascript:void(0);" class="signinitem signcls"></a>
      <a href="javascript:void(0);" onclick="amsSubmit(39028,216921)" class="signinitem today">签</a>
      <a href="javascript:void(0);" class="signinitem normal"></a>
      <a href="javascript:void(0);" class="signinitem normal"></a>
      <a href="javascript:void(0);" class="signinitem normal"></a>
    </div>
  </div>
</div>
```

### 可以在您的css中覆盖`.mocha-sign-in-scheme2.mocha-sign-in-skin1`皮肤类
``` css
/* skin */
.mocha-sign-in-scheme2.mocha-sign-in-skin1 .content{width: 2.7rem;height:0.30rem;}
.mocha-sign-in-scheme2.mocha-sign-in-skin1 .content:before{background: #4e4e4e;height: 0.06rem;margin-top: -0.03rem;}
.mocha-sign-in-scheme2.mocha-sign-in-skin1 .content .signinbox{color:#fefefe;font-size: .12rem;text-align: center;line-height: 0.3rem;}
.mocha-sign-in-scheme2.mocha-sign-in-skin1 .content .signinbox .signinitem{background: #4e4e4e;border-radius: 50%;color: inherit;width:.3rem;margin: 0 .05rem;}
.mocha-sign-in-scheme2.mocha-sign-in-skin1 .content .signinbox .signinitem.normal{background: #4e4e4e;}
.mocha-sign-in-scheme2.mocha-sign-in-skin1 .content .signinbox .signinitem.signcls{background: green;}
.mocha-sign-in-scheme2.mocha-sign-in-skin1 .content .signinbox .signinitem.today{background: #009dfe;}
.mocha-sign-in-scheme2.mocha-sign-in-skin1 .content .signinbox .signinitem:first-child{margin-left: 0;}
.mocha-sign-in-scheme2.mocha-sign-in-skin1 .content .signinbox .signinitem:last-child{margin-right: 0;}
```

### 其他说明
amsSubmit(39028活动ID,216921提交签到ID)
amsInit(39028活动ID,216920查询签到ID)
amsCfg_216921.sData.appid：开发那边配置的，一般用于检测用户是否已经关注了微信公众号等操作
`注：活动ID、提交签到ID、查询签到ID都是由开发同学在系统中配置的。所以前端同学编写完JS代码之后还要交给开发同学进一步开发完成`