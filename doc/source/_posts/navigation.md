---
title: navigation
date: 2016-01-14 11:00:00
tags:
---

## navigation(导航栏模块)
作者：`kevinhehe`
版本：`v.1`
依赖：`mocha.css`

![navigation](http://game.gtimg.cn/images/js/mocha/images/demo/navigation1.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/navigation/demo.html "navigation(导航栏模块)")

### 样式1-无导航 `.mocha-navigation-scheme1`
``` html
<header class="mocha-nav mocha-navigation-scheme1 mocha-nav-skin1">
    <div class="mocha-nav-cover"></div>
    <a href="javascript:;" class="mocha-nav-logo">
        <img src="http://dummyimage.com/40x40/000/fff" alt="游戏名字" />
        <div class="mocha-nav-logo-desc">
            <h1>我叫MT2</h1>
            <h2>焕新一代3D手游</h2>
        </div>
    </a>
    <a href="javascript:;" class="mocha-nav-btn">关注</a>
</header>
```

### 样式2-有导航 `.mocha-navigation-scheme2`
``` html
<header class="mocha-nav .mocha-navigation-scheme2 mocha-nav-skin1">
    <div class="mocha-nav-cover"></div>
    <a href="javascript:;" class="mocha-nav-logo">
        <img src="http://dummyimage.com/40x40/000/fff" alt="游戏名字" />
        <div class="mocha-nav-logo-desc">
            <h1>我叫MT2</h1>
            <h2>焕新一代3D手游</h2>
        </div>
    </a>
    <!-- 导航 -->
    <div class="mocha-nav-navigation">
        <div class="mocha-nav-navigation-cover"></div>
        <nav class="mocha-nav-list">
            <div class="mocha-nav-list-cover">
                <ul>
                  <li><a href="javascript:;">首页</a></li>
                  <li><a href="javascript:;">热门活动</a></li>
                  <li><a href="javascript:;">新闻中心</a></li>
                  <li><a href="javascript:;">游戏攻略</a></li>
                  <li><a href="javascript:;">游戏图库</a></li>
                  <li><a href="javascript:;">论坛</a></li>
                </ul>
            </div>
        </nav>
        <div class="mocha-nav-slide"><i class="mocha-nav-slide-icon" title="导航开关"></i></div>
    </div>
    <a href="javascript:;" class="mocha-nav-btn">进入游戏</a>
</header>
```

![navigation](http://game.gtimg.cn/images/js/mocha/images/demo/navigation2.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/navigation/demo2.html "navigation(导航栏模块)")

### 样式3-导航在下方且滚动固定 `.mocha-navigation-scheme3`(导航在下方)+`.mocha-navigation-scheme4`(滚动固定 )
``` html
<header class="mocha-nav mocha-navigation-scheme3 mocha-navigation-scheme4 mocha-nav-skin1">
    <div class="mocha-nav-cover"></div>
    <a href="javascript:;" class="mocha-nav-logo">
        <img src="http://dummyimage.com/40x40/000/fff" alt="游戏名字" />
        <div class="mocha-nav-logo-desc">
            <h1>我叫MT2</h1>
            <h2>焕新一代3D手游</h2>
        </div>
    </a>
    <!-- 导航 -->
    <div class="mocha-nav-box">
        <div class="mocha-nav-box-cover"></div>
        <nav class="mocha-nav-list">
            <div class="mocha-nav-list-cover">
                <ul>
                  <li><a href="javascript:;">首页</a></li>
                  <li><a href="javascript:;">热门活动</a></li>
                  <li><a href="javascript:;">新闻中心</a></li>
                  <li><a href="javascript:;">游戏攻略</a></li>
                  <li><a href="javascript:;">游戏图库</a></li>
                  <li><a href="javascript:;">论坛</a></li>
                </ul>
            </div>
        </nav>
        <div class="mocha-nav-slide"><i class="mocha-nav-slide-icon" title="导航开关"></i></div>
    </div>
    <a href="javascript:;" class="mocha-nav-btn">进入游戏</a>
</header>
```

### navigation实例化JS
依赖`zepto.js`组件
``` html
<script src="http://game.gtimg.cn/images/js/zepto/zepto.min.js"></script>
<script>
    /*有导航*/
    $(".mocha-nav-slide").bind("touchstart", function() {
        if ($(".mocha-nav-list-open").length) {
            $(".mocha-nav-list").removeClass("mocha-nav-list-open");
            $(".mocha-nav-slide").removeClass("mocha-nav-slide-close");
            $("body").unbind("touchmove", false);
            $(".mocha-nav-box").removeClass("mocha-nav-box-big");
        } else {
            $(".mocha-nav-list").addClass("mocha-nav-list-open");
            $(".mocha-nav-slide").addClass("mocha-nav-slide-close");
            $("body").bind("touchmove", false);
            $(".mocha-nav-box").addClass("mocha-nav-box-big");
        }
    }, false);

    /*导航固定需加下方代码*/
    $("body").bind("touchend", function() {
        if (window.scrollY >= 90) {
            $(".mocha-navigation-scheme4").addClass("mocha-nav-fixed");
        } else {
            $(".mocha-nav-fixed").removeClass("mocha-nav-fixed");
        }
    }, false);
</script>
```

### 修改模块皮肤CSS 
模块的默认皮肤类`.mocha-navigation-skin1`，您可以在您项目的`page.css`里修改`.mocha-navigation-skin1`皮肤类，或者新增`.mocha-navigation-skin2`。
``` css
/* skin */
.mocha-nav-skin1{font-size: .16rem;background-color: #dadada;}
.mocha-nav-skin1 .mocha-nav-cover{background-color: #dadada;}
.mocha-nav-skin1 .mocha-nav-logo{color: #000;}
.mocha-nav-skin1 .mocha-nav-btn{background-color: #717171;color: #fff;}
.mocha-nav-skin1.mocha-navigation-scheme1{background-color: none;}
.mocha-nav-skin1 .mocha-nav-slide-icon,.mocha-nav-skin1 .mocha-nav-slide-icon:before,.mocha-nav-skin1 .mocha-nav-slide-icon:after{background:#717171;}
.mocha-nav-skin1 .mocha-nav-slide-close .mocha-nav-slide-icon{background:transparent;}
.mocha-nav-skin1 .mocha-nav-slide-close .mocha-nav-slide-icon:before,.mocha-nav-skin1 .mocha-nav-slide-close .mocha-nav-slide-icon:after{background:#717171;}
.mocha-nav-skin1 .mocha-nav-list-cover{background:#bbb;}
.mocha-nav-skin1 .mocha-nav-list li{border-top:1px solid #9f9f9f;}
.mocha-nav-skin1 .mocha-nav-list a{color:#000;}
.mocha-nav-skin1.mocha-navigation-scheme2 .mocha-nav-slide{background:#bbb;}
.mocha-nav-skin1.mocha-navigation-scheme2 .mocha-nav-slide:before{border-color:#bbb transparent transparent;}
```