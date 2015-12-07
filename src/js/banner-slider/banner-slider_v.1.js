/*
 * banner-slider v.1
 * Author:dereksu
 * Modify:2015-12-3
 * Description:
 * 1.html中data-xxx是设计稿中量出来的值，js中配置的controllerH是重构中实际的css像素值（一般是设计稿中的值的一半）;
 * 2.gallery-thumbs中的图可换成跟gallery-top中的大图相同宽高比例的小图片;
 * 3.每个slider-li内支持加a标签或者不加a标签直接一张图片展示;
 * 4.banner-slider中的每个li的图片都用data-src来存图片地址，会按需加载
 */


/**
 * 样式一JS
 */
function setMochaBannerSliderType1Size(bannerSliderId, bannerSliderW, bannerSliderH, psdW) {
	var bannerSliderLen = $("#" + bannerSliderId + " .content li").length;
	var clientWidth = document.querySelector('body').clientWidth;
	$("#" + bannerSliderId).css('width', (bannerSliderW / psdW) * 100 + '%');
	$("#" + bannerSliderId + " .content").css('width', clientWidth * bannerSliderLen + 'px');
	$("#" + bannerSliderId + ",#" + bannerSliderId + " .content").css('height', (bannerSliderH / psdW) * clientWidth + 'px');
	$("#" + bannerSliderId + " .content").css('transform', 'translateX(-' + window[bannerSliderId].curPage * (bannerSliderW / psdW) * clientWidth + 'px)');
	$("#" + bannerSliderId + " .content li img").css('height', (bannerSliderH / psdW) * clientWidth + 'px');
	$("#" + bannerSliderId + " .content li").css('width', (bannerSliderW / psdW) * clientWidth + 'px');
}

function mochaBannerSliderType1Init(bannerSliderIdArr, callback) {
	if ((bannerSliderIdArr.constructor == Array) && (bannerSliderIdArr.length != 0)) {
		for (var i = 0; i < bannerSliderIdArr.length; i++) {
			window[bannerSliderIdArr[i] + 'psdW'] = parseInt($('#' + bannerSliderIdArr[i]).data('psdw'));
			window[bannerSliderIdArr[i] + 'bannerSliderW'] = parseInt($('#' + bannerSliderIdArr[i]).data('bannersliderw'));
			window[bannerSliderIdArr[i] + 'bannerSliderH'] = parseInt($('#' + bannerSliderIdArr[i]).data('bannersliderh'));

			window[bannerSliderIdArr[i]] = new mo.Slide({
				target: $('#' + bannerSliderIdArr[i] + ' .content li'),
				playTo: 0,
				autoPlay: false,
				animateTime: 600,
				lazy: true
			});

			setMochaBannerSliderType1Size(bannerSliderIdArr[i], window[bannerSliderIdArr[i] + 'bannerSliderW'], window[bannerSliderIdArr[i] + 'bannerSliderH'], window[bannerSliderIdArr[i] + 'psdW']);
		}

		$(window).resize(function(event) {
			for (var i = 0; i < bannerSliderIdArr.length; i++) {
				setMochaBannerSliderType1Size(bannerSliderIdArr[i], window[bannerSliderIdArr[i] + 'bannerSliderW'], window[bannerSliderIdArr[i] + 'bannerSliderH'], window[bannerSliderIdArr[i] + 'psdW']);
			}
		});

		//初始化成功之后的回调
		if (typeof callback == 'function') {
			callback();
		}
	}
}
//初始化样式一（demo1和demo2）
Zepto(function($) {
	mochaBannerSliderType1Init(["mochaBannerSlider1", "mochaBannerSlider2"], function() {
		//window.mochaBannerSlider1.play();
		window.mochaBannerSlider2.play();
	});
});


/**
 * 样式二JS
 */
