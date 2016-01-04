/*
 * mocha v.1
 * Author:dereksu
 * Modify:2015-12-09
 */

window.mochaObj = {};

var Mocha = function() {
	var _util = {
		scriptLoader: function(url, succ, param) {
			var type = url.split("."),
				file = type[type.length - 1],
				elem = document.createElement("script"),
				lnk = "src";
			elem.setAttribute(lnk, url);
			document.body.appendChild(elem);
			elem.onload = function() {
				succ(param);
			};
			elem.onerror = function() {};
		},
		adIdNoAdInfoTips: function(adId) {
			console = console || {
				error: function() {
					return;
				},
				log: function() {
					return;
				},
				info: function() {
					return;
				}
			};
			console.info('posId:' + adId + ' no advertising information ,the li node has been hidden!');
		}
	};
	var _fn = {
		bannerSliderLazyload: function(bannerSliderId) {
			var bsLen = $("#" + bannerSliderId + " .content li").length;
			var bsLazyload = function(idArr) {
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
			var bsCompare = function(curPage) {
				if (curPage < bsLen) {
					if (curPage > 0) {
						if (curPage == (bsLen - 1)) {
							bsLazyload([curPage - 1]);
						} else {
							bsLazyload([curPage - 1, curPage + 1]);
						}
					} else {
						bsLazyload([curPage + 1]);
					}
				}
			};
			bsCompare(mochaObj[bannerSliderId].curPage);
			mochaObj[bannerSliderId].on("beforechange", function() {
				bsCompare(this.curPage);
			});
		},
		setBannerSliderType1Size: function(bannerSliderId, bannerSliderW, bannerSliderH, psdW) {
			var bannerSliderLen = $("#" + bannerSliderId + " .content li").length;
			var clientWidth = document.querySelector('body').clientWidth;
			$("#" + bannerSliderId).css('width', (bannerSliderW / psdW) * 100 + '%');
			$("#" + bannerSliderId + " .content").css('width', clientWidth * bannerSliderLen + 'px');
			$("#" + bannerSliderId + ",#" + bannerSliderId + " .content").css('height', (bannerSliderH / psdW) * clientWidth + 'px');
			$("#" + bannerSliderId + " .content").css('transform', 'translateX(-' + mochaObj[bannerSliderId].curPage * (bannerSliderW / psdW) * clientWidth + 'px)');
			$("#" + bannerSliderId + " .content li img").css('height', (bannerSliderH / psdW) * clientWidth + 'px');
			$("#" + bannerSliderId + " .content li").css('width', (bannerSliderW / psdW) * clientWidth + 'px');
		},
		bannerSliderType1Resize: function(bannerSliderId, bannerSliderW, bannerSliderH, psdW) {
			$(window).resize(function(event) {
				_fn.setBannerSliderType1Size(bannerSliderId, bannerSliderW, bannerSliderH, psdW);
			});
		},
		bannerSliderType1Init: function(bannerSliderArr) {
			if ((bannerSliderArr.constructor == Array) && (bannerSliderArr.length != 0)) {
				for (var i = 0; i < bannerSliderArr.length; i++) {
					if ((typeof bannerSliderArr[i] == 'object') && (bannerSliderArr[i] !== null) && (bannerSliderArr[i].constructor !== Array)) {
						var psdW = parseInt($('#' + bannerSliderArr[i].id).data('psdw')),
							bannerSliderW = parseInt($('#' + bannerSliderArr[i].id).data('bannersliderw')),
							bannerSliderH = parseInt($('#' + bannerSliderArr[i].id).data('bannersliderh')),
							//从广告系统中遍历banner信息
							//mochaObj[bannerSliderArr[i].id + 'oDataNewJs'] = $.trim($('#' + bannerSliderArr[i].id).data('odatanewjs'));
							oDataNewJsId = $.trim($('#' + bannerSliderArr[i].id).data('odatanewjsid')),
							showLink = $('#' + bannerSliderArr[i].id).data('showlink'),
							tcssPrefix = $('#' + bannerSliderArr[i].id).data('tcssprefix');
						//是否遍历
						if (oDataNewJsId) {
							/*var oDataNewJsId = mochaObj[bannerSliderArr[i].id + 'oDataNewJs'].split('.js')[0].split('_');
							oDataNewJsId = oDataNewJsId[oDataNewJsId.length - 1];*/
							_util.scriptLoader('http://game.qq.com/time/qqadv/Info_new_' + oDataNewJsId + '.js', function(param) {
								var oDataNewObj = eval('oDaTaNew' + oDataNewJsId);
								if (!oDataNewObj) {
									return;
								}
								//开始遍历
								$("#" + param.id + " .content").find('li').each(function(index, el) {
									var obj = $(el),
										posId = obj.data('posid'),
										pos = oDataNewObj['pos' + posId];
									if (!pos) {
										_util.adIdNoAdInfoTips(posId);
										obj.remove();
									} else {
										var posTitle = decodeURIComponent(pos[0]),
											posLink = pos[1],
											posImg = 'http://game.gtimg.cn/upload/adw/' + pos[2];
										if (tcssPrefix) {
											if (showLink !== false) {
												obj.html('<a href="' + posLink + '" title="' + posTitle + '" onclick="pgvSendClick({hottag:\'' + tcssPrefix + '.ad' + (index + 1) + '\'});"><img data-src="' + posImg + '" alt="' + posTitle + '" /></a>');
											} else {
												obj.attr('onclick', 'pgvSendClick({hottag:\'' + tcssPrefix + '.ad' + (index + 1) + '\'});');
												obj.html('<img data-src="' + posImg + '" alt="' + posTitle + '" />');
											}
										} else {
											if (showLink !== false) {
												obj.html('<a href="' + posLink + '" title="' + posTitle + '"><img data-src="' + posImg + '" alt="' + posTitle + '" /></a>');
											} else {
												obj.html('<img data-src="' + posImg + '" alt="' + posTitle + '" />');
											}
										}
									}
								});

								//初始化slider
								if ($('#' + param.id + ' .content li').length <= 0) {
									console = console || {
										error: function() {
											return;
										},
										log: function() {
											return;
										},
										info: function() {
											return;
										}
									};
									console.error(param.id + ', the length of li must be greater than 0 !');
								} else {
									//第一项改为src,防止slide在只有一项的情况下 data-src不会替换为src
									var tempSrc = $('#' + param.id + ' .content li').eq(0).find('img').data('src');
									$('#' + param.id + ' .content li').eq(0).find('img').attr('src',tempSrc).removeAttr('data-src');


									mochaObj[param.id] = new mo.Slide({
										target: $('#' + param.id + ' .content li'),
										playTo: 0,
										autoPlay: false,
										animateTime: 600,
										lazy: true
									});

									_fn.setBannerSliderType1Size(param.id, bannerSliderW, bannerSliderH, psdW);

									_fn.bannerSliderType1Resize(param.id, bannerSliderW, bannerSliderH, psdW);

									_fn.bannerSliderLazyload(param.id);

									//初始化成功之后的回调
									if (typeof param.callback == 'function') {
										param.callback();
									}
								}

							}, {
								'id': bannerSliderArr[i].id,
								'callback': bannerSliderArr[i].callback
							});
						} else {
							//初始化slider
							if ($('#' + bannerSliderArr[i].id + ' .content li').length <= 0) {
								console = console || {
									error: function() {
										return;
									},
									log: function() {
										return;
									},
									info: function() {
										return;
									}
								};
								console.error(bannerSliderArr[i].id + ', the length of li must be greater than 0 !');
							} else {
								mochaObj[bannerSliderArr[i].id] = new mo.Slide({
									target: $('#' + bannerSliderArr[i].id + ' .content li'),
									playTo: 0,
									autoPlay: false,
									animateTime: 600,
									lazy: true
								});

								_fn.setBannerSliderType1Size(bannerSliderArr[i].id, bannerSliderW, bannerSliderH, psdW);

								_fn.bannerSliderType1Resize(bannerSliderArr[i].id, bannerSliderW, bannerSliderH, psdW);

								_fn.bannerSliderLazyload(bannerSliderArr[i].id);

								//初始化成功之后的回调
								if (typeof bannerSliderArr[i].callback == 'function') {
									bannerSliderArr[i].callback();
								}
							}
						}
					} else {
						console = console || {
							error: function() {
								return;
							},
							log: function() {
								return;
							},
							info: function() {
								return;
							}
						};
						console.error('bannerSlider param is error,must be an object type!');
					}

				}

			}
		},
		setBannerSliderType2Size: function(bannerSliderId, bannerSliderW, bannerSliderH, psdW, controllerH) {
			var bannerSliderLen = $("#" + bannerSliderId + " .content li").length;
			var clientWidth = document.querySelector('body').clientWidth;
			$("#" + bannerSliderId).css('width', (bannerSliderW / psdW) * 100 + '%');
			$("#" + bannerSliderId + " .content").css('width', clientWidth * bannerSliderLen + 'px');
			$("#" + bannerSliderId).css('height', (bannerSliderH / psdW) * clientWidth + parseInt(controllerH) + 'px');
			$("#" + bannerSliderId + " .content").css('height', (bannerSliderH / psdW) * clientWidth + 'px');
			$("#" + bannerSliderId + " .content").css('transform', 'translateX(-' + mochaObj[bannerSliderId].curPage * (bannerSliderW / psdW) * clientWidth + 'px)');
			$("#" + bannerSliderId + " .content li img").css('height', (bannerSliderH / psdW) * clientWidth + 'px');
			$("#" + bannerSliderId + " .content li").css('width', (bannerSliderW / psdW) * clientWidth + 'px');
		},
		bannerSliderType2Resize: function(bannerSliderId, bannerSliderW, bannerSliderH, psdW, controllerH) {
			$(window).resize(function(event) {
				_fn.setBannerSliderType2Size(bannerSliderId, bannerSliderW, bannerSliderH, psdW, controllerH);
			});
		},
		bannerSliderType2Init: function(bannerSliderArr) {
			if ((bannerSliderArr.constructor == Array) && (bannerSliderArr.length != 0)) {
				for (var i = 0; i < bannerSliderArr.length; i++) {
					if ((typeof bannerSliderArr[i] == 'object') && (bannerSliderArr[i] !== null) && (bannerSliderArr[i].constructor !== Array)) {
						var psdW = parseInt($('#' + bannerSliderArr[i].id).data('psdw')),
							bannerSliderW = parseInt($('#' + bannerSliderArr[i].id).data('bannersliderw')),
							bannerSliderH = parseInt($('#' + bannerSliderArr[i].id).data('bannersliderh')),
							oDataNewJsId = $.trim($('#' + bannerSliderArr[i].id).data('odatanewjsid')),
							showLink = $('#' + bannerSliderArr[i].id).data('showlink'),
							tcssPrefix = $('#' + bannerSliderArr[i].id).data('tcssprefix');
						//是否遍历
						if (oDataNewJsId) {
							_util.scriptLoader('http://game.qq.com/time/qqadv/Info_new_' + oDataNewJsId + '.js', function(param) {
								var oDataNewObj = eval('oDaTaNew' + oDataNewJsId);
								if (!oDataNewObj) {
									return;
								}
								//开始遍历
								$("#" + param.id + " .content").find('li').each(function(index, el) {
									var obj = $(el),
										posId = obj.data('posid'),
										pos = oDataNewObj['pos' + posId];
									if (!pos) {
										_util.adIdNoAdInfoTips(posId);
										obj.remove();
									} else {
										var posTitle = decodeURIComponent(pos[0]),
											posLink = pos[1],
											posImg = 'http://game.gtimg.cn/upload/adw/' + pos[2];
										if (tcssPrefix) {
											if (showLink !== false) {
												obj.html('<a href="' + posLink + '" title="' + posTitle + '" onclick="pgvSendClick({hottag:\'' + tcssPrefix + '.ad' + (index + 1) + '\'});"><img data-src="' + posImg + '" alt="' + posTitle + '" /></a>');
											} else {
												obj.attr('onclick', 'pgvSendClick({hottag:\'' + tcssPrefix + '.ad' + (index + 1) + '\'});');
												obj.html('<img data-src="' + posImg + '" alt="' + posTitle + '" />');
											}
										} else {
											if (showLink !== false) {
												obj.html('<a href="' + posLink + '" title="' + posTitle + '"><img data-src="' + posImg + '" alt="' + posTitle + '" /></a>');
											} else {
												obj.html('<img data-src="' + posImg + '" alt="' + posTitle + '" />');
											}
										}
									}

								});
								if ($('#' + param.id + ' .content li').length <= 0) {
									console = console || {
										error: function() {
											return;
										},
										log: function() {
											return;
										},
										info: function() {
											return;
										}
									};
									console.error(param.id + ', the length of li must be greater than 0 !');
								} else {
									//第一项改为src,防止slide在只有一项的情况下 data-src不会替换为src
									var tempSrc = $('#' + param.id + ' .content li').eq(0).find('img').data('src');
									$('#' + param.id + ' .content li').eq(0).find('img').attr('src',tempSrc).removeAttr('data-src');


									mochaObj[param.id] = new mo.Slide({
										target: $('#' + param.id + ' .content li'),
										playTo: 0,
										autoPlay: false,
										animateTime: 600,
										lazy: true
									});

									_fn.setBannerSliderType2Size(param.id, bannerSliderW, bannerSliderH, psdW, param.controllerH);

									_fn.bannerSliderType2Resize(param.id, bannerSliderW, bannerSliderH, psdW, param.controllerH);

									_fn.bannerSliderLazyload(param.id);

									//初始化成功之后的回调
									if (typeof param.callback == 'function') {
										param.callback();
									}
								}
							}, {
								'id': bannerSliderArr[i].id,
								'controllerH': bannerSliderArr[i].controllerH,
								'callback': bannerSliderArr[i].callback
							});
						} else {
							if ($('#' + bannerSliderArr[i].id + ' .content li').length <= 0) {
								console = console || {
									error: function() {
										return;
									},
									log: function() {
										return;
									},
									info: function() {
										return;
									}
								};
								console.error(bannerSliderArr[i].id + ', the length of li must be greater than 0 !');
							} else {
								mochaObj[bannerSliderArr[i].id] = new mo.Slide({
									target: $('#' + bannerSliderArr[i].id + ' .content li'),
									playTo: 0,
									autoPlay: false,
									animateTime: 600,
									lazy: true
								});

								_fn.setBannerSliderType2Size(bannerSliderArr[i].id, bannerSliderW, bannerSliderH, psdW, bannerSliderArr[i].controllerH);

								_fn.bannerSliderType2Resize(bannerSliderArr[i].id, bannerSliderW, bannerSliderH, psdW, bannerSliderArr[i].controllerH);

								_fn.bannerSliderLazyload(bannerSliderArr[i].id);

								//初始化成功之后的回调
								if (typeof bannerSliderArr[i].callback == 'function') {
									bannerSliderArr[i].callback();
								}
							}

						}


					} else {
						console = console || {
							error: function() {
								return;
							},
							log: function() {
								return;
							},
							info: function() {
								return;
							}
						};
						console.error('bannerSlider param is error,must be an object type!');
					}
				}

			}
		},
		setBannerSliderType3Size: function(bannerSliderId, bannerSliderW, bannerSliderH, psdW, controllerH) {
			var bannerSliderLen = $("#" + bannerSliderId + " .content li").length;
			var clientWidth = document.querySelector('body').clientWidth;
			$("#" + bannerSliderId).css('width', (bannerSliderW / psdW) * 100 + '%');
			$("#" + bannerSliderId + " .content").css('width', clientWidth * bannerSliderLen + 'px');
			$("#" + bannerSliderId).css('height', (bannerSliderH / psdW) * clientWidth + parseInt(controllerH) + 'px');
			$("#" + bannerSliderId + "Wrapper").css('height', (bannerSliderH / psdW) * clientWidth + parseInt(controllerH) + 'px');
			$("#" + bannerSliderId + " .content").css('height', (bannerSliderH / psdW) * clientWidth + 'px');
			$("#" + bannerSliderId + " .content").css('transform', 'translateX(-' + mochaObj[bannerSliderId].curPage * (bannerSliderW / psdW) * clientWidth + 'px)');
			$("#" + bannerSliderId + " .content li img").css('height', (bannerSliderH / psdW) * clientWidth + 'px');
			$("#" + bannerSliderId + " .content li").css('width', (bannerSliderW / psdW) * clientWidth + 'px');
			$("#" + bannerSliderId + "Wrapper .mocha-banner-slider-btn").css('marginTop', -($("#" + bannerSliderId + "Wrapper .mocha-banner-slider-btn").height() / 2 + parseInt(controllerH) / 2) + 'px');
		},
		bannerSliderType3Resize: function(bannerSliderId, bannerSliderW, bannerSliderH, psdW, controllerH) {
			$(window).resize(function(event) {
				_fn.setBannerSliderType3Size(bannerSliderId, bannerSliderW, bannerSliderH, psdW, controllerH);
			});
		},
		bannerSliderType3Init: function(bannerSliderArr) {
			if ((bannerSliderArr.constructor == Array) && (bannerSliderArr.length != 0)) {
				for (var i = 0; i < bannerSliderArr.length; i++) {
					if ((typeof bannerSliderArr[i] == 'object') && (bannerSliderArr[i] !== null) && (bannerSliderArr[i].constructor !== Array)) {

						var psdW = parseInt($('#' + bannerSliderArr[i].id).data('psdw')),
							bannerSliderW = parseInt($('#' + bannerSliderArr[i].id).data('bannersliderw')),
							bannerSliderH = parseInt($('#' + bannerSliderArr[i].id).data('bannersliderh')),
							oDataNewJsId = $.trim($('#' + bannerSliderArr[i].id).data('odatanewjsid')),
							showLink = $('#' + bannerSliderArr[i].id).data('showlink'),
							tcssPrefix = $('#' + bannerSliderArr[i].id).data('tcssprefix');

						//是否遍历
						if (oDataNewJsId) {
							_util.scriptLoader('http://game.qq.com/time/qqadv/Info_new_' + oDataNewJsId + '.js', function(param) {
								var oDataNewObj = eval('oDaTaNew' + oDataNewJsId);

								if (!oDataNewObj) {
									return;
								}
								//开始遍历
								$("#" + param.id + " .content").find('li').each(function(index, el) {
									var obj = $(el),
										posId = obj.data('posid'),
										pos = oDataNewObj['pos' + posId];
									if (!pos) {
										_util.adIdNoAdInfoTips(posId);
										obj.remove();
									} else {
										var posTitle = decodeURIComponent(pos[0]),
											posLink = pos[1],
											posImg = 'http://game.gtimg.cn/upload/adw/' + pos[2];
										if (tcssPrefix) {
											if (showLink !== false) {
												obj.html('<a href="' + posLink + '" title="' + posTitle + '" onclick="pgvSendClick({hottag:\'' + tcssPrefix + '.ad' + (index + 1) + '\'});"><img data-src="' + posImg + '" alt="' + posTitle + '" /></a>');
											} else {
												obj.attr('onclick', 'pgvSendClick({hottag:\'' + tcssPrefix + '.ad' + (index + 1) + '\'});');
												obj.html('<img data-src="' + posImg + '" alt="' + posTitle + '" />');
											}
										} else {
											if (showLink !== false) {
												obj.html('<a href="' + posLink + '" title="' + posTitle + '"><img data-src="' + posImg + '" alt="' + posTitle + '" /></a>');
											} else {
												obj.html('<img data-src="' + posImg + '" alt="' + posTitle + '" />');
											}
										}
									}

								});

								//初始化slider
								if ($('#' + param.id + ' .content li').length <= 0) {
									console = console || {
										error: function() {
											return;
										},
										log: function() {
											return;
										},
										info: function() {
											return;
										}
									};
									console.error(param.id + ', the length of li must be greater than 0 !');
								} else {
									//第一项改为src,防止slide在只有一项的情况下 data-src不会替换为src
									var tempSrc = $('#' + param.id + ' .content li').eq(0).find('img').data('src');
									$('#' + param.id + ' .content li').eq(0).find('img').attr('src',tempSrc).removeAttr('data-src');


									mochaObj[param.id] = new mo.Slide({
										target: $('#' + param.id + ' .content li'),
										playTo: 0,
										autoPlay: false,
										animateTime: 600,
										lazy: true,
										prevBtn: $('#' + param.id + 'Wrapper .prevBtn'),
										nextBtn: $('#' + param.id + 'Wrapper .nextBtn')
									});

									_fn.setBannerSliderType3Size(param.id, bannerSliderW, bannerSliderH, psdW, param.controllerH);

									_fn.bannerSliderType3Resize(param.id, bannerSliderW, bannerSliderH, psdW, param.controllerH);

									_fn.bannerSliderLazyload(param.id);

									//初始化成功之后的回调
									if (typeof param.callback == 'function') {
										param.callback();
									}
								}

							}, {
								'id': bannerSliderArr[i].id,
								'controllerH': bannerSliderArr[i].controllerH,
								'callback': bannerSliderArr[i].callback
							});
						} else {

							if ($('#' + bannerSliderArr[i].id + ' .content li').length <= 0) {
								console = console || {
									error: function() {
										return;
									},
									log: function() {
										return;
									},
									info: function() {
										return;
									}
								};
								console.error(bannerSliderArr[i].id + ', the length of li must be greater than 0 !');
							} else {
								//初始化slider
								mochaObj[bannerSliderArr[i].id] = new mo.Slide({
									target: $('#' + bannerSliderArr[i].id + ' .content li'),
									playTo: 0,
									autoPlay: false,
									animateTime: 600,
									lazy: true,
									prevBtn: $('#' + bannerSliderArr[i].id + 'Wrapper .prevBtn'),
									nextBtn: $('#' + bannerSliderArr[i].id + 'Wrapper .nextBtn')
								});

								_fn.setBannerSliderType3Size(bannerSliderArr[i].id, bannerSliderW, bannerSliderH, psdW, bannerSliderArr[i].controllerH);

								_fn.bannerSliderType3Resize(bannerSliderArr[i].id, bannerSliderW, bannerSliderH, psdW, bannerSliderArr[i].controllerH);

								_fn.bannerSliderLazyload(bannerSliderArr[i].id);

								//初始化成功之后的回调
								if (typeof bannerSliderArr[i].callback == 'function') {
									bannerSliderArr[i].callback();
								}
							}

						}


					} else {
						console = console || {
							error: function() {
								return;
							},
							log: function() {
								return;
							},
							info: function() {
								return;
							}
						};
						console.error('bannerSlider param is error,must be an object type!');
					}

				}


			}
		},
		setBannerSliderType4Size: function(bannerSliderId, bannerSliderW, bannerSliderH, psdW, controllerH, liWidth, liPadding) {
			var bannerSliderLen = $("#" + bannerSliderId + " .content li").length;
			var clientWidth = document.querySelector('body').clientWidth;
			$("#" + bannerSliderId).css('width', (bannerSliderW / psdW) * 100 + '%');
			$("#" + bannerSliderId + " .content").css('width', clientWidth * bannerSliderLen + 'px');
			$("#" + bannerSliderId).css('height', (bannerSliderH / psdW) * clientWidth + parseInt(controllerH) + 'px');
			$("#" + bannerSliderId + " .content").css('height', (bannerSliderH / psdW) * clientWidth + 'px');
			$("#" + bannerSliderId + " .content li img").css('height', (bannerSliderH / psdW) * clientWidth + 'px');
			$("#" + bannerSliderId + " .content li").css('width', parseInt(liWidth) * clientWidth / psdW + 'px');
			$("#" + bannerSliderId + " .content li").css('padding', '0px ' + (parseInt(liPadding) / psdW) * clientWidth + 'px');
			$("#" + bannerSliderId + " .content").css('transform', 'translateX(-' + mochaObj[bannerSliderId].curPage * $("#" + bannerSliderId + " .content li").width() + 'px)');
			$("#" + bannerSliderId + " .content").css('left', ((((bannerSliderW / psdW * clientWidth) - $("#" + bannerSliderId + " .content li").width()) / 2) - (parseInt(liPadding) / psdW) * clientWidth / 2) + 'px');
		},
		bannerSliderType4Resize: function(bannerSliderId, bannerSliderW, bannerSliderH, psdW, controllerH, liWidth, liPadding) {
			$(window).resize(function(event) {
				_fn.setBannerSliderType4Size(bannerSliderId, bannerSliderW, bannerSliderH, psdW, controllerH, liWidth, liPadding);
			});
		},
		bannerSliderType4Init: function(bannerSliderArr) {
			if ((bannerSliderArr.constructor == Array) && (bannerSliderArr.length != 0)) {
				for (var i = 0; i < bannerSliderArr.length; i++) {
					if ((typeof bannerSliderArr[i] == 'object') && (bannerSliderArr[i] !== null) && (bannerSliderArr[i].constructor !== Array)) {

						var psdW = parseInt($('#' + bannerSliderArr[i].id).data('psdw')),
							bannerSliderW = parseInt($('#' + bannerSliderArr[i].id).data('bannersliderw')),
							bannerSliderH = parseInt($('#' + bannerSliderArr[i].id).data('bannersliderh')),
							liWidth = parseInt($('#' + bannerSliderArr[i].id).data('liwidth')),
							liPadding = parseInt($('#' + bannerSliderArr[i].id).data('lipadding')),
							oDataNewJsId = $.trim($('#' + bannerSliderArr[i].id).data('odatanewjsid')),
							showLink = $('#' + bannerSliderArr[i].id).data('showlink'),
							tcssPrefix = $('#' + bannerSliderArr[i].id).data('tcssprefix');

						//是否遍历
						if (oDataNewJsId) {
							_util.scriptLoader('http://game.qq.com/time/qqadv/Info_new_' + oDataNewJsId + '.js', function(param) {
								var oDataNewObj = eval('oDaTaNew' + oDataNewJsId);

								if (!oDataNewObj) {
									return;
								}
								//开始遍历
								$("#" + param.id + " .content").find('li').each(function(index, el) {
									var obj = $(el),
										posId = obj.data('posid'),
										pos = oDataNewObj['pos' + posId];
									if (!pos) {
										_util.adIdNoAdInfoTips(posId);
										obj.remove();
									} else {
										var posTitle = decodeURIComponent(pos[0]),
											posLink = pos[1],
											posImg = 'http://game.gtimg.cn/upload/adw/' + pos[2];
										if (tcssPrefix) {
											if (showLink !== false) {
												obj.html('<a href="' + posLink + '" title="' + posTitle + '" onclick="pgvSendClick({hottag:\'' + tcssPrefix + '.ad' + (index + 1) + '\'});"><img data-src="' + posImg + '" alt="' + posTitle + '" /></a>');
											} else {
												obj.attr('onclick', 'pgvSendClick({hottag:\'' + tcssPrefix + '.ad' + (index + 1) + '\'});');
												obj.html('<img data-src="' + posImg + '" alt="' + posTitle + '" />');
											}
										} else {
											if (showLink !== false) {
												obj.html('<a href="' + posLink + '" title="' + posTitle + '"><img data-src="' + posImg + '" alt="' + posTitle + '" /></a>');
											} else {
												obj.html('<img data-src="' + posImg + '" alt="' + posTitle + '" />');
											}
										}
									}

								});

								//初始化slider
								if ($('#' + param.id + ' .content li').length <= 0) {
									console = console || {
										error: function() {
											return;
										},
										log: function() {
											return;
										},
										info: function() {
											return;
										}
									};
									console.error(param.id + ', the length of li must be greater than 0 !');
								} else {
									//第一项改为src,防止slide在只有一项的情况下 data-src不会替换为src
									var tempSrc = $('#' + param.id + ' .content li').eq(0).find('img').data('src');
									$('#' + param.id + ' .content li').eq(0).find('img').attr('src',tempSrc).removeAttr('data-src');


									mochaObj[param.id] = new mo.Slide({
										target: $('#' + param.id + ' .content li'),
										playTo: 1,
										autoPlay: false,
										animateTime: 600,
										lazy: true
									});

									_fn.setBannerSliderType4Size(param.id, bannerSliderW, bannerSliderH, psdW, param.controllerH, liWidth, liPadding);

									_fn.bannerSliderType4Resize(param.id, bannerSliderW, bannerSliderH, psdW, param.controllerH, liWidth, liPadding);

									_fn.bannerSliderLazyload(param.id);

									//初始化成功之后的回调
									if (typeof param.callback == 'function') {
										param.callback();
									}
								}

							}, {
								'id': bannerSliderArr[i].id,
								'controllerH': bannerSliderArr[i].controllerH,
								'callback': bannerSliderArr[i].callback
							});
						} else {

							if ($('#' + bannerSliderArr[i].id + ' .content li').length <= 0) {
								console = console || {
									error: function() {
										return;
									},
									log: function() {
										return;
									},
									info: function() {
										return;
									}
								};
								console.error(bannerSliderArr[i].id + ', the length of li must be greater than 0 !');
							} else {
								//初始化slider
								mochaObj[bannerSliderArr[i].id] = new mo.Slide({
									target: $('#' + bannerSliderArr[i].id + ' .content li'),
									playTo: 1,
									autoPlay: false,
									animateTime: 600,
									lazy: true
								});

								_fn.setBannerSliderType4Size(bannerSliderArr[i].id, bannerSliderW, bannerSliderH, psdW, bannerSliderArr[i].controllerH, liWidth, liPadding);

								_fn.bannerSliderType4Resize(bannerSliderArr[i].id, bannerSliderW, bannerSliderH, psdW, bannerSliderArr[i].controllerH, liWidth, liPadding);

								_fn.bannerSliderLazyload(bannerSliderArr[i].id);

								//初始化成功之后的回调
								if (typeof bannerSliderArr[i].callback == 'function') {
									bannerSliderArr[i].callback();
								}
							}

						}

					} else {
						console = console || {
							error: function() {
								return;
							},
							log: function() {
								return;
							},
							info: function() {
								return;
							}
						};
						console.error('bannerSlider param is error,must be an object type!');
					}

				}

			}
		},
		setBannerSliderType5Size: function(bannerSliderId, bannerSliderGalleryTopW, bannerSliderGalleryTopH, bannerSliderGalleryTopMarginBottom, bannerSliderGalleryThumbsW, bannerSliderGalleryThumbsH, bannerSliderGalleryThumbsLiPaddingRight, psdW) {
			var bannerSliderGalleryTopLen = $("#" + bannerSliderId + " .gallery-top .content li").length;
			var bannerSliderGalleryThumbsLen = $("#" + bannerSliderId + " .gallery-thumbs .content li").length;
			var clientWidth = document.querySelector('body').clientWidth;
			$("#" + bannerSliderId + ' .gallery-top').css('width', (bannerSliderGalleryTopW / psdW) * 100 + '%');
			$("#" + bannerSliderId + ' .gallery-top').css('marginBottom', (bannerSliderGalleryTopMarginBottom / psdW) * clientWidth + 'px');
			$("#" + bannerSliderId + " .gallery-top .content").css('width', clientWidth * bannerSliderGalleryTopLen + 'px');
			$("#" + bannerSliderId + " .gallery-top,#" + bannerSliderId + " .gallery-top .content").css('height', (bannerSliderGalleryTopH / psdW) * clientWidth + 'px');
			$("#" + bannerSliderId + " .gallery-top .content").css('transform', 'translateX(-' + mochaObj[bannerSliderId + ''].curPage * (bannerSliderGalleryTopW / psdW) * clientWidth + 'px)');
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
			$("#" + bannerSliderId + " .gallery-thumbs .content").css('transform', 'translateX(-' + mochaObj[bannerSliderId + 'SmallPic'].curPage * $("#" + bannerSliderId + " .gallery-thumbs .content li").width() + 'px)');
			$("#" + bannerSliderId + " .gallery-thumbs .content").css('left', ((((bannerSliderGalleryThumbsW / psdW * clientWidth) - $("#" + bannerSliderId + " .gallery-thumbs .content li").width()) / 2) + (parseInt(bannerSliderGalleryThumbsLiPaddingRight) / psdW) * clientWidth / 2) + 'px');
		},
		setBannerSliderType5GalleryThumbsStyle: function(bannerSliderId) {
			$("#" + bannerSliderId + " .gallery-thumbs .content li").eq(mochaObj[bannerSliderId + ''].curPage).addClass('cur');
			$("#" + bannerSliderId + " .gallery-thumbs .content li").bind('click', function(event) {
				$("#" + bannerSliderId + " .gallery-thumbs .content li").removeClass('cur');
				var curIndex = $(this).index();
				mochaObj[bannerSliderId + ''].playTo(curIndex);
				$(this).addClass('cur');
			});
			mochaObj[bannerSliderId + ''].on('beforechange', function() {
				$("#" + bannerSliderId + " .gallery-thumbs .content li").removeClass('cur');
				mochaObj[bannerSliderId + 'SmallPic'].playTo(this.curPage);
				$("#" + bannerSliderId + " .gallery-thumbs .content li").eq(this.curPage).addClass('cur');
			});
		},
		setBannerSliderType5GalleryTopLazyload: function(bannerSliderId) {
			var bsLen = $("#" + bannerSliderId + " .gallery-top .content li").length;
			var bsLazyload = function(idArr) {
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
			var bsCompare = function(curPage) {
				if (curPage < bsLen) {
					if (curPage > 0) {
						if (curPage == (bsLen - 1)) {
							bsLazyload([curPage - 1]);
						} else {
							bsLazyload([curPage - 1, curPage + 1]);
						}
					} else {
						bsLazyload([curPage + 1]);
					}
				}
			};
			bsCompare(mochaObj[bannerSliderId + ''].curPage);
			mochaObj[bannerSliderId + ''].on("beforechange", function() {
				bsCompare(this.curPage);
			});
		},
		setBannerSliderType5GalleryThumbsLazyload: function(bannerSliderId) {
			var bsLen = $("#" + bannerSliderId + " .gallery-thumbs .content li").length;
			var bsLazyload = function(idArr) {
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
			var bsCompare = function(curPage) {
				if (curPage < bsLen) {
					if (curPage > 0) {
						if (curPage == (bsLen - 1)) {
							bsLazyload([curPage - 1]);
						} else {
							bsLazyload([curPage - 1, curPage + 1]);
						}
					} else {
						bsLazyload([curPage + 1]);
					}
				}
			};
			bsCompare(mochaObj[bannerSliderId + 'SmallPic'].curPage);
			mochaObj[bannerSliderId + 'SmallPic'].on("beforechange", function() {
				bsCompare(this.curPage);
			});
		},
		bannerSliderType5Resize: function(bannerSliderId, galleryTopBannerSliderW, galleryTopBannerSliderH, galleryTopBannerSliderMarginBottom, galleryThumbsBannerSliderW, galleryThumbsBannerSliderH, galleryThumbsBannerSliderLiPaddingRight, psdW) {
			$(window).resize(function(event) {
				_fn.setBannerSliderType5Size(bannerSliderId, galleryTopBannerSliderW, galleryTopBannerSliderH, galleryTopBannerSliderMarginBottom, galleryThumbsBannerSliderW, galleryThumbsBannerSliderH, galleryThumbsBannerSliderLiPaddingRight, psdW);
			});
		},
		bannerSliderType5Init: function(bannerSliderArr) {
			if ((bannerSliderArr.constructor == Array) && (bannerSliderArr.length != 0)) {
				for (var i = 0; i < bannerSliderArr.length; i++) {
					if ((typeof bannerSliderArr[i] == 'object') && (bannerSliderArr[i] !== null) && (bannerSliderArr[i].constructor !== Array)) {

						var psdW = parseInt($('#' + bannerSliderArr[i].id).data('psdw')),
							galleryTopBannerSliderW = parseInt($('#' + bannerSliderArr[i].id + ' .gallery-top').data('bannersliderw')),
							galleryTopBannerSliderH = parseInt($('#' + bannerSliderArr[i].id + ' .gallery-top').data('bannersliderh')),
							galleryTopBannerSliderMarginBottom = parseInt($('#' + bannerSliderArr[i].id + ' .gallery-top').data('bannerslidermarginbottom')),
							galleryThumbsBannerSliderW = parseInt($('#' + bannerSliderArr[i].id + ' .gallery-thumbs').data('bannersliderw')),
							galleryThumbsBannerSliderH = parseInt($('#' + bannerSliderArr[i].id + ' .gallery-thumbs').data('bannersliderh')),
							galleryThumbsBannerSliderLiPaddingRight = parseInt($('#' + bannerSliderArr[i].id + ' .gallery-thumbs').data('lipaddingright')),
							oDataNewJsId = $.trim($('#' + bannerSliderArr[i].id).data('odatanewjsid')),
							showLink = $('#' + bannerSliderArr[i].id).data('showlink'),
							tcssPrefix = $('#' + bannerSliderArr[i].id).data('tcssprefix'),
							galleryThumbsUlHtml = '';

						//是否遍历
						if (oDataNewJsId) {
							_util.scriptLoader('http://game.qq.com/time/qqadv/Info_new_' + oDataNewJsId + '.js', function(param) {
								var oDataNewObj = eval('oDaTaNew' + oDataNewJsId);

								if (!oDataNewObj) {
									return;
								}
								//开始遍历 
								$("#" + param.id + " .gallery-top .content").find('li').each(function(index, el) {
									var obj = $(el),
										posId = obj.data('posid'),
										pos = oDataNewObj['pos' + posId];
									if (!pos) {
										_util.adIdNoAdInfoTips(posId);
										obj.remove();
									} else {
										var posTitle = decodeURIComponent(pos[0]),
											posLink = pos[1],
											posImg = 'http://game.gtimg.cn/upload/adw/' + pos[2];
										if (tcssPrefix) {
											if (showLink !== false) {
												obj.html('<a href="' + posLink + '" title="' + posTitle + '" onclick="pgvSendClick({hottag:\'' + tcssPrefix + '.ad' + (index + 1) + '\'});"><img data-src="' + posImg + '" alt="' + posTitle + '" /></a>');
											} else {
												obj.attr('onclick', 'pgvSendClick({hottag:\'' + tcssPrefix + '.ad' + (index + 1) + '\'});');
												obj.html('<img data-src="' + posImg + '" alt="' + posTitle + '" />');
											}
										} else {
											if (showLink !== false) {
												obj.html('<a href="' + posLink + '" title="' + posTitle + '"><img data-src="' + posImg + '" alt="' + posTitle + '" /></a>');
											} else {
												obj.html('<img data-src="' + posImg + '" alt="' + posTitle + '" />');
											}
										}
										galleryThumbsUlHtml += '<li><img data-src="' + posImg + '" alt="' + posTitle + '"/></li>';
									}

								});
								//填充小图片
								$("#" + param.id + " .gallery-thumbs .content").html(galleryThumbsUlHtml);
								galleryThumbsUlHtml = '';

								//初始化slider
								if ($('#' + param.id + ' .gallery-top .content li').length <= 0) {
									console = console || {
										error: function() {
											return;
										},
										log: function() {
											return;
										},
										info: function() {
											return;
										}
									};
									console.error(param.id + ', the length of li must be greater than 0 !');
								} else {
									//第一项改为src,防止slide在只有一项的情况下 data-src不会替换为src
									var tempSrc1 = $('#' + param.id + ' .gallery-top .content li').eq(0).find('img').data('src');
									$('#' + param.id + ' .gallery-top .content li').eq(0).find('img').attr('src',tempSrc1).removeAttr('data-src');

									//第一项改为src,防止slide在只有一项的情况下 data-src不会替换为src
									var tempSrc2 = $('#' + param.id + ' .gallery-thumbs .content li').eq(0).find('img').data('src');
									$('#' + param.id + ' .gallery-thumbs .content li').eq(0).find('img').attr('src',tempSrc2).removeAttr('data-src');


									mochaObj[param.id + ''] = new mo.Slide({
										target: $('#' + param.id + ' .gallery-top .content li'),
										playTo: 1,
										autoPlay: false,
										animateTime: 600,
										controller: false,
										lazy: true
									});
									mochaObj[param.id + 'SmallPic'] = new mo.Slide({
										target: $('#' + param.id + ' .gallery-thumbs .content li'),
										playTo: 1,
										autoPlay: false,
										animateTime: 800,
										controller: false,
										lazy: true,
										event: {
											init: function() {
												//设置thumbs初始化样式
												_fn.setBannerSliderType5GalleryThumbsStyle(param.id);
											}
										}
									});
									_fn.setBannerSliderType5Size(param.id, galleryTopBannerSliderW, galleryTopBannerSliderH, galleryTopBannerSliderMarginBottom, galleryThumbsBannerSliderW, galleryThumbsBannerSliderH, galleryThumbsBannerSliderLiPaddingRight, psdW);

									_fn.bannerSliderType5Resize(param.id, galleryTopBannerSliderW, galleryTopBannerSliderH, galleryTopBannerSliderMarginBottom, galleryThumbsBannerSliderW, galleryThumbsBannerSliderH, galleryThumbsBannerSliderLiPaddingRight, psdW);

									_fn.setBannerSliderType5GalleryTopLazyload(param.id);

									_fn.setBannerSliderType5GalleryThumbsLazyload(param.id);

									//初始化成功之后的回调
									if (typeof param.callback == 'function') {
										param.callback();
									}
								}

							}, {
								'id': bannerSliderArr[i].id,
								'callback': bannerSliderArr[i].callback
							});
						} else {

							if ($('#' + bannerSliderArr[i].id + ' .gallery-top .content li').length <= 0) {
								console = console || {
									error: function() {
										return;
									},
									log: function() {
										return;
									},
									info: function() {
										return;
									}
								};
								console.error(bannerSliderArr[i].id + ', the length of li must be greater than 0 !');
							} else {
								mochaObj[bannerSliderArr[i].id + ''] = new mo.Slide({
									target: $('#' + bannerSliderArr[i].id + ' .gallery-top .content li'),
									playTo: 1,
									autoPlay: false,
									animateTime: 600,
									controller: false,
									lazy: true
								});
								mochaObj[bannerSliderArr[i].id + 'SmallPic'] = new mo.Slide({
									target: $('#' + bannerSliderArr[i].id + ' .gallery-thumbs .content li'),
									playTo: 1,
									autoPlay: false,
									animateTime: 800,
									controller: false,
									lazy: true,
									event: {
										init: function() {
											//设置thumbs初始化样式
											_fn.setBannerSliderType5GalleryThumbsStyle(bannerSliderArr[i].id);
										}
									}
								});
								_fn.setBannerSliderType5Size(bannerSliderArr[i].id, galleryTopBannerSliderW, galleryTopBannerSliderH, galleryTopBannerSliderMarginBottom, galleryThumbsBannerSliderW, galleryThumbsBannerSliderH, galleryThumbsBannerSliderLiPaddingRight, psdW);

								_fn.bannerSliderType5Resize(bannerSliderArr[i].id, galleryTopBannerSliderW, galleryTopBannerSliderH, galleryTopBannerSliderMarginBottom, galleryThumbsBannerSliderW, galleryThumbsBannerSliderH, galleryThumbsBannerSliderLiPaddingRight, psdW);

								_fn.setBannerSliderType5GalleryTopLazyload(bannerSliderArr[i].id);

								_fn.setBannerSliderType5GalleryThumbsLazyload(bannerSliderArr[i].id);

								//初始化成功之后的回调
								if (typeof bannerSliderArr[i].callback == 'function') {
									bannerSliderArr[i].callback();
								}
							}

						}

					} else {
						console = console || {
							error: function() {
								return;
							},
							log: function() {
								return;
							},
							info: function() {
								return;
							}
						};
						console.error('bannerSlider param is error,must be an object type!');
					}

				}

			}
		},
		setBannerSliderType6Size: function(bannerSliderId, bannerSliderVideoTopW, bannerSliderVideoTopMarginBottom, bannerSliderVideoThumbsW, bannerSliderVideoThumbsH, bannerSliderVideoThumbsLiPaddingRight, psdW, videoProportion) {
			var bannerSliderVideoThumbsLen = $("#" + bannerSliderId + " .video-thumbs .content li").length;
			var clientWidth = document.querySelector('body').clientWidth;
			var videoProportionW = parseInt(videoProportion.split("-")[0]),
				videoProportionH = parseInt(videoProportion.split("-")[1]);

			$("#" + bannerSliderId + ' .video-top').css('width', (bannerSliderVideoTopW / psdW) * 100 + '%');
			$("#" + bannerSliderId + ' .video-top').css('height', (bannerSliderVideoTopW / psdW) * clientWidth * videoProportionH / videoProportionW + 'px');
			$("#" + bannerSliderId + ' .video-top').css('marginBottom', (bannerSliderVideoTopMarginBottom / psdW) * clientWidth + 'px');
			//gallery-thumbs
			$("#" + bannerSliderId + " .video-thumbs").css('width', (bannerSliderVideoThumbsW / psdW) * 100 + '%');
			$("#" + bannerSliderId + " .video-thumbs .content").css('width', clientWidth * bannerSliderVideoThumbsLen + 'px');
			$("#" + bannerSliderId + " .video-thumbs .content").css('position', 'relative');
			//$("#" + bannerSliderId + " .video-thumbs").css('height', (bannerSliderVideoThumbsH / psdW) * clientWidth + 'px');
			//$("#" + bannerSliderId + " .video-thumbs .content").css('height', (bannerSliderVideoThumbsH / psdW) * clientWidth + 'px');
			$("#" + bannerSliderId + " .video-thumbs .content li img").css('height', (bannerSliderVideoThumbsH / psdW) * clientWidth + 'px');
			$("#" + bannerSliderId + " .video-thumbs .content li").css('width', videoProportionW / videoProportionH * ((bannerSliderVideoThumbsH / psdW) * clientWidth) + 'px');
			$("#" + bannerSliderId + " .video-thumbs .content li").css('paddingRight', (parseInt(bannerSliderVideoThumbsLiPaddingRight) / psdW) * clientWidth + 'px');
			$("#" + bannerSliderId + " .video-thumbs .content").css('transform', 'translateX(-' + mochaObj[bannerSliderId + 'SmallVideo'].curPage * $("#" + bannerSliderId + " .video-thumbs .content li").width() + 'px)');
		},
		setBannerSliderType6VideoThumbsStyle: function(bannerSliderId) {
			$("#" + bannerSliderId + " .video-thumbs .content li").eq(mochaObj[bannerSliderId + 'SmallVideo'].curPage).addClass('cur');
			$("#" + bannerSliderId + " .video-thumbs .content>li").bind('click', function(event) {
				$("#" + bannerSliderId + " .video-thumbs .content>li").removeClass('cur');
				$(this).addClass('cur');
			});
		},
		setBannerSliderType6VideoThumbsLazyload: function(bannerSliderId) {
			var bsLen = $("#" + bannerSliderId + " .video-thumbs .content li").length;
			var bsLazyload = function(idArr) {
				if ((idArr.constructor == Array) && (idArr.length != 0)) {
					for (var i = 0; i < idArr.length; i++) {
						var elem = $("#" + bannerSliderId + " .video-thumbs .content li").eq(idArr[i]).find("img");
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
			var bsCompare = function(curPage) {
				if (curPage < bsLen) {
					if (curPage > 0) {
						if (curPage == (bsLen - 1)) {
							bsLazyload([curPage - 1, curPage - 2, curPage - 3]);
						} else {
							bsLazyload([curPage - 1, curPage - 2, curPage - 3, curPage + 1, curPage + 2, curPage + 3]);
						}
					} else {
						bsLazyload([curPage + 1, curPage + 2, curPage + 3]);
					}
				}
			};
			bsCompare(mochaObj[bannerSliderId + 'SmallVideo'].curPage);
			mochaObj[bannerSliderId + 'SmallVideo'].on("beforechange", function() {
				bsCompare(this.curPage);
			});
		},
		bannerSliderType6Resize: function(bannerSliderId, videoTopBannerSliderW, videoTopBannerSliderMarginBottom, videoThumbsBannerSliderW, videoThumbsBannerSliderH, videoThumbsBannerSliderLiPaddingRight, psdW, videoProportion) {
			$(window).resize(function(event) {
				_fn.setBannerSliderType6Size(bannerSliderId, videoTopBannerSliderW, videoTopBannerSliderMarginBottom, videoThumbsBannerSliderW, videoThumbsBannerSliderH, videoThumbsBannerSliderLiPaddingRight, psdW, videoProportion);
			});
		},
		bannerSliderType6Init: function(bannerSliderArr) {
			if ((bannerSliderArr.constructor == Array) && (bannerSliderArr.length != 0)) {
				for (var i = 0; i < bannerSliderArr.length; i++) {
					if ((typeof bannerSliderArr[i] == 'object') && (bannerSliderArr[i] !== null) && (bannerSliderArr[i].constructor !== Array)) {

						var psdW = parseInt($('#' + bannerSliderArr[i].id).data('psdw')),
							videoTopBannerSliderW = parseInt($('#' + bannerSliderArr[i].id + ' .video-top').data('bannersliderw')),
							videoTopBannerSliderMarginBottom = parseInt($('#' + bannerSliderArr[i].id + ' .video-top').data('bannerslidermarginbottom')),
							videoThumbsBannerSliderW = parseInt($('#' + bannerSliderArr[i].id + ' .video-thumbs').data('bannersliderw')),
							videoThumbsBannerSliderH = parseInt($('#' + bannerSliderArr[i].id + ' .video-thumbs').data('bannersliderh')),
							videoThumbsBannerSliderLiPaddingRight = parseInt($('#' + bannerSliderArr[i].id + ' .video-thumbs').data('lipaddingright')),
							videoProportion = $('#' + bannerSliderArr[i].id).data('proportion');

						if ($('#' + bannerSliderArr[i].id + ' .video-thumbs .content li').length <= 0) {
							console = console || {
								error: function() {
									return;
								},
								log: function() {
									return;
								},
								info: function() {
									return;
								}
							};
							console.error(bannerSliderArr[i].id + ', the length of video-thumbs-li must be greater than 0 !');
						} else {
							mochaObj[bannerSliderArr[i].id + 'SmallVideo'] = new mo.Slide({
								target: $('#' + bannerSliderArr[i].id + ' .video-thumbs .content li'),
								playTo: 0,
								autoPlay: false,
								animateTime: 800,
								controller: false,
								lazy: true
							});

							//设置thumbs初始化样式
							_fn.setBannerSliderType6VideoThumbsStyle(bannerSliderArr[i].id);

							_fn.setBannerSliderType6Size(bannerSliderArr[i].id, videoTopBannerSliderW, videoTopBannerSliderMarginBottom, videoThumbsBannerSliderW, videoThumbsBannerSliderH, videoThumbsBannerSliderLiPaddingRight, psdW, videoProportion);

							_fn.bannerSliderType6Resize(bannerSliderArr[i].id, videoTopBannerSliderW, videoTopBannerSliderMarginBottom, videoThumbsBannerSliderW, videoThumbsBannerSliderH, videoThumbsBannerSliderLiPaddingRight, psdW, videoProportion);

							_fn.setBannerSliderType6VideoThumbsLazyload(bannerSliderArr[i].id);

							//初始化成功之后的回调
							if (typeof bannerSliderArr[i].callback == 'function') {
								bannerSliderArr[i].callback();
							}
						}

						//视频播放
						var video = new tvp.VideoInfo(),
							firstVid = $("#" + bannerSliderArr[i].id + " .video-thumbs .content>li").eq(0).data("vid"),
							firstPic = $("#" + bannerSliderArr[i].id + " .video-thumbs .content>li").eq(0).children("img").attr("src"); //视频中心第一个视频图片插入
						//console.log(video);
						video.setVid(firstVid);
						StarVideo(bannerSliderArr[i].id, false, firstPic);
						liClickVideo(bannerSliderArr[i].id);

						function liClickVideo(bannerSliderId) {
							$("#" + bannerSliderArr[i].id + " .video-thumbs .content>li").bind('touchstart', function(e) {
								e = e.changedTouches || e.touches;
								var startX = e[0].pageX;
								$(this).bind('touchend', function(e) {
									e = e.changedTouches || e.touches;
									if (Math.abs(e[0].pageX - startX) < 1) {
										$("#" + bannerSliderId + "_player").html('');
										var vid_id = $(this).data("vid");
										video.setVid(vid_id);
										//console.log(vid_id);
										StarVideo(bannerSliderId, true);
									}
								})
							});
						}

						//开始播放视频
						function StarVideo(bannerSliderId, auto, pic) {
							var player = new tvp.Player();
							var _pic = pic;
							player.create({
								width: "100%",
								height: "100%",
								video: video,
								modId: bannerSliderId + "_player",
								playerType: 'html5',
								isHtml5UseUI: true,
								isHtml5UseAirPlay: true,
								isHtml5ShowPosterOnChange: false,
								/*HTML5播放器切换视频的时候是否要显示Poster*/
								pic: _pic,
								autoplay: auto
							});
						}

					} else {
						console = console || {
							error: function() {
								return;
							},
							log: function() {
								return;
							},
							info: function() {
								return;
							}
						};
						console.error('bannerSlider param is error,must be an object type!');
					}

				}

			}
		}
	};

	var _api = {
		//banner-slider
		bannerSlider: function(bannerSliderType, bannerSliderArr) {
			switch (parseInt(bannerSliderType)) {
				case 1:
					_fn.bannerSliderType1Init(bannerSliderArr);
					break;
				case 2:
					_fn.bannerSliderType2Init(bannerSliderArr);
					break;
				case 3:
					_fn.bannerSliderType3Init(bannerSliderArr);
					break;
				case 4:
					_fn.bannerSliderType4Init(bannerSliderArr);
					break;
				case 5:
					_fn.bannerSliderType5Init(bannerSliderArr);
					break;
				case 6:
					_util.scriptLoader('http://imgcache.gtimg.cn/tencentvideo_v1/tvp/js/tvp.player_v2_zepto.js', function() {
						_fn.bannerSliderType6Init(bannerSliderArr);
					}, '');
					break;
				default:
					console = console || {
						error: function() {
							return;
						},
						log: function() {
							return;
						},
						info: function() {
							return;
						}
					};
					console.error('Param ' + parseInt(bannerSliderType) + ' is error,must be a number from 1 to 6!');
					break;
			}
		}
	};

	//对外API
	var _export = {
		version: "1.1",
		init: function(callback) {
			if (!window.Zepto) {
				_util.scriptLoader('http://ossweb-img.qq.com/images/js/zepto/zepto.min.js', function() {

					_util.scriptLoader('http://ossweb-img.qq.com/images/js/motion/slide.v1.0.min.js', function() {
						if (typeof callback == 'function') {
							callback(_api);
						}
					}, '');

				}, '');
			} else {

				_util.scriptLoader('http://ossweb-img.qq.com/images/js/motion/slide.v1.0.min.js', function() {
					if (typeof callback == 'function') {
						callback(_api);
					}
				}, '');

			}
		}
	};

	return _export;
}();