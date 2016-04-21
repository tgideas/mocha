// 设置Font-size
(function (win,doc){
	if (!win.addEventListener) return; 
	var html=document.documentElement; 
	function setFont() {
		var w = html.clientWidth,
			h = html.clientHeight;
		html.style.fontSize= w > h ? h/320*100+"px" : w/320*100+"px";
	} 
	win.addEventListener('resize',setFont,false);
	doc.addEventListener('DOMContentLoaded',setFont,false);
})(window,document);