function setMochaBannerSliderType2Size(bannerSliderId, bannerSliderW, bannerSliderH, psdW, controllerH) {
	var bannerSliderLen = $("#" + bannerSliderId + " .content li").length;
	var clientWidth = document.querySelector('body').clientWidth;
	$("#" + bannerSliderId).css('width', (bannerSliderW / psdW) * 100 + '%');
	$("#" + bannerSliderId + " .content").css('width', clientWidth * bannerSliderLen + 'px');
	$("#" + bannerSliderId).css('height', (bannerSliderH / psdW) * clientWidth + parseInt(controllerH) + 'px');
	$("#" + bannerSliderId + " .content").css('height', (bannerSliderH / psdW) * clientWidth + 'px');
	$("#" + bannerSliderId + " .content").css('transform', 'translateX(-' + window[bannerSliderId].curPage * (bannerSliderW / psdW) * clientWidth + 'px)');
	$("#" + bannerSliderId + " .content li img").css('height', (bannerSliderH / psdW) * clientWidth + 'px');
	$("#" + bannerSliderId + " .content li").css('width', (bannerSliderW / psdW) * clientWidth + 'px');
}

function mochaBannerSliderType2Init(bannerSliderIdArr, callback) {
	if ((bannerSliderIdArr.constructor == Array) && (bannerSliderIdArr.length != 0)) {
		for (var i = 0; i < bannerSliderIdArr.length; i++) {
			window[bannerSliderIdArr[i].id + 'psdW'] = parseInt($('#' + bannerSliderIdArr[i].id).data('psdw'));
			window[bannerSliderIdArr[i].id + 'bannerSliderW'] = parseInt($('#' + bannerSliderIdArr[i].id).data('bannersliderw'));
			window[bannerSliderIdArr[i].id + 'bannerSliderH'] = parseInt($('#' + bannerSliderIdArr[i].id).data('bannersliderh'));

			window[bannerSliderIdArr[i].id] = new mo.Slide({
				target: $('#' + bannerSliderIdArr[i].id + ' .content li'),
				playTo: 0,
				autoPlay: false,
				animateTime: 600,
				lazy: true
			});

			setMochaBannerSliderType2Size(bannerSliderIdArr[i].id, window[bannerSliderIdArr[i].id + 'bannerSliderW'], window[bannerSliderIdArr[i].id + 'bannerSliderH'], window[bannerSliderIdArr[i].id + 'psdW'], bannerSliderIdArr[i].controllerH);
		}

		$(window).resize(function(event) {
			for (var i = 0; i < bannerSliderIdArr.length; i++) {
				setMochaBannerSliderType2Size(bannerSliderIdArr[i].id, window[bannerSliderIdArr[i].id + 'bannerSliderW'], window[bannerSliderIdArr[i].id + 'bannerSliderH'], window[bannerSliderIdArr[i].id + 'psdW'], bannerSliderIdArr[i].controllerH);
			}
		});

		//初始化成功之后的回调
		if (typeof callback == 'function') {
			callback();
		}
	}
}
//初始化样式二（demo1和demo2）
Zepto(function($) {
	mochaBannerSliderType2Init([{
		'id': 'mochaBannerSlider3',
		'controllerH': 24
	}, {
		'id': 'mochaBannerSlider4',
		'controllerH': 24
	}], function() {
		window.mochaBannerSlider3.play();
		window.mochaBannerSlider4.play();
	});
});


/**
 * 样式三JS
 */
