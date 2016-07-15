---
title: search-bar(搜索栏模块)
date: 2016-03-07 20:00:00
tags:
---
作者：`kevinhehe`
版本：`v.1`
依赖：`mocha.css` `zepto.js` 
<div class="demo-qrcode"><a id="QRcode" href="http://tgideas.github.io/mocha/demo/search-bar/demo.html" target="_blank">点击运行Demo</a></div>
### 样式1 `.mocha-search-bar-scheme1`
<div class="demo-preview"><div class="box-w320"><img src="http://ossweb-img.qq.com/images/js/mocha/images/demo/search-bar.png" alt="样式1"></div>
``` html
<div class="mocha-search-bar mocha-search-bar-scheme1 mocha-search-bar-skin1">
	<div class="mocha-search-bar-wrap" id="searchBar">
        <form class="mocha-search-bar-outer">
            <div class="mocha-search-bar-inner">
                <i class="icon-search"></i>
                <input type="search" class="mocha-search-bar-input" id="searchInput" placeholder="搜索" required/>
                <a href="javascript:" class="icon-clear" id="searchClear"></a>
            </div>
            <label for="searchInput" class="mocha-search-bar-text" id="searchText">
                <i class="icon-search"></i>
                <span>搜索</span>
            </label>
        </form>
        <a href="javascript:" class="mocha-search-bar-cancel" id="searchCancel">取消</a>
    </div>
    <div class="mocha-search-bar-cells mocha-search-bar-cells-access mocha-search-bar-show" id="searchShow">
        <div class="mocha-search-bar-cell">
            <div class="mocha-search-bar-cell-primary">
                <p>实时搜索文本</p>
            </div>
        </div>
        <div class="mocha-search-bar-cell">
            <div class="mocha-search-bar-cell-primary">
                <p>实时搜索文本</p>
            </div>
        </div>
        <div class="mocha-search-bar-cell">
            <div class="mocha-search-bar-cell-primary">
                <p>实时搜索文本</p>
            </div>
        </div>
        <div class="mocha-search-bar-cell">
            <div class="mocha-search-bar-cell-primary">
                <p>实时搜索文本</p>
            </div>
        </div>
    </div>
</div>
```
</div>
### search-bar实例化JS
依赖`zepto.js`组件
``` html
<!-- 实例化 -->
<script>
$("#searchInput").on({
    focus: function() {
        //searchBar
        var $mochaSearchBar = $('#searchBar');
        $mochaSearchBar.addClass('mocha-search-bar-focusing');
    },
    blur: function() {
        var $mochaSearchBar = $('#searchBar');
        $mochaSearchBar.removeClass('mocha-search-bar-focusing');
        if ($(this).val()) {
            $('#searchText').hide();
        } else {
            $('#searchText').show();
        }
    },
    input: function() {
        var $searchShow = $("#searchShow");
        if ($(this).val()) {
            $searchShow.show();
        } else {
            $searchShow.hide();
        }
    }
})
$("#searchCancel").on('touchend',function() {
    $("#searchShow").hide();
    $('#searchInput').val('');
})
$("#searchClear").on('touchend',function() {
    $("#searchShow").hide();
    $('#searchInput').val('');
})
</script>
```

### 修改模块皮肤CSS 
模块的默认皮肤类`.mocha-search-bar-skin1`，您可以在您项目的`page.css`里修改`.mocha-search-bar-skin1`皮肤类，或者新增`.mocha-search-bar-skin2`。
``` css
/* skin */
.mocha-search-bar-skin1{font-size:0.12rem;}
.mocha-search-bar-skin1 .mocha-search-bar-wrap{background-color: #EFEFF4;}
.mocha-search-bar-skin1 .mocha-search-bar-wrap:before{border-top: 1px solid #C7C7C7;color: #C7C7C7;}
.mocha-search-bar-skin1 .mocha-search-bar-wrap:after{border-bottom: 1px solid #C7C7C7;color: #C7C7C7;}
.mocha-search-bar-skin1 .mocha-search-bar-outer{background-color: #EFEFF4;}
.mocha-search-bar-skin1 .mocha-search-bar-outer:after{border: 1px solid #E6E6EA;background: #FFFFFF;}
.mocha-search-bar-skin1 .mocha-search-bar-inner .mocha-search-bar-input{font-size: .14rem;}
.mocha-search-bar-skin1 .mocha-search-bar-text{color: #9B9B9B;background: #FFFFFF;}
.mocha-search-bar-skin1 .mocha-search-bar-text span{font-size: .14rem;}
.mocha-search-bar-skin1 .mocha-search-bar-cancel{color: #333;}
.mocha-search-bar-skin1 .mocha-search-bar-cell:before{border-top: 1px solid #D9D9D9;color: #D9D9D9;}
.mocha-search-bar-skin1 .mocha-search-bar-cells{background-color: #FFFFFF;}
.mocha-search-bar-skin1 .mocha-search-bar-cells:before{border-top: 1px solid #D9D9D9;color: #D9D9D9;}
.mocha-search-bar-skin1 .mocha-search-bar-cells:after{border-bottom: 1px solid #D9D9D9;color: #D9D9D9;}
.mocha-search-bar-skin1 .mocha-search-bar-cells_title,
.mocha-search-bar-skin1 .mocha-search-bar-cells_tips{color: #888;font-size: .14rem;}
.mocha-search-bar-skin1 .mocha-search-bar-cells-access .mocha-search-bar-cell:not(.no-access):active{background-color: #ECECEC;}
.mocha-search-bar-skin1 .mocha-search-bar-show{font-size: .14rem;}
.mocha-search-bar-skin1 .mocha-search-bar-show .mocha-search-bar-cell-primary{color: #666;}
```