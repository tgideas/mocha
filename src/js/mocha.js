// 设置Font-size
(function(){
	function resize() {
	    var html=document.documentElement,
	        w = html.clientWidth,
	        h = html.clientHeight;
	    document.getElementsByTagName("body")[0].style.opacity = "0";
	    html.style.fontSize= w > h ? w/586*100+"px" : w/320*100+"px";
	    setTimeout(function() {
	    	document.getElementsByTagName("body")[0].style.opacity = "1";
	    }, 50);
	};
	resize();
	var evt = "onorientationchange" in window ? "orientationchange" : "resize";
	window.addEventListener(evt, resize, false);
})();