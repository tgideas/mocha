<!-- 填写资料模块 -->
<h2><a id="user-content-gift领取礼包模块" class="anchor" href="#gift领取礼包模块" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" role="img" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>gift(领取礼包模块)</h2>
<p>作者：<code>kevinhehe</code>
版本：<code>v.1</code>
依赖：<code>mocha.css</code></p>
<pre>
<!-- 填写资料模块 -->
<h2 class="h2">fill-info(填写资料模块)<a href="/mocha/docs/fill-info/" class="btn-docs" target="_blank">查看文档</a></h2>
<button id="showDialogBtn1" href="javascript:;" class="button">点击弹出Dialog样式1</button>

<div class="mocha-fill-info">
	<div class="mocha-fill-main">
        <div class="mocha-fill-hd">
            <div class="mocha-fill-mark"></div>
        </div>
        <div class="mocha-fill-info-bd">
            <div class="mocha-fill-info-box">
                <div class="mocha-fill-info-panel">
                    <label>用户姓名：</label>
                    <input type="text" class="mocha-fill-info-name">
                </div>
                <div class="mocha-fill-info-panel" id="isex">
                    <label>性别：</label>
                    <span>男</span>
                    <input type="radio" name="sex" value="0" checked="">
                    <span>女</span>
                    <input type="radio" name="sex" value="1">
                </div>
            </div>
            <div class="mocha-fill-info-box">
                <div class="mocha-fill-info-panel">
                    <label>身份证号：</label>
                    <input type="text" class="mocha-fill-info-id">
                </div>
                <div class="mocha-fill-info-panel">
                    <label>联系电话：</label>
                    <input type="text" class="mocha-fill-info-mob" >
                </div>
            </div>
            <div class="mocha-fill-info-box">
                <label>QQ号码&nbsp;：</label>
                <input type="text" class="mocha-fill-info-post">
            </div>
            <div class="mocha-fill-info-box">
                <label>收货地址：</label>
                <input type="text" class="mocha-fill-info-addr" >
            </div>
        </div>
        <div class="mocha-fill-info-fd">
            <a class="mocha-fill-info-btn-submit" href="#">确认提交</a>
        </div>
   </div>
</div>
</pre>
