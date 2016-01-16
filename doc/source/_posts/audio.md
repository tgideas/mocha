---
title: audio
date: 2016-01-13 16:30:00
tags:
---

## audio(音频样式)
作者：`kevinhehe`
版本：`v.1`
依赖：`mocha.css`

![audio](http://game.gtimg.cn/images/js/mocha/images/demo/audio.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/audio/demo.html "audio(视频模块)")

### 样式1 `.mocha-audio-scheme1`
``` html
<div class="mocha-audio mocha-audio-scheme1 mocha-audio-skin1">
    <a id="mochaAudioPlay" class="mocha-audio-btn" href="javascript:;"><span class="mocha-audio-icon-play"></span></a>
    <a id="mochaAudioPause" class="mocha-audio-btn" href="javascript:;" style="display:none;"><span class="mocha-audio-icon-pause"></span></a>
    <div class="mocha-audio-info">
        <p>音频名称 3'33"</p>
        <p>音频简介内容</p>
    </div>
</div>
```

### audio实例化JS
依赖`zepto.js`组件
``` html
<script src="http://game.gtimg.cn/images/js/zepto/zepto.min.js"></script>
<script>
    (function mochaAudioFunc(){
        $("#mochaAudioPlay").bind("tap",function(){
            $(this).css("display","none");
            $("#mochaAudioPause").css("display","inline-block");
        })
        $("#mochaAudioPause").bind("tap",function(){
            $(this).css("display","none");
            $("#mochaAudioPlay").css("display","inline-block");
        })
    })()
</script>
</script>
```

### 修改模块皮肤CSS 
模块的默认皮肤类`.mocha-audio-skin1`，您可以在您项目的`page.css`里修改`.mocha-audio-skin1`皮肤类，或者新增`.mocha-audio-skin2`。
``` css
/* skin */
.mocha-audio-skin1{font-size: .16rem;}
.mocha-audio-skin1 .mocha-audio-btn{background-color: #3f3f3f;}
.mocha-audio-skin1 .mocha-audio-icon-play{border-left-color:#fff;}
.mocha-audio-skin1 .mocha-audio-icon-pause{background: linear-gradient(90deg, #fff 37%, transparent 37%, transparent 63%, #fff 63%);}
```