function setMochaBannerSliderType3Size(bannerSliderId, bannerSliderW, bannerSliderH, psdW, controllerH) {
	var bannerSliderLen = $("#" + bannerSliderId + " .content li").length;
	var clientWidth = document.querySelector('body').clientWidth;
	$("#" + bannerSliderId).css('width', (bannerSliderW / psdW) * 100 + '%');
	$("#" + bannerSliderId + " .content").css('width', clientWidth * bannerSliderLen + 'px');
	$("#" + bannerSliderId).css('height', (bannerSliderH / psdW) * clientWidth + parseInt(controllerH) + 'px');
	$("#" + bannerSliderId + "Wrapper").css('height', (bannerSliderH / psdW) * clientWidth + parseInt(controllerH) + 'px');
	$("#" + bannerSliderId + " .content").css('height', (bannerSliderH / psdW) * clientWidth + 'px');
	$("#" + bannerSliderId + " .content").css('transform', 'translateX(-' + window[bannerSliderId].curPage * (bannerSliderW / psdW) * clientWidth + 'px)');
	$("#" + bannerSliderId + " .content li img").css('height', (bannerSliderH / psdW) * clientWidth + 'px');
	$("#" + bannerSliderId + " .content li").css('width', (bannerSliderW / psdW) * clientWidth + 'px');
	$("#" + bannerSliderId + "Wrapper .mocha-banner-slider-btn").css('marginTop', -($("#" + bannerSliderId + "Wrapper .mocha-banner-slider-btn").height() / 2 + parseInt(controllerH) / 2) + 'px');
}

function mochaBannerSliderType3Init(bannerSliderIdArr, callback) {
	if ((bannerSliderIdArr.constructor == Array) && (bannerSliderIdArr.length != 0)) {
		for (var i = 0; i < bannerSliderIdArr.length; i++) {
			window[bannerSliderIdArr[i].id + 'psdW'] = parseInt($('#' + bannerSliderIdArr[i].id).data('psdw'));
			window[bannerSliderIdArr[i].id + 'bannerSliderW'] = parseInt($('#' + bannerSliderIdArr[i].id).data('bannersliderw'));
			window[bannerSliderIdArr[i].id + 'bannerSliderH'] = parseInt($('#' + bannerSliderIdArr[i].id).data('bannersliderh'));

			window[bannerSliderIdArr[i].id] = new mo.Slide({
				target: $('#' + bannerSliderIdArr[i].id + ' .content li'),
				playTo: 0,
				autoPlay: false,
				animateTime: 600,
				lazy: true,
				prevBtn: $('#' + bannerSliderIdArr[i].id + 'Wrapper .prevBtn'),
				nextBtn: $('#' + bannerSliderIdArr[i].id + 'Wrapper .nextBtn')
			});

			setMochaBannerSliderType3Size(bannerSliderIdArr[i].id, window[bannerSliderIdArr[i].id + 'bannerSliderW'], window[bannerSliderIdArr[i].id + 'bannerSliderH'], window[bannerSliderIdArr[i].id + 'psdW'], bannerSliderIdArr[i].controllerH);
		}

		$(window).resize(function(event) {
			for (var i = 0; i < bannerSliderIdArr.length; i++) {
				setMochaBannerSliderType3Size(bannerSliderIdArr[i].id, window[bannerSliderIdArr[i].id + 'bannerSliderW'], window[bannerSliderIdArr[i].id + 'bannerSliderH'], window[bannerSliderIdArr[i].id + 'psdW'], bannerSliderIdArr[i].controllerH);
			}
		});

		//初始化成功之后的回调
		if (typeof callback == 'function') {
			callback();
		}
	}
}
//初始化样式三（demo1和demo2）
Zepto(function($) {
	mochaBannerSliderType3Init([{
		'id': 'mochaBannerSlider5',
		'controllerH': 34
	}, {
		'id': 'mochaBannerSlider6',
		'controllerH': 0
	}], function() {
		window.mochaBannerSlider6.play();
	});
});

/**
 * 样式四JS
 */
