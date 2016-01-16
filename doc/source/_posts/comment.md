---
title: comment
date: 2016-01-14 11:00:00
tags:
---

## comment(评论样式)
作者：`kevinhehe`
版本：`v.1`
依赖：`mocha.css`

![comment](http://game.gtimg.cn/images/js/mocha/images/demo/comment.png)

### [运行Demo](http://tgideas.github.io/mocha/demo/comment/demo.html "comment(评论样式)")

### 样式1 `.mocha-comment-scheme1`
``` html
<div class="mocha-comment mocha-comment-scheme1 mocha-comment-skin1">
    <div class="mocha-comment-content">
        <div class="mocha-comment-list">
            <div class="mocha-comment-list-infobox">
                <cite class="mocha-comment-list-head"><img src="http://dummyimage.com/40x40/000/fff"></cite>
                <div class="mocha-comment-list-title">齐天大盛</div>
                <a class="mocha-comment-list-reply" href="javascript:void(0);">回复</a>
            </div>
            <div class="mocha-comment-list-txt">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
            <div class="mocha-comment-list-date"><span>09月24日</span><span>09:56</span></div>
            <div class="mocha-comment-list-second">
                <div class="mocha-comment-list-second-bar">
                    <ul>
                        <li><span>某人说:</span>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</li>
                        <li><span>凯文呵呵</span><cite>回复</cite>凯文呵呵:222</li>
                    </ul>
                    <div class="mocha-comment-list-more">查看更多...</div>
                </div>
            </div>
        </div>
        <div class="mocha-comment-list">
            <div class="mocha-comment-list-infobox">
                <cite class="mocha-comment-list-head"><img src="http://dummyimage.com/40x40/000/fff"></cite>
                <div class="mocha-comment-list-title">昆仑山</div>
                <a class="mocha-comment-list-reply" href="javascript:void(0);">回复</a>
            </div>
            <div class="mocha-comment-list-txt">内容内容内容内容</div>
            <div class="mocha-comment-list-date"><span>09月24日</span><span>09:56</span></div>
        </div>
    </div>
    <div class="mocha-comment-btn">
        <a id="showCommentBtn" href="javascript:void(0);">我要评论</a>
    </div>
    <div id="demoCommentAlert" class="mocha-comment-alert" style="display: none;">
        <div class="mocha-comment-alert-mark"></div>
        <div class="mocha-comment-alert-box">
            <div class="imocha-comment-alert-form">
                <textarea class="mocha-comment-alert-textarea" placeholder="请输入内容，140字以内"></textarea>
            </div>
            <div class="mocha-comment-alert-shop clearfix">
                <span class="mocha-comment-alert-words">已超出<b class="mocha-comment-alert-num">0</b>个字</span>
                <div class="mocha-comment-alert-btn">
                    <span class="mocha-comment-alert-cancel">取消</span>
                    <span class="mocha-comment-alert-reply">回复</span>
                </div>
            </div>
        </div>
    </div>
</div>
```

### comment实例化JS
依赖`zepto.js`组件
``` html
<script src="http://game.gtimg.cn/images/js/zepto/zepto.min.js"></script>
<script>
    (function mochaCommentFunc(){
        $("#showCommentBtn").bind("tap",function(){
            $("#demoCommentAlert").css("display","block");
        })
        $(".mocha-comment-list-reply").bind("tap",function(){
            $("#demoCommentAlert").css("display","block");
        })
        $(".mocha-comment-alert-cancel").tap(function(){
            $(this).parents(".mocha-comment-alert").css("display","none");
        })
    })()
</script>
```

### 修改模块皮肤CSS 
模块的默认皮肤类`.mocha-comment-skin1`，您可以在您项目的`page.css`里修改`.mocha-comment-skin1`皮肤类，或者新增`.mocha-comment-skin2`。
``` css
/* skin */
.mocha-comment-skin1{font-size: .16rem;}
.mocha-comment-skin1 .mocha-comment-list-reply{color:#69c;}
.mocha-comment-skin1 .mocha-comment-list-title em{color:#0e0e0e;}
.mocha-comment-skin1 .mocha-comment-list-date span{color:#a6a6a6;font-size:.12rem;}
.mocha-comment-skin1 .mocha-comment-list-second{font-size:.14rem;}
.mocha-comment-skin1 .mocha-comment-list-second-bar{background:#f3f3f3;}
.mocha-comment-skin1 .mocha-comment-list-second-bar cite{color:#69c;}
.mocha-comment-skin1 .mocha-comment-list-more{color:#69c;}
.mocha-comment-skin1 .mocha-comment-btn{background:#e9e9e9;font-size:.14rem;}
.mocha-comment-skin1 .mocha-comment-alert-box{background:#fff;font-size:.14rem;}
.mocha-comment-skin1 .mocha-comment-alert-textarea{color:#323230;font-size:.14rem;}
.mocha-comment-skin1 .mocha-comment-alert-shop .mocha-comment-alert-words b{color:#69c;}
.mocha-comment-skin1 .mocha-comment-alert-btn span:nth-last-of-type(1){background:#69c; color:#fff;}
```