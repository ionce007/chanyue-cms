;(function(window, jQuery) {
"use strict";
/*http://jslint.com/*/

	window.$m = (function(){
		return new Mk();
	}());

	function Mk() {
		this.version = "v0.1";
		this.name = "mkui";
		this.author = "明空";
		this.email = "867528315@qq.com";
		this.support = "IE9+,主流浏览器";

		//浏览器信息
		this.u = navigator.userAgent.toLowerCase();
		
	};

	
		
		//插件入口
		Mk.prototype.extend = function(){
			Mk[name] = cb ? cb : {}
		};
		
		//rem布局使用（可废弃）
		Mk.prototype.rem= function(w) {
			function h5() {
				//获取屏幕的宽度
				var width = document.documentElement.offsetWidth;
				//以标准的320计算  320/20 = 16px(网页默认字体大小),为了方便计算 16*0.625 = 10px; 1rem以10px为基本单位
				if(width >= 300 && width <= 640) {
					document.documentElement.style.fontSize = (width / 20) * 0.625 + 'px';
				} else {
					document.documentElement.style.fontSize = 12 + 'px';
				}
			};

			window.onorientationchange = window.onresize = h5;
			document.addEventListener('DOMContentLoaded', h5, false);
		};
		
		//rem图文混排，比较合适，单独拷贝放在头部
		Mk.prototype.scale= function(w) {
			function changeScale() {
				var targetW = 375;
				var scale = (window.screen.width / targetW).toFixed(2);
				var meta = document.createElement('meta');
				meta.name = "viewport";
				meta.content = "initial-scale=" + scale + ",minimum-scale=" + scale + "; maximum-scale=" + scale + ", user-scalable=no";
				document.head.appendChild(meta);
			}
			window.onorientationchange = window.onresize = changeScale;
			document.addEventListener('DOMContentLoaded', changeScale, false);
		};

		Mk.prototype.all= function(e) {
			return document.querySelectorAll(e);
		};

		Mk.prototype.id= function(e) {
			return document.getElementById(e);
		};
		
		Mk.prototype.className=function(e) {
			return document.getElementsByClassName(e);
		};

		Mk.prototype.click= function(e, cb) {
			for(var i = 0; i < e.length; i++) {
				e[i].addEventListener('click', function(ev) {
					cb && cb(ev);
				}, false);
			}
		};

		Mk.prototype.tap= function(e, cb) {
			for(var i = 0; i < e.length; i++) {
				e[i].addEventListener('touchend', function(ev) {
					ev.preventDefault();
					cb && cb(ev);
				}, false);
			};
		};
		
		//获取网址不带参数
		Mk.prototype.parseUrl= function(str) {
			var str = str ? str : window.location.href;
			if(str.indexOf('?') >= 0) {
				str = str.substring(0, str.indexOf('?'))
			}
			return str;
		};

		//获取url中的参数值
		Mk.prototype.getParams= function(name, url) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			var r = url ? url.substring(url.indexOf('?') + 1).match(reg) : window.location.search.substr(1).match(reg);
			if(r != null) return r[2];
			return null;
		};

		//来源域名
		Mk.prototype.preDomain= function() {
			var preUrl = document.referrer;
			var _url = preUrl.replace(/http:\/\/|https:\/\//, '');
			return _url.substr(0, _url.indexOf('/'));
		};

		//当前域名
		Mk.prototype.domain= function() {
			var _url = location.href.replace(/http:\/\/|https:\/\//, '');
			return _url.substr(0, _url.indexOf('/'));
		};

		//返回上一页
		Mk.prototype.back= function() {
			window.location.href = (window.history.go(-1) || document.referrer || window.history.back());
			return false;
		};

		//判断是否是手机
		Mk.prototype.isMobile= function() {
			return this.u.indexOf("mobile") == -1 ? false : true;
		};

		//判断是否是iphone
		Mk.prototype.isIOS= function() {
			return this.u.indexOf("iphone") == -1 || this.u.indexOf('mac') == -1 ? false : true;
		};

		//判断是否是安卓
		Mk.prototype.isAndroid= function() {
			return this.u.indexOf("android") == -1 || this.u.indexOf('linux') == -1 ? false : true;
		};

		//判断是否是微信
		Mk.prototype.isWx= function() {
			return this.u.indexOf("micromessenger") == -1 ? false : true;
		};

		//判断是否是手机号
		Mk.prototype.isTel= function(num) {
			return /^(13[\d]{9}|15[\d]{9}|17[6-8][\d]{8}|14[57][\d]{8}|18[\d]{9})$/.test(num) ? true : false;
		};

		//简易判断手机号
		Mk.prototype.isLightTel= function(num) {
			return /^(1[\d]{10})$/.test(num) ? true : false;
		};

		//判断是否是邮箱
		Mk.prototype.isEmail= function(str) {
			return /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i.test(str) ? true : false;
		};

		//判断是否是数字
		Mk.prototype.isNumber= function(str) {
			return /^[0-9]*$/.test(str) ? true : false
		};

		//判断是否有这个字符窜
		Mk.prototype.hasString= function(all, str) {
			return all.indexOf(str) == -1 ? false : true;
		};

		//判断是否存在特殊字符
		Mk.prototype.isSpecialString= function(str) {
			return /[^\u4E00-\u9FA5\d\w \(\)\（\）\.]/g.test(str) ? true : false;
		};

		//判断是否是大于0的正整数
		Mk.prototype.isGt0= function(num) {
			return /^[0-9]+$/.test(num) ? true : false;
		};

		//判断是否是身份证号
		Mk.prototype.isIdCard= function(idCard) {
			var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1];
			var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2];
			idCard = idCard.replace(/ /g, "").replace(/(^\s*)|(\s*$)/g, "");
			/**
			 * 验证18位数身份证号码中的生日是否是有效生日
			 * @param idCard 18位书身份证字符串
			 * @return
			 */
			function isTrueValidateCodeBy18IdCard(a_idCard) {
				var sum = 0; // 声明加权求和变量
				if(a_idCard[17].toLowerCase() == 'x') {
					a_idCard[17] = 10; // 将最后位为x的验证码替换为10方便后续操作
				}
				for(var i = 0; i < 17; i++) {
					sum += Wi[i] * a_idCard[i]; // 加权求和
				}
				var valCodePosition = sum % 11; // 得到验证码所位置
				if(a_idCard[17] == ValideCode[valCodePosition]) {
					return true;
				} else {
					return false;
				}
			};

			function isValidityBrithBy18IdCard(idCard18) {
				var year = idCard18.substring(6, 10);
				var month = idCard18.substring(10, 12);
				var day = idCard18.substring(12, 14);
				var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
				var tempMonth = "",
					tempDate = "";

				if(temp_date.getMonth() + 1 < 10) {
					tempMonth = "0" + (temp_date.getMonth() + 1);
				} else {
					tempMonth = temp_date.getMonth() + 1;
				}
				if(temp_date.getDate() < 10) {
					tempDate = "0" + temp_date.getDate();
				} else {
					tempDate = temp_date.getDate()
				}

				if(temp_date.getFullYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
					return {
						isValidityBrith: false,
						date: temp_date.getFullYear() + "-" + tempMonth + "-" + tempDate
					};
				} else {
					return {
						isValidityBrith: true,
						date: temp_date.getFullYear() + "-" + tempMonth + "-" + tempDate
					};
				}
			}
			/**
			 * 验证15位数身份证号码中的生日是否是有效生日
			 * @param idCard15 15位书身份证字符串
			 * @return
			 */
			function isValidityBrithBy15IdCard(idCard15) {
				var year = idCard15.substring(6, 8);
				var month = idCard15.substring(8, 10);
				var day = idCard15.substring(10, 12);
				var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));

				var tempMonth = "",
					tempDate = "";

				if(temp_date.getMonth() + 1 < 10) {
					tempMonth = "0" + (temp_date.getMonth() + 1);
				} else {
					tempMonth = temp_date.getMonth() + 1;
				}
				if(temp_date.getDate() < 10) {
					tempDate = "0" + temp_date.getDate();
				} else {
					tempDate = temp_date.getDate()
				}

				if(temp_date.getYear() != parseFloat(year) || temp_date.getMonth() != parseFloat(month) - 1 || temp_date.getDate() != parseFloat(day)) {
					return {
						isValidityBrith: false,
						date: temp_date.getFullYear() + "-" + tempMonth + "-" + tempDate
					};
				} else {
					return {
						isValidityBrith: true,
						date: temp_date.getFullYear() + "-" + tempMonth + "-" + tempDate
					};
				}
			};

			if(idCard.length == 15) {
				return isValidityBrithBy15IdCard(idCard);
			} else if(idCard.length == 18) {
				var a_idCard = idCard.split(""); // 得到身份证数组
				if(isValidityBrithBy18IdCard(idCard) && isTrueValidateCodeBy18IdCard(a_idCard)) {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
			return /^[0-9]+$/.test(idCard) ? true : false;
		};

		//设置cookie
		Mk.prototype.setCookie= function(name, value, time, domain) {
			
			var oDate = new Date();
			oDate.setTime(oDate.getTime() + (1000*60*60*time || 1000*60*60*0.5));
		
			if(domain) {
				document.cookie = name + '=' + value + ';expires=' + oDate.toUTCString() + ';path=/' + ';domain=' + domain;
				return;
			}
			document.cookie = name + '=' + value + ';expires=' + oDate.toUTCString()  + ';path=/';
		};

		//获取cookie
		Mk.prototype.getCookie= function(name) {
			var arr = document.cookie.split('; ');
			for(var i = 0; i < arr.length; i++) {
				var arr2 = arr[i].split('=');
				if(arr2[0] == name) {
					return arr2[1];
				}
			}
			return '';
		};

		//删除cookie
		Mk.prototype.delCookie= function(name) {
			this.setCookie(name, 1, -1);
		};

		//设置 永久存储
		Mk.prototype.setLocal= function(name, value) {
			localStorage.setItem(name, value);
		};

		//获取 永久存储
		Mk.prototype.getLocal= function(name) {
			return localStorage.getItem(name);
		};

		//删除 永久存储
		Mk.prototype.delLocal= function(name) {
			localStorage.removeItem(name);
		};

		//判断 永久存储
		Mk.prototype.hasLocal= function(name) {
			return this.getLocal(name) ? true : false;
		};

		//获取 临时存储
		Mk.prototype.getSession= function(name) {
			return sessionStorage.getItem(name);
		};

		//设置 临时存储
		Mk.prototype.setSession= function(name, value) {
			sessionStorage.setItem(name, value);
		};

		//删除 临时存储
		Mk.prototype.delSession= function(name) {
			sessionStorage.removeItem(name);
		};

		//判断 临时存储
		Mk.prototype.hasSession= function(name) {
			return this.getSession(name) ? true : false;
		};

		//添加历史记录
		Mk.prototype.addHistory= function(name, title, url) {
			if(history.state == null) {
				window.history.pushState({
					page: name
				}, title, url);
			}
		};

		//替换历史记录
		Mk.prototype.replaceHistory= function(name, title, url) {
			if(history.state == null) {
				window.history.replaceState({
					page: name
				}, title, url);
			}
		};

		Mk.prototype.goBack= function() {
			window.location.href = (window.history.go(-1) || document.referrer || window.back() || window.history.back());
			return false;
		};
		
			//小于9补0
		Mk.prototype.parseNumber=function(num) {
			return(num > 9) ? num : '0' + num;
		};



		/**
		 * @description 用来计算时间差的毫秒数，eg:剩余1天20小时30分钟10秒
		 * @param {Object} time 毫秒
		 */
		Mk.prototype.countDown=function(time, cb) {
			var _this = this;
			var times = new Date().getTime() - time;
			var surplus = {
				"d": Math.floor(times / 1000 / 60 / 60 / 24),
				"h": Math.floor(times / 1000 / 60 / 60 % 24),
				"min": _this.parseNumber(Math.floor(times / 1000 / 60 % 60)),
				"s": _this.parseNumber(Math.floor(times / 1000 % 60))
			}
			cb && cb(surplus);
		};

		/**
		 * 获取今天和后五天的日期和时间和星期
		 * @param {Object} iday
		 */
		Mk.prototype.dateWeekAfter = function(iday) {
			var _this = this;
			var oDate = new Date();
			oDate.setDate(oDate.getDate() + iday);
	
			var dayNames = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
			var dateWeek = {
				week: dayNames[oDate.getDay()],
				year: oDate.getFullYear(),
				month: _this.parseZero(oDate.getMonth() + 1),
				day: _this.parseZero(oDate.getDate()),
				hour: _this.parseZero(oDate.getHours()),
				minute: _this.parseZero(oDate.getMinutes()),
				second: _this.parseZero(oDate.getSeconds())
			};
	
			return dateWeek;
		};
		//性能
		Mk.prototype.performance=function() {
			if(performance || window.webkitPerformance) {
				var every = performance.getEntries();
				var time = performance.timing || window.webkitPerformance.timing;
				var m = performance.memory;
				var navigation = performance.navigation;
				var pageTime = {
					"占用内存": (performance.memory.usedJSHeapSize / (1024 * 1024)).toFixed(2) + 'm',
					"可使用内存": (performance.memory.totalJSHeapSize / (1024 * 1024)).toFixed(2) + 'm',
					"内存限制大小": (performance.memory.jsHeapSizeLimit / (1024 * 1024)).toFixed(2) + 'm',
					"重定向次数": navigation.redirectCount,
					"CDN查询耗时": ((time.domainLookupEnd - time.domainLookupStart) / 1000).toFixed(3) + 's',
					"TCP链接耗时": ((time.connectEnd - time.connectStart) / 1000).toFixed(3) + 's',
					"response相应耗时：": ((time.responseEnd - time.responseStart) / 1000).toFixed(3) + 's',
					"白屏时间": ((time.responseStart - time.navigationStart) / 1000).toFixed(3) + 's',
					"DOM结构解析耗时": ((time.domComplete - time.domLoading) / 1000).toFixed(3) + 's',
					"DOM资源加载耗时": ((time.domComplete - time.domInteractive) / 1000).toFixed(3) + 's',
					"页面加载完毕总时间": ((time.loadEventEnd - time.navigationStart) / 1000).toFixed(3) + 's'
				}
				return pageTime;
			}
			return false;
		};

		Mk.prototype.guid = function(){
			  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
			    return v.toString(16);
			  });
		};

	//UI组件
	$m.layer = function(opt, num, cb) {
		var str = '';
		str += '<section class="m-mask bg-opcity-black">';
		str += '<div class="m-mask-div m-alert bg-fff" style="width:' + (opt.width || 23.5) + 'rem;height:' + (opt.height || 13.8) + 'rem;">';
		if(opt.title) {
			str += '<p class="m-alert-title">' + opt.title + '</p>';
		}
		str += '<div class="m-alert-cont">';
		if(opt.text) {
			str += '<p class="text-c">' + opt.text + '</p>';
		}
		str += '</div>';
		str += '<footer class="m-btn-alert rows">';
		if(num && num == 1) {
			str += '<span class="btn-block btn-single col-6 btn-cancel ' + (opt.btnBg || 'bg-green') + '">' + (opt.btn || "确定") + '</span>';
		} else {
			str += '<span class="btn col-6 btn-cancel ' + (opt.btnlBg || 'bg-f8f8f8') + '">' + (opt.btnl || "取消") + '</span>';
			str += '<span class="btn col-6 btn-sure ' + (opt.btnrBg || 'bg-green') + '">' + (opt.btnr || "确定") + '</span>';
		}
		str += '</footer>';
		str += '</div>';
		str += '</section>';
		$('body').append(str);
		cb && cb();
	};

	//提示框
	$m.alert = function(opt, cb) {
		$m.layer(opt, 1, cb);
	};

	//确认框
	$m.confirm = function(opt, cb) {
		$m.layer(opt, 2, cb);
	};

	//删除遮罩
	$m.remove = function() {
		$('.m-mask') && $('.m-mask').remove();
	};

	//加载
	$m.showLoading = function(img) {
		var str = '';
		str += '<section class="m-mask bg-opcity-white">';
		str += '<div class="m-mask-div m-loading">';
		if(arguments.length != 0) {
			str += '<span class="fl mr-2"><img style="width:26px;" src="' + img + '"/></span>';
		}
		str += '<span>加载中...</span>';
		str += '</div>';
		str += '</section>';
		$('body').append(str);
	};

	//隐藏加载
	$m.hideLoading = function() {
		this.remove();
	};

	//提示
	$m.showToast = function(txt) {
		var str = '';
		str += '<div class="m-mask">';
		str += '<div class="m-mask-div">';
		str += '<div class="m-toast bg-opcity-black">' + txt;
		str += '</div>';
		str += '</div>';
		str += '</div>';
		$('body').append(str);
		
	};

	//多行提示 小圆角
	$m.showToastBox = function(txt) {
		var str = '';
		str += '<div class="m-mask">';
		str += '<div class="m-mask-div">';
		str += '<div class="m-toast-box bg-opcity-black">' + txt;
		str += '</div>';
		str += '</div>';
		str += '</div>';
		$('body').append(str);
	};

	//删除提示
	$m.hideTost = function(time) {
		$('.m-mask') && setTimeout(function() {
			$('.m-mask').remove()
		}, (time || 1000));
	};

	//吸顶功能
	$m.skipUp = function(ele) {
		var skipnav = ele ? $(ele) : $('.m-skip-nav');
		var sTop = skipnav.offset().top;
		$(window).on("scroll", function() {
			var st = $(this).scrollTop();
			if(st > sTop) {
				skipnav.addClass('fixed-top');
			} else {
				skipnav.removeClass('fixed-top');
			}
		});
	};

	//滑动内容 相应导航改变
	$m.scrollContentChangeNav = function(arr) {

		var hasEle = true;

		for(var i = 0; i < arr.length; i++) {
			if($(arr[i]).length == 0) {
				hasEle = false;
			}
		}

		if(hasEle == false) {
			return;
		}

		//存储 每个样式的距离顶部的高度和样式名称
		var endArr = [];

		var st = $(window).scrollTop();

		//计算 每个样式的距离顶部的高度和样式名称
		function everyArrTop(arr) {
			for(var i = 0, items, t; i < arr.length; i++) {
				items = arr[i];
				t = $(items).offset().top;
				endArr.push({
					"className": $(items).selector,
					"offsetTop": t
				})
			}
		}

		//判断 每个导航对应的滚动的距离，并且添加样式
		function changeNav(st, endArr) {
			//默认给第一个加上样式
			if(st < endArr[0].offsetTop) {
				$('[data-name="' + endArr[0].className.substring(1) + '"]').addClass('current').siblings().removeClass('current');
			}

			for(var j = 0; j < endArr.length; j++) {
				if(st >= endArr[j].offsetTop - 35) {
					$('[data-name="' + endArr[j].className.substring(1) + '"]').addClass('current').siblings().removeClass('current');
				}
			}

		}

		//页面load调用 计算每个数组中的scrollTop值
		everyArrTop(arr);

		//页面load调用  改变导航样式
		changeNav(st, endArr);

		//当滚动的时候 监听执行
		$(window).on('scroll', function() {
			st = $(this).scrollTop();
			everyArrTop(arr);
			changeNav(st, endArr);
		});

	};

	$m.clickNavToContent = function(e) {
		var targetEle = $('.' + e.attr('data-name'));
		$('html,body').animate({
			scrollTop: targetEle.offset().top - 35
		}, 500);
	};

	//返回顶部
	$m.goTop = function(opt) {

		var content = {

			speed: opt.speed || 300,

			imgUrl: opt.url,

			addGoTop: function() {

				var str = '<section class="m-gotop pos-f none" style="right:' + (opt.right || 10) + 'px;bottom:' + (opt.bottom || 20) + 'px;"><span class="m-gotop-img"><img src="' + this.imgUrl + '" alt="" /></span></section>';
				$('body').append(str);

			},

			scrollMove: function() {

				var st = $(this).scrollTop();
				if(st > 300) {
					$('.m-gotop').show();
				} else {
					$('.m-gotop').hide();
				}

			},

			top: function() {
				var _this = this;
				$('html,body').animate({
					scrollTop: 0
				}, _this.speed);
			},

			_event: function() {

				var _this = this;
				$(window).on("scroll", _this.scrollMove);
				$('.m-gotop').on('click', _this.top)

			},

			init: function() {
				this.addGoTop();
				this._event();
			}
		};

		content.init();

	};


	//滑动翻页
	$m.touchNextPage = function(currentpage, totalPageNo, cb) {
		//滚动的高度
		var height = $(window).scrollTop() + $(window).height();
		//滑动到最底部还有一个像素的时候，加载数据
		if(height >= this.docHeight - 1 && currentpage != totalPageNo && totalPageNo != 0) {
			//currentpage++
			cb && cb();
		}
	};
	
	$m.lazyLoad = function(){
		//也可使用
		//针对firefox的load事件
        window.addEventListener("DOMContentLoaded", lazyLoadImages);
        //通用load事件
        window.addEventListener("load", lazyLoadImages);
        //浏览器窗口调整
        window.addEventListener("resize", lazyLoadImages);
        //页面滚动事件
        window.addEventListener("scroll", lazyLoadImages);

        function lazyLoadImages() {

            var images = document.querySelectorAll("img[data-src]");
            //遍历所有的img标签
            //[].forEach.call(...)是Array.prototype.forEach.call(...)简写
            [].forEach.call(images, function(item) {
                //item是images数组对象，即是一个个img标签
                if(elementInViewport(item)) {
                    //将data-src替换src属性
                    item.setAttribute("src", item.getAttribute("data-src"));
                    item.removeAttribute("data-src")
                }
            })

            if(images.length == 0) {
                window.removeEventListener("DOMContentLoaded", lazyLoadImages);
                window.removeEventListener("load", lazyLoadImages);
                window.removeEventListener("resize", lazyLoadImages);
                window.removeEventListener("scroll", lazyLoadImages);
            }

        }
        //元素
        function elementInViewport(el) {
            //获取DOMRect对象边框相对于浏览器的位置
            var rect = el.getBoundingClientRect();
            //返回DOMRect对象上下左右的位置坐标
            return(
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
	};

	
	//获取经纬度 城市、地区,需引入百度地图api <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=Ij4rlelmIwh3UhC64cjwFZE9"></script>
	$m.bdAddr = function(success, failure) {
		var location = new BMap.Geolocation();
		location.getCurrentPosition(function(r) {
			if(this.getStatus() == BMAP_STATUS_SUCCESS) {
				var point = new BMap.Point(r.point.lng, r.point.lat);
				var gc = new BMap.Geocoder();
				gc.getLocation(point, function(rs) {
					var addComp = rs.addressComponents;
					var addr = {
						'province': addComp.province,
						'city': addComp.city,
						'district': addComp.district,
						'street': addComp.street,
						'streetNumber': addComp.streetNumber,
						'lng': r.point.lng,
						'lat': r.point.lat
					};
					success && success(addr);
				});
			} else {
				failure && failure();
				console.error(this.getStats());
			}
		}, {
			enableHighAccuracy: true
		});
	};
	
	/**对Date的扩展，将 Date 转化为指定格式的String * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
	    可以用 1-2 个占位符 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) * eg: * (new
	    Date()).pattern("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423      
	 * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04      
	 * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04      
	 * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04      
	 * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18      
	 */        
	Date.prototype.format=function(fmt) {         
	    var o = {         
	    "M+" : this.getMonth()+1, //月份         
	    "d+" : this.getDate(), //日         
	    "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时         
	    "H+" : this.getHours(), //小时         
	    "m+" : this.getMinutes(), //分         
	    "s+" : this.getSeconds(), //秒         
	    "q+" : Math.floor((this.getMonth()+3)/3), //季度         
	    "S" : this.getMilliseconds() //毫秒         
	    };         
	    var week = {         
	    "0" : "/u65e5",         
	    "1" : "/u4e00",         
	    "2" : "/u4e8c",         
	    "3" : "/u4e09",         
	    "4" : "/u56db",         
	    "5" : "/u4e94",         
	    "6" : "/u516d"        
	    };         
	    if(/(y+)/.test(fmt)){         
	        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));         
	    }         
	    if(/(E+)/.test(fmt)){         
	        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);         
	    }         
	    for(var k in o){         
	        if(new RegExp("("+ k +")").test(fmt)){         
	            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
	        }         
	    }         
	    return fmt;         
	}       
     
	Date.prototype.time = function(time){
			var addPreZero=(num)=>{
				return (num > 9) ? num : '0' + num;
			};
			let _date = time?time:new Date();
			let _week = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
			let year = _date.getFullYear();
			let month = addPreZero(_date.getMonth() + 1);
			let date = addPreZero(_date.getDate());
			let hours=addPreZero(_date.getHours());
			let minute=addPreZero(_date.getMinutes());
			let second=addPreZero(_date.getSeconds());
	
			return {
				year : year,
				month :month,
				date :date,
				week:_week[_date.getDay()],
				hours:hours,
				minute:minute,
				second:second,
				millisecond:_date.getMilliseconds(),
				time:_date.getTime(),
				default:year + '-' + month + '-' + date +' '+hours+':'+minute+':'+second
			}
	
		
	}

})(window, jQuery);
