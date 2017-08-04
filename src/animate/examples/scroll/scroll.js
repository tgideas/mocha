;(function() {
var targetNum = 0,
    activateNum = 0;
    
var Scroller = function() {
    var initCount = 0;

	var scrollTasks = [],
		defaults = {
			once: true,
			sensitive: false,
			topOffset: 0,
			bottomOffset: 0,
			activeClass: '',
			scrollIn: null,
			scrollOut: null,
            scrolling: null,
            scrollFunc: []
		},
		that = this;

	function init() {
		var $window = $(window),
			lastScrollTop = $window.scrollTop(),
			scrollOffset = 0;

		$(window).on('scroll', function() {
			scrollOffset = $window.scrollTop() - lastScrollTop;
            lastScrollTop = $window.scrollTop();
			fireTasks(scrollOffset);
		});
	}

	function fireTasks(scrollOffset) {
		var task,
			inScreen,
			sizeInfo,
			actived;
     
		for (var i = scrollTasks.length-1; i >= 0; i--) {
			task = scrollTasks[i];
			sizeInfo = getSizeInfo(task.elem, task.options.topOffset, task.options.bottomOffset, task.options.sensitive);
            
			if (sizeInfo.scrollIn) {
				actived = true;
				if (task.actived !== actived) {
                    task.options.scrollFunc[task.elem.id]();
					$(task.elem).addClass(task.options.activeClass)
					task.options.scrollIn && task.options.scrollIn.call(task.elem);
					if (task.options.once) {
						that.removeTask(task.elem, task.id);
					}				
				}
				task.options.scrolling && task.options.scrolling.call(task.elem, scrollOffset);
				task.actived = actived;

			} else if (sizeInfo.scrollOut){
				actived = false;
				if (task.actived !== actived) {
					task.actived = actived;
					task.options.scrollOut && task.options.scrollOut.call(task.elem);
					$(task.elem).removeClass(task.options.activeClass);
				}
			}
			if (task.actived) {
				task.options.scrolling && task.options.scrolling.call(task.elem, scrollOffset);
			}
		}
	}


	function getSizeInfo(elem, topOffset, bottomOffset, sensitive) {
		var preSize = $(elem).data('mzscrollpresize') || 1, // 这次滚动发生前元素处于屏幕上方还是下方，默认下方
			elemHeight = elem.offsetHeight,
			elemOfsTop = $(elem).offset().top,
			windowScrollTop = $(window).scrollTop(),
			windowHeight = window.innerHeight || document.documentElement.offsetHeight, // 兼容 IE
            sizeInfo = {/*scrollOut, scrollIn*/};	
        
        // console.log((elemOfsTop < windowScrollTop + windowHeight + topOffset));
		//console.log(elemOfsTop, windowScrollTop + windowHeight, preSize);
		//判断scrollIn时机，注意scrollIn，scrollOut时机并不是互斥的
		if ((elemOfsTop < windowScrollTop + windowHeight + topOffset && preSize == 1) ||
			(elemOfsTop + elemHeight > windowScrollTop - bottomOffset) && preSize == -1) {
			sizeInfo.scrollIn = true;
			sizeInfo.scrollOut = false;
		} else {
			sizeInfo.scrollIn = false;
			sizeInfo.scrollOut = true;	
		}


		//判断scrollOut时机
		if (elemOfsTop > windowScrollTop + windowHeight + (bottomOffset < 0 && !sensitive ? 0: bottomOffset)) {
			preSize = 1;
			$(elem).data('mzscrollpresize', 1);
		} else if (elemOfsTop + elemHeight < windowScrollTop - (topOffset < 0 && !sensitive ? 0 : topOffset)) {
			$(elem).data('mzscrollpresize', -1);
			preSize = -1;
		} else {
			preSize = 0;
		}

		if (!sensitive)
		sizeInfo.scrollOut = !!preSize;
		
		return sizeInfo;
	}

	this.addTask = function(elem, taskOptions) {
		var taskOptions = $.extend({}, defaults, taskOptions),
			elem = elem;
        
		scrollTasks.push({
			'id': (new Date).getTime() + Math.random()*10000000,
			'elem': elem,
			'actived': false,
			'options': taskOptions
		});
		if (typeof taskOptions.setUp === 'function') 
            taskOptions.setUp.call(elem);

        initCount++;
        if( initCount == targetNum ) {
		    fireTasks(0);
        }
        
	}

	this.removeTask = function(elem, id) {

		for (var i = scrollTasks.length - 1; i >= 0; i--) {
			if (scrollTasks[i].elem === elem && (!id || scrollTasks[i].id === id)) {
				scrollTasks.splice(i, 1);
			}
		};
	}
	init();
}

/*
 * options 配置 如果传false则删除此元素监听任务
 *
 * once {boolean} 是否执行一次 default false
 * sensitive 默认为 false 元素完全离开屏幕才触发 scrollOut，设置为 true 时元素只要离开激活区域就触发 scrollOut 
 * topOffset {int} 元素顶部到窗口底部的距离多少算进入区域 default 0
 * bottomOffset {int} 元素底部到窗口顶部部的距离多少算进入区域 default 0
 * setUp {function} 如需要做一些准备工作可以写在这里
 * activeClass {string} 元素进入区域要添加的类
 * scrollIn {function} 元素进入区域的回调
 * scrollOut {function} 元素离开区域的回调
 * scrolling {function(scrolloffset)} 元素处于激活状态时处理滚动的函数
 * scrollFunc {array} 元素进入区域执行
 */
$.fn.addScroll = (function() {
	var scroller = new Scroller();

	return function(options) {

        targetNum = this.length;
                
		this.each(function() {
			if (options === false) {
				scroller.removeTask(this);
			} else {
				scroller.addTask(this, options);
			}
		});
		return this;
	}
})();

})();