function setMochaBannerSliderType4Size(bannerSliderId, bannerSliderW, bannerSliderH, psdW, controllerH, liWidth, liPadding) {
	var bannerSliderLen = $("#" + bannerSliderId + " .content li").length;
	var clientWidth = document.querySelector('body').clientWidth;
	$("#" + bannerSliderId).css('width', (bannerSliderW / psdW) * 100 + '%');
	$("#" + bannerSliderId + " .content").css('width', clientWidth * bannerSliderLen + 'px');
	$("#" + bannerSliderId).css('height', (bannerSliderH / psdW) * clientWidth + parseInt(controllerH) + 'px');
	$("#" + bannerSliderId + " .content").css('height', (bannerSliderH / psdW) * clientWidth + 'px');
	$("#" + bannerSliderId + " .content li img").css('height', (bannerSliderH / psdW) * clientWidth + 'px');
	$("#" + bannerSliderId + " .content li").css('width', parseInt(liWidth) * clientWidth / psdW + 'px');
	$("#" + bannerSliderId + " .content li").css('padding', '0px ' + (parseInt(liPadding) / psdW) * clientWidth + 'px');
	$("#" + bannerSliderId + " .content").css('transform', 'translateX(-' + window[bannerSliderId].curPage * $("#" + bannerSliderId + " .content li").width() + 'px)');
	$("#" + bannerSliderId + " .content").css('left', (clientWidth - $("#" + bannerSliderId + " .content li").width()) / 2 + 'px');
}

function setMochaBannerSliderType4Lazyload(bannerSliderId) {
	var bannerSliderLen = $("#" + bannerSliderId + " .content li").length;
	var bannerSliderLazyload = function(idArr) {
		if ((idArr.constructor == Array) && (idArr.length != 0)) {
			for (var i = 0; i < idArr.length; i++) {
				var elem = $("#" + bannerSliderId + " .content li").eq(idArr[i]).find("img");
				var src = elem.data('src');
				if (src) {
					if (/img/i.test(elem[0].tagName)) {
						elem.attr('src', src);
					} else {
						elem.css('background-image', 'url(' + src + ')');
					}
					elem.removeAttr('data-src');
				}
			}
		}
	};
	var bannerSliderCompare = function(curPage) {
		if (curPage < bannerSliderLen) {
			if (curPage > 0) {
				if (curPage == (bannerSliderLen - 1)) {
					bannerSliderLazyload([curPage - 1]);
				} else {
					bannerSliderLazyload([curPage - 1, curPage + 1]);
				}
			} else {
				bannerSliderLazyload([curPage + 1]);
			}
		}
	};
	bannerSliderCompare(window[bannerSliderId].curPage);
	window[bannerSliderId].on("beforechange", function() {
		bannerSliderCompare(this.curPage);
	});
}

function mochaBannerSliderType4Init(bannerSliderIdArr, callback) {
	if ((bannerSliderIdArr.constructor == Array) && (bannerSliderIdArr.length != 0)) {
		for (var i = 0; i < bannerSliderIdArr.length; i++) {
			window[bannerSliderIdArr[i].id + 'psdW'] = parseInt($('#' + bannerSliderIdArr[i].id).data('psdw'));
			window[bannerSliderIdArr[i].id + 'bannerSliderW'] = parseInt($('#' + bannerSliderIdArr[i].id).data('bannersliderw'));
			window[bannerSliderIdArr[i].id + 'bannerSliderH'] = parseInt($('#' + bannerSliderIdArr[i].id).data('bannersliderh'));
			window[bannerSliderIdArr[i].id + 'liWidth'] = parseInt($('#' + bannerSliderIdArr[i].id).data('liwidth'));
			window[bannerSliderIdArr[i].id + 'liPadding'] = parseInt($('#' + bannerSliderIdArr[i].id).data('lipadding'));

			window[bannerSliderIdArr[i].id] = new mo.Slide({
				target: $('#' + bannerSliderIdArr[i].id + ' .content li'),
				playTo: 1,
				autoPlay: false,
				animateTime: 600,
				lazy: true
			});

			setMochaBannerSliderType4Size(bannerSliderIdArr[i].id, window[bannerSliderIdArr[i].id + 'bannerSliderW'], window[bannerSliderIdArr[i].id + 'bannerSliderH'], window[bannerSliderIdArr[i].id + 'psdW'], bannerSliderIdArr[i].controllerH, window[bannerSliderIdArr[i].id + 'liWidth'], window[bannerSliderIdArr[i].id + 'liPadding']);
		}

		$(window).resize(function(event) {
			for (var i = 0; i < bannerSliderIdArr.length; i++) {
				setMochaBannerSliderType4Size(bannerSliderIdArr[i].id, window[bannerSliderIdArr[i].id + 'bannerSliderW'], window[bannerSliderIdArr[i].id + 'bannerSliderH'], window[bannerSliderIdArr[i].id + 'psdW'], bannerSliderIdArr[i].controllerH, window[bannerSliderIdArr[i].id + 'liWidth'], window[bannerSliderIdArr[i].id + 'liPadding']);
			}
		});

		for (var i = 0; i < bannerSliderIdArr.length; i++) {
			setMochaBannerSliderType4Lazyload(bannerSliderIdArr[i].id);
		}

		//初始化成功之后的回调
		if (typeof callback == 'function') {
			callback();
		}
	}
}
//初始化样式四
Zepto(function($) {
	mochaBannerSliderType4Init([{
		'id': 'mochaBannerSlider7',
		'controllerH': 34
	}], function() {
		window.mochaBannerSlider7.play();
	});
});

