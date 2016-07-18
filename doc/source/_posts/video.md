---
title: video(视频模块)
date: 2016-01-13 16:30:00
tags:
---
作者：`kevinhehe`
版本：`v.1`
依赖：`mocha.css`
<div class="demo-qrcode"><a id="QRcode" href="http://tgideas.github.io/mocha/demo/video/demo.html" target="_blank">点击运行Demo</a></div>
### 样式1 `.mocha-video-scheme1`
<div class="demo-preview"><div class="box-w320"><img src="http://ossweb-img.qq.com/images/js/mocha/images/demo/video.png" alt="样式1"></div>
``` html
<div id="mochaVideo" class="mocha-video mocha-video-scheme1 mocha-video-skin1"></div>
```
</div>
### video实例化JS
依赖`tvp.player_v2.js`组件
``` html
<script src="http://imgcache.gtimg.cn/tencentvideo_v1/tvp/js/tvp.player_v2.js" charset="utf-8"></script>
<script type="text/javascript">
var video = new tvp.VideoInfo();
video.setVid("l0165p3yzq5");
var player =new tvp.Player();
player.create({
    width:"100%",
    video:video,
    modId:"mochaVideo",
    playerType: 'html5',
    isHtml5UseUI:true,
    isHtml5UseAirPlay:true,
    isHtml5ShowPosterOnChange:false, /*HTML5播放器切换视频的时候是否要显示Poster*/
    autoplay:false 
});
</script>
```

### 修改模块皮肤CSS 
模块的默认皮肤类`.mocha-video-skin1`，您可以在您项目的`page.css`里修改`.mocha-video-skin1`皮肤类，或者新增`.mocha-video-skin2`。