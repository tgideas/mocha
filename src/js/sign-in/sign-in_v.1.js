/*
 * sign-in v.1
 * Author:dereksu
 * Modify:2015-12-21
 * Description:
 */


/**
 * 样式一JS
 */
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


/**
 * 样式而JS
 */
function signinScaleFun(signinId) {
	var clientW = parseInt($("#" + signinId).data('psdw')) / 2;
	document.getElementById(signinId).style.width = clientW + 'px';
	var clientWidth = document.documentElement.clientWidth ? document.documentElement.clientWidth : clientW;
	document.getElementById(signinId).style.zoom = clientWidth / clientW;
}

function signinScale(signinId) {
	var signinIsScale = $("#" + signinId).data('isscale');
	if (signinIsScale !== false) {
		signinScaleFun(signinId);
		$(window).bind('orientationchange', function(event) {
			signinScaleFun(signinId);
		});
		$(window).bind('resize', function(event) {
			signinScaleFun(signinId);
		});
	}
}
signinScale('signin');