/**
 * 样式五JS
 */
function setMochaBannerSliderType5Size(bannerSliderId, bannerSliderGalleryTopW, bannerSliderGalleryTopH, bannerSliderGalleryTopMarginBottom, bannerSliderGalleryThumbsW, bannerSliderGalleryThumbsH, bannerSliderGalleryThumbsLiPaddingRight, psdW) {
	var bannerSliderGalleryTopLen = $("#" + bannerSliderId + " .gallery-top .content li").length;
	var bannerSliderGalleryThumbsLen = $("#" + bannerSliderId + " .gallery-thumbs .content li").length;
	var clientWidth = document.querySelector('body').clientWidth;
	$("#" + bannerSliderId + ' .gallery-top').css('width', (bannerSliderGalleryTopW / psdW) * 100 + '%');
	$("#" + bannerSliderId + ' .gallery-top').css('marginBottom', (bannerSliderGalleryTopMarginBottom / psdW) * clientWidth + 'px');
	$("#" + bannerSliderId + " .gallery-top .content").css('width', clientWidth * bannerSliderGalleryTopLen + 'px');
	$("#" + bannerSliderId + " .gallery-top,#" + bannerSliderId + " .gallery-top .content").css('height', (bannerSliderGalleryTopH / psdW) * clientWidth + 'px');
	$("#" + bannerSliderId + " .gallery-top .content").css('transform', 'translateX(-' + window[bannerSliderId + 'galleryTop'].curPage * (bannerSliderGalleryTopW / psdW) * clientWidth + 'px)');
	$("#" + bannerSliderId + " .gallery-top .content li img").css('height', (bannerSliderGalleryTopH / psdW) * clientWidth + 'px');
	$("#" + bannerSliderId + " .gallery-top .content li").css('width', (bannerSliderGalleryTopW / psdW) * clientWidth + 'px');
	//gallery-thumbs
	$("#" + bannerSliderId + " .gallery-thumbs").css('width', (bannerSliderGalleryThumbsW / psdW) * 100 + '%');
	$("#" + bannerSliderId + " .gallery-thumbs .content").css('width', clientWidth * bannerSliderGalleryThumbsLen + 'px');
	$("#" + bannerSliderId + " .gallery-thumbs").css('height', (bannerSliderGalleryThumbsH / psdW) * clientWidth + 'px');
	$("#" + bannerSliderId + " .gallery-thumbs .content").css('height', (bannerSliderGalleryThumbsH / psdW) * clientWidth + 'px');
	$("#" + bannerSliderId + " .gallery-thumbs .content li img").css('height', (bannerSliderGalleryThumbsH / psdW) * clientWidth + 'px');
	$("#" + bannerSliderId + " .gallery-thumbs .content li").css('width', bannerSliderGalleryTopW / bannerSliderGalleryTopH * ((bannerSliderGalleryThumbsH / psdW) * clientWidth) + 'px');
	$("#" + bannerSliderId + " .gallery-thumbs .content li").css('paddingRight', (parseInt(bannerSliderGalleryThumbsLiPaddingRight) / psdW) * clientWidth + 'px');
	$("#" + bannerSliderId + " .gallery-thumbs .content").css('transform', 'translateX(-' + window[bannerSliderId + 'galleryThumbs'].curPage * $("#" + bannerSliderId + " .gallery-thumbs .content li").width() + 'px)');
	$("#" + bannerSliderId + " .gallery-thumbs .content").css('left', (clientWidth - $("#" + bannerSliderId + " .gallery-thumbs .content li").width()) / 2 + 'px');
}

