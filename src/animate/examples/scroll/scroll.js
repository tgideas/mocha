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
		var preSize = $(elem).data('mzscrollpresize') || 1, // ��ι�������ǰԪ�ش�����Ļ�Ϸ������·���Ĭ���·�
			elemHeight = elem.offsetHeight,
			elemOfsTop = $(elem).offset().top,
			windowScrollTop = $(window).scrollTop(),
			windowHeight = window.innerHeight || document.documentElement.offsetHeight, // ���� IE
            sizeInfo = {/*scrollOut, scrollIn*/};	
        
        // console.log((elemOfsTop < windowScrollTop + windowHeight + topOffset));
		//console.log(elemOfsTop, windowScrollTop + windowHeight, preSize);
		//�ж�scrollInʱ����ע��scrollIn��scrollOutʱ�������ǻ����
		if ((elemOfsTop < windowScrollTop + windowHeight + topOffset && preSize == 1) ||
			(elemOfsTop + elemHeight > windowScrollTop - bottomOffset) && preSize == -1) {
			sizeInfo.scrollIn = true;
			sizeInfo.scrollOut = false;
		} else {
			sizeInfo.scrollIn = false;
			sizeInfo.scrollOut = true;	
		}


		//�ж�scrollOutʱ��
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
 * options ���� �����false��ɾ����Ԫ�ؼ�������
 *
 * once {boolean} �Ƿ�ִ��һ�� default false
 * sensitive Ĭ��Ϊ false Ԫ����ȫ�뿪��Ļ�Ŵ��� scrollOut������Ϊ true ʱԪ��ֻҪ�뿪��������ʹ��� scrollOut 
 * topOffset {int} Ԫ�ض��������ڵײ��ľ��������������� default 0
 * bottomOffset {int} Ԫ�صײ������ڶ������ľ��������������� default 0
 * setUp {function} ����Ҫ��һЩ׼����������д������
 * activeClass {string} Ԫ�ؽ�������Ҫ��ӵ���
 * scrollIn {function} Ԫ�ؽ�������Ļص�
 * scrollOut {function} Ԫ���뿪����Ļص�
 * scrolling {function(scrolloffset)} Ԫ�ش��ڼ���״̬ʱ��������ĺ���
 * scrollFunc {array} Ԫ�ؽ�������ִ��
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