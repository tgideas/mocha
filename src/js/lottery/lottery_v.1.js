/*
 * lottery v.1
 * Author:dereksu
 * Modify:2015-12-13
 * Description:
 * 1.html中data-psdw代表设计稿宽度，如640
 * 2.html中data-isscale代表是否要自适应屏幕尺寸进行缩放，如true/false (注：如果本身body有进行zoom缩放的，这里就不要再缩放了，即设为false)
 */
function lotteryScaleFun(lotteryId) {
	var clientW = parseInt($("#" + lotteryId).data('psdw')) / 2;
	document.getElementById(lotteryId).style.width = clientW + 'px';
	var clientWidth = document.documentElement.clientWidth ? document.documentElement.clientWidth : clientW;
	document.getElementById(lotteryId).style.zoom = clientWidth / clientW;
}

function lotteryScale(lotteryId) {
	var lottery1IsScale = $("#" + lotteryId).data('isscale');
	if (lottery1IsScale !== false) {
		lotteryScaleFun(lotteryId);
		$(window).bind('orientationchange', function(event) {
			lotteryScaleFun(lotteryId);
		});
		$(window).bind('resize', function(event) {
			lotteryScaleFun(lotteryId);
		});
	}
}
/**
 * 样式1js
 */
//点击开始抽奖
function callJsToStart1() {
	callFlashToRoll1(3);
}
//开发获得抽奖结果 开始播放效果
function callFlashToRoll1(id) {
	//通知转盘转到对应的中奖产品的id （序号从0,1,2.....，0是指针初始指示的位置，沿着顺时针的方向递增）
	if (lotteryObj1) lotteryObj1.stopRoll(id);
}
//动画完成通知js
function callJsToComplete1() {
	alert('lotteryObj1-恭喜你获奖了！');
}
//初始化抽奖对象的lotteryObj1 
var lotteryObj1 = new mo.Lottery({
	//'lighturl':'http://ossweb-img.qq.com/images/motion/lottery/light.png',
	'total': 12,
	'width': 307,
	'height': 247,
	'sbtnx': 77,
	'sbtny': 62,
	'sbtnw': 153,
	'sbtnh': 123,
	'boxw': 75,
	'boxh': 60,
	'position': "0_0,77_0,154_0,231_0,231_62,231_124,231_186,154_186,77_186,0_186,0_124,0_62",
	'contentId': 'lottery1content',
	'onClickRollEvent': callJsToStart1,
	'onCompleteRollEvent': callJsToComplete1
});
lotteryScale('lottery1');

/**
 * 样式2js
 */
//点击开始抽奖
function callJsToStart2() {
	callFlashToRoll2(5);
}
//开发获得抽奖结果 开始播放效果 
function callFlashToRoll2(id) {
	//通知转盘转到对应的中奖产品的id （序号从0,1,2.....，0是指针初始指示的位置，沿着顺时针的方向递增）
	if (lotteryObj2) lotteryObj2.stopRoll(id);
}
//动画完成通知js
function callJsToComplete2() {
	alert('lotteryObj2-恭喜你获奖了！');
}
//初始化抽奖对象的lotteryObj2 
var lotteryObj2 = new mo.Lottery({
	//'flashUrl' : 'http://ossweb-img.qq.com/images/flash/lottery/circle/lotteyround_2013_v1.swf',
	'r': 8, //奖品总数
	'width': 244, //转盘宽度
	'height': 244, //转盘高度
	'flashFirst': false,
	'b': 'http://ossweb-img.qq.com/images/flash/lottery/circle/g.png', //圆盘的图片
	's': 'http://ossweb-img.qq.com/images/flash/lottery/circle/z.png', //开始抽奖按钮图片
	'bx': 0, //圆盘的图片位置x坐标 （转盘的中心点坐标为（0,0））
	'by': 0, //圆盘的图片位置y坐标
	'sx': 0, //开始抽奖按钮x坐标
	'sy': 0, //开始抽奖按钮y坐标
	'contentId': 'lottery2content', //转盘div层的id 
	'onClickRollEvent': callJsToStart2, //对应上面接口
	'onCompleteRollEvent': callJsToComplete2 //对应上面接口
});
lotteryScale('lottery2');

//在html中配置尺寸，直接调用js...