function setMochaBannerSliderType5GalleryThumbsStyle(bannerSliderId) {
	$("#" + bannerSliderId + " .gallery-thumbs .content li").eq(window[bannerSliderId + 'galleryTop'].curPage).addClass('cur');
	$("#" + bannerSliderId + " .gallery-thumbs .content li").bind('click', function(event) {
		$("#" + bannerSliderId + " .gallery-thumbs .content li").removeClass('cur');
		var curIndex = $(this).index();
		window[bannerSliderId + 'galleryTop'].playTo(curIndex);
		$(this).addClass('cur');
	});
	window[bannerSliderId + 'galleryTop'].on('beforechange', function() {
		$("#" + bannerSliderId + " .gallery-thumbs .content li").removeClass('cur');
		window[bannerSliderId + 'galleryThumbs'].playTo(this.curPage);
		$("#" + bannerSliderId + " .gallery-thumbs .content li").eq(this.curPage).addClass('cur');
	});
}

function setMochaBannerSliderType5Lazyload(bannerSliderId) {
	var bannerSliderLen = $("#" + bannerSliderId + " .gallery-thumbs .content li").length;
	var bannerSliderLazyload = function(idArr) {
		if ((idArr.constructor == Array) && (idArr.length != 0)) {
			for (var i = 0; i < idArr.length; i++) {
				var elem = $("#" + bannerSliderId + " .gallery-thumbs .content li").eq(idArr[i]).find("img");
				var src = elem.data('src');
				if (src) {
					if (/img/i.test(elem[0].tagName)) {
						elem.attr('src', src);
					} else {
						elem.css('background-image', 'url(' + src + ')');
					}
					elem.removeAttr('data-src');
				}
			}
		}
	};
	var bannerSliderCompare = function(curPage) {
		if (curPage < bannerSliderLen) {
			if (curPage > 0) {
				if (curPage == (bannerSliderLen - 1)) {
					bannerSliderLazyload([curPage - 1]);
				} else {
					bannerSliderLazyload([curPage - 1, curPage + 1]);
				}
			} else {
				bannerSliderLazyload([curPage + 1]);
			}
		}
	};
	bannerSliderCompare(window[bannerSliderId + 'galleryThumbs'].curPage);
	window[bannerSliderId + 'galleryThumbs'].on("beforechange", function() {
		bannerSliderCompare(this.curPage);
	});
}

