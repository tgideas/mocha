/*
 * comm v.1
 * Author:dereksu
 * Modify:2015-12-07
 * 
 */

var MOCHA = function() {
	var _fn = {
		setMochaBannerSliderLazyload: function(bannerSliderId) {
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
		},
		setMochaBannerSliderType1Size: function(bannerSliderId, bannerSliderW, bannerSliderH, psdW) {
			var bannerSliderLen = $("#" + bannerSliderId + " .content li").length;
			var clientWidth = document.querySelector('body').clientWidth;
			$("#" + bannerSliderId).css('width', (bannerSliderW / psdW) * 100 + '%');
			$("#" + bannerSliderId + " .content").css('width', clientWidth * bannerSliderLen + 'px');
			$("#" + bannerSliderId + ",#" + bannerSliderId + " .content").css('height', (bannerSliderH / psdW) * clientWidth + 'px');
			$("#" + bannerSliderId + " .content").css('transform', 'translateX(-' + window[bannerSliderId].curPage * (bannerSliderW / psdW) * clientWidth + 'px)');
			$("#" + bannerSliderId + " .content li img").css('height', (bannerSliderH / psdW) * clientWidth + 'px');
			$("#" + bannerSliderId + " .content li").css('width', (bannerSliderW / psdW) * clientWidth + 'px');
		},
		mochaBannerSliderType1Init: function(bannerSliderIdArr, callback) {
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
					_fn.setMochaBannerSliderType1Size(bannerSliderIdArr[i], window[bannerSliderIdArr[i] + 'bannerSliderW'], window[bannerSliderIdArr[i] + 'bannerSliderH'], window[bannerSliderIdArr[i] + 'psdW']);
				}
				$(window).resize(function(event) {
					for (var i = 0; i < bannerSliderIdArr.length; i++) {
						_fn.setMochaBannerSliderType1Size(bannerSliderIdArr[i], window[bannerSliderIdArr[i] + 'bannerSliderW'], window[bannerSliderIdArr[i] + 'bannerSliderH'], window[bannerSliderIdArr[i] + 'psdW']);
					}
				});
				for (var i = 0; i < bannerSliderIdArr.length; i++) {
					_fn.setMochaBannerSliderLazyload(bannerSliderIdArr[i]);
				}
				//初始化成功之后的回调
				if (typeof callback == 'function') {
					callback();
				}
			}
		},
		setMochaBannerSliderType2Size: function(bannerSliderId, bannerSliderW, bannerSliderH, psdW, controllerH) {
			var bannerSliderLen = $("#" + bannerSliderId + " .content li").length;
			var clientWidth = document.querySelector('body').clientWidth;
			$("#" + bannerSliderId).css('width', (bannerSliderW / psdW) * 100 + '%');
			$("#" + bannerSliderId + " .content").css('width', clientWidth * bannerSliderLen + 'px');
			$("#" + bannerSliderId).css('height', (bannerSliderH / psdW) * clientWidth + parseInt(controllerH) + 'px');
			$("#" + bannerSliderId + " .content").css('height', (bannerSliderH / psdW) * clientWidth + 'px');
			$("#" + bannerSliderId + " .content").css('transform', 'translateX(-' + window[bannerSliderId].curPage * (bannerSliderW / psdW) * clientWidth + 'px)');
			$("#" + bannerSliderId + " .content li img").css('height', (bannerSliderH / psdW) * clientWidth + 'px');
			$("#" + bannerSliderId + " .content li").css('width', (bannerSliderW / psdW) * clientWidth + 'px');
		},
		mochaBannerSliderType2Init: function(bannerSliderIdArr, callback) {
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
					_fn.setMochaBannerSliderType2Size(bannerSliderIdArr[i].id, window[bannerSliderIdArr[i].id + 'bannerSliderW'], window[bannerSliderIdArr[i].id + 'bannerSliderH'], window[bannerSliderIdArr[i].id + 'psdW'], bannerSliderIdArr[i].controllerH);
				}
				$(window).resize(function(event) {
					for (var i = 0; i < bannerSliderIdArr.length; i++) {
						_fn.setMochaBannerSliderType2Size(bannerSliderIdArr[i].id, window[bannerSliderIdArr[i].id + 'bannerSliderW'], window[bannerSliderIdArr[i].id + 'bannerSliderH'], window[bannerSliderIdArr[i].id + 'psdW'], bannerSliderIdArr[i].controllerH);
					}
				});
				for (var i = 0; i < bannerSliderIdArr.length; i++) {
					_fn.setMochaBannerSliderLazyload(bannerSliderIdArr[i].id);
				}
				//初始化成功之后的回调
				if (typeof callback == 'function') {
					callback();
				}
			}
		},
		setMochaBannerSliderType3Size: function(bannerSliderId, bannerSliderW, bannerSliderH, psdW, controllerH) {
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
		},
		mochaBannerSliderType3Init: function(bannerSliderIdArr, callback) {
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
					_fn.setMochaBannerSliderType3Size(bannerSliderIdArr[i].id, window[bannerSliderIdArr[i].id + 'bannerSliderW'], window[bannerSliderIdArr[i].id + 'bannerSliderH'], window[bannerSliderIdArr[i].id + 'psdW'], bannerSliderIdArr[i].controllerH);
				}
				$(window).resize(function(event) {
					for (var i = 0; i < bannerSliderIdArr.length; i++) {
						_fn.setMochaBannerSliderType3Size(bannerSliderIdArr[i].id, window[bannerSliderIdArr[i].id + 'bannerSliderW'], window[bannerSliderIdArr[i].id + 'bannerSliderH'], window[bannerSliderIdArr[i].id + 'psdW'], bannerSliderIdArr[i].controllerH);
					}
				});
				for (var i = 0; i < bannerSliderIdArr.length; i++) {
					_fn.setMochaBannerSliderLazyload(bannerSliderIdArr[i].id);
				}
				//初始化成功之后的回调
				if (typeof callback == 'function') {
					callback();
				}
			}
		},
		setMochaBannerSliderType4Size: function(bannerSliderId, bannerSliderW, bannerSliderH, psdW, controllerH, liWidth, liPadding) {
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
		},
		mochaBannerSliderType4Init: function(bannerSliderIdArr, callback) {
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
					_fn.setMochaBannerSliderType4Size(bannerSliderIdArr[i].id, window[bannerSliderIdArr[i].id + 'bannerSliderW'], window[bannerSliderIdArr[i].id + 'bannerSliderH'], window[bannerSliderIdArr[i].id + 'psdW'], bannerSliderIdArr[i].controllerH, window[bannerSliderIdArr[i].id + 'liWidth'], window[bannerSliderIdArr[i].id + 'liPadding']);
				}
				$(window).resize(function(event) {
					for (var i = 0; i < bannerSliderIdArr.length; i++) {
						_fn.setMochaBannerSliderType4Size(bannerSliderIdArr[i].id, window[bannerSliderIdArr[i].id + 'bannerSliderW'], window[bannerSliderIdArr[i].id + 'bannerSliderH'], window[bannerSliderIdArr[i].id + 'psdW'], bannerSliderIdArr[i].controllerH, window[bannerSliderIdArr[i].id + 'liWidth'], window[bannerSliderIdArr[i].id + 'liPadding']);
					}
				});
				for (var i = 0; i < bannerSliderIdArr.length; i++) {
					_fn.setMochaBannerSliderLazyload(bannerSliderIdArr[i].id);
				}
				//初始化成功之后的回调
				if (typeof callback == 'function') {
					callback();
				}
			}
		},
		setMochaBannerSliderType5Size: function(bannerSliderId, bannerSliderGalleryTopW, bannerSliderGalleryTopH, bannerSliderGalleryTopMarginBottom, bannerSliderGalleryThumbsW, bannerSliderGalleryThumbsH, bannerSliderGalleryThumbsLiPaddingRight, psdW) {
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
		},
		setMochaBannerSliderType5GalleryThumbsStyle: function(bannerSliderId) {
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
		},
		setMochaBannerSliderType5GalleryTopLazyload: function(bannerSliderId) {
			var bannerSliderLen = $("#" + bannerSliderId + " .gallery-top .content li").length;
			var bannerSliderLazyload = function(idArr) {
				if ((idArr.constructor == Array) && (idArr.length != 0)) {
					for (var i = 0; i < idArr.length; i++) {
						var elem = $("#" + bannerSliderId + " .gallery-top .content li").eq(idArr[i]).find("img");
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
			bannerSliderCompare(window[bannerSliderId + 'galleryTop'].curPage);
			window[bannerSliderId + 'galleryTop'].on("beforechange", function() {
				bannerSliderCompare(this.curPage);
			});
		},
		setMochaBannerSliderType5GalleryThumbsLazyload: function(bannerSliderId) {
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
		},
		mochaBannerSliderType5Init: function(bannerSliderIdArr, callback) {
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
								_fn.setMochaBannerSliderType5GalleryThumbsStyle(bannerSliderIdArr[i]);
							}
						}
					});
					_fn.setMochaBannerSliderType5Size(bannerSliderIdArr[i], window[bannerSliderIdArr[i] + 'galleryTopBannerSliderW'], window[bannerSliderIdArr[i] + 'galleryTopBannerSliderH'], window[bannerSliderIdArr[i] + 'galleryTopBannerSliderMarginBottom'], window[bannerSliderIdArr[i] + 'galleryThumbsBannerSliderW'], window[bannerSliderIdArr[i] + 'galleryThumbsBannerSliderH'], window[bannerSliderIdArr[i] + 'galleryThumbsBannerSliderLiPaddingRight'], window[bannerSliderIdArr[i] + 'psdW']);
				}
				$(window).resize(function(event) {
					for (var i = 0; i < bannerSliderIdArr.length; i++) {
						_fn.setMochaBannerSliderType5Size(bannerSliderIdArr[i], window[bannerSliderIdArr[i] + 'galleryTopBannerSliderW'], window[bannerSliderIdArr[i] + 'galleryTopBannerSliderH'], window[bannerSliderIdArr[i] + 'galleryTopBannerSliderMarginBottom'], window[bannerSliderIdArr[i] + 'galleryThumbsBannerSliderW'], window[bannerSliderIdArr[i] + 'galleryThumbsBannerSliderH'], window[bannerSliderIdArr[i] + 'galleryThumbsBannerSliderLiPaddingRight'], window[bannerSliderIdArr[i] + 'psdW']);
					}
				});
				for (var i = 0; i < bannerSliderIdArr.length; i++) {
					_fn.setMochaBannerSliderType5GalleryTopLazyload(bannerSliderIdArr[i]);
					_fn.setMochaBannerSliderType5GalleryThumbsLazyload(bannerSliderIdArr[i]);
				}
				//初始化成功之后的回调
				if (typeof callback == 'function') {
					callback();
				}
			}
		}
	};

	//对外API
	var _export = {
		bannerSliderInit: function(bannerSliderType, bannerSliderIdArr, callback) {
			switch (parseInt(bannerSliderType)) {
				case 1:
					_fn.mochaBannerSliderType1Init(bannerSliderIdArr, callback);
					break;
				case 2:
					_fn.mochaBannerSliderType2Init(bannerSliderIdArr, callback);
					break;
				case 3:
					_fn.mochaBannerSliderType3Init(bannerSliderIdArr, callback);
					break;
				case 4:
					_fn.mochaBannerSliderType4Init(bannerSliderIdArr, callback);
					break;
				case 5:
					_fn.mochaBannerSliderType5Init(bannerSliderIdArr, callback);
					break;
			}
		}

	};

	return _export;
}();