function mochaBannerSliderType5Init(bannerSliderIdArr, callback) {
	if ((bannerSliderIdArr.constructor == Array) && (bannerSliderIdArr.length != 0)) {
		for (var i = 0; i < bannerSliderIdArr.length; i++) {
			window[bannerSliderIdArr[i] + 'psdW'] = parseInt($('#' + bannerSliderIdArr[i]).data('psdw'));
			window[bannerSliderIdArr[i] + 'galleryTopBannerSliderW'] = parseInt($('#' + bannerSliderIdArr[i] + ' .gallery-top').data('bannersliderw'));
			window[bannerSliderIdArr[i] + 'galleryTopBannerSliderH'] = parseInt($('#' + bannerSliderIdArr[i] + ' .gallery-top').data('bannersliderh'));
			window[bannerSliderIdArr[i] + 'galleryTopBannerSliderMarginBottom'] = parseInt($('#' + bannerSliderIdArr[i] + ' .gallery-top').data('bannerslidermarginbottom'));
			window[bannerSliderIdArr[i] + 'galleryThumbsBannerSliderW'] = parseInt($('#' + bannerSliderIdArr[i] + ' .gallery-thumbs').data('bannersliderw'));
			window[bannerSliderIdArr[i] + 'galleryThumbsBannerSliderH'] = parseInt($('#' + bannerSliderIdArr[i] + ' .gallery-thumbs').data('bannersliderh'));
			window[bannerSliderIdArr[i] + 'galleryThumbsBannerSliderLiPaddingRight'] = parseInt($('#' + bannerSliderIdArr[i] + ' .gallery-thumbs').data('lipaddingright'));

			window[bannerSliderIdArr[i] + 'galleryTop'] = new mo.Slide({
				target: $('#' + bannerSliderIdArr[i] + ' .gallery-top .content li'),
				playTo: 1,
				autoPlay: false,
				animateTime: 600,
				controller: false,
				lazy: true
			});

			window[bannerSliderIdArr[i] + 'galleryThumbs'] = new mo.Slide({
				target: $('#' + bannerSliderIdArr[i] + ' .gallery-thumbs .content li'),
				playTo: 1,
				autoPlay: false,
				animateTime: 800,
				controller: false,
				lazy: true,
				event: {
					init: function() {
						//设置thumbs初始化样式
						setMochaBannerSliderType5GalleryThumbsStyle(bannerSliderIdArr[i]);
					}
				}
			});

			setMochaBannerSliderType5Size(bannerSliderIdArr[i], window[bannerSliderIdArr[i] + 'galleryTopBannerSliderW'], window[bannerSliderIdArr[i] + 'galleryTopBannerSliderH'], window[bannerSliderIdArr[i] + 'galleryTopBannerSliderMarginBottom'], window[bannerSliderIdArr[i] + 'galleryThumbsBannerSliderW'], window[bannerSliderIdArr[i] + 'galleryThumbsBannerSliderH'], window[bannerSliderIdArr[i] + 'galleryThumbsBannerSliderLiPaddingRight'], window[bannerSliderIdArr[i] + 'psdW']);
		}

		$(window).resize(function(event) {
			for (var i = 0; i < bannerSliderIdArr.length; i++) {
				setMochaBannerSliderType5Size(bannerSliderIdArr[i], window[bannerSliderIdArr[i] + 'galleryTopBannerSliderW'], window[bannerSliderIdArr[i] + 'galleryTopBannerSliderH'], window[bannerSliderIdArr[i] + 'galleryTopBannerSliderMarginBottom'], window[bannerSliderIdArr[i] + 'galleryThumbsBannerSliderW'], window[bannerSliderIdArr[i] + 'galleryThumbsBannerSliderH'], window[bannerSliderIdArr[i] + 'galleryThumbsBannerSliderLiPaddingRight'], window[bannerSliderIdArr[i] + 'psdW']);
			}
		});

		for (var i = 0; i < bannerSliderIdArr.length; i++) {
			setMochaBannerSliderType5Lazyload(bannerSliderIdArr[i]);
		}

		//初始化成功之后的回调
		if (typeof callback == 'function') {
			callback();
		}
	}
}
//初始化样式五（demo1和demo2）
Zepto(function($) {
	mochaBannerSliderType5Init(["mochaBannerSlider8", "mochaBannerSlider9"], function() {
		window.mochaBannerSlider8galleryTop.play();
		window.mochaBannerSlider9galleryTop.play();
	});
});



/**
 * body zoom缩放 不建议使用
 */
/*
function setFullScreenMode(width) {
	document.body.style.width = width + 'px';
	var clientWidth = document.documentElement.clientWidth ? document.documentElement.clientWidth : 320;
	document.body.style.zoom = clientWidth / width;
}
setFullScreenMode(320);
$(window).bind('orientationchange', function(event) {setFullScreenMode(320);});
$(window).bind('resize', function(event) {setFullScreenMode(320);});
*/