function NavSlide( _obj ) {
    this.Page = 1;//初始化页数
    this.PageSize = 10;//初始化每页显示多少条
    this.variable = _obj.variable || true;
    this.totalPage = 1;

    this.container = _obj.container;
    this.slide;
    this.index = 0;
    this.prevIndex = 0;
    this.navLength = $(this.container).find('.slide-nav li').length;

    this.step = 0;
    
    this.init();
}

NavSlide.prototype = {
    init: function() {
        var self = this;
        self.initSwiper();
    },
    initSwiper: function() {
        var self = this;
        var swiperContainer = $(self.container + ' .swiper-container');
        var controllerContainer = $(self.container + ' .mocha-nav-slide-controller');
        self.slide = new Swiper(swiperContainer, {
            onInit: function(swiper) {
                self.index = 0;
                var $item = controllerContainer.find('li').eq(self.index);
                $item.addClass('current').siblings().removeClass('current');
                
                $(self.container + ' .mocha-nav-slide-controller-list').on('click', 'li', function() {
                    self.index = $(this).index();
                    swiper.slideTo(self.index);
                });
            },
            onSlideChangeStart: function(swiper) {
                self.index = swiper.activeIndex;
                self.prevIndex = swiper.previousIndex;

                var $navLi = controllerContainer.find('li').eq(self.index);
                $navLi.addClass('current').siblings().removeClass('current');
          
                self.transformNav();
            }
        })
    },
    transformNav: function() {
        var self = this;

        var $container = $(self.container).find('.mocha-nav-slide-controller');
        var containerWidth = $container.width();
        var windowMargin = Math.ceil(($(window).width() - containerWidth) / 2);
        var navWidth = $container.children('ul').width();
        var $list =  $container.find('li');
        
        var $curItem = $list.eq(self.index),
            curOffsetLeft = $curItem.get(0).offsetLeft,
            itemWidth = parseInt($curItem.width());
        
        var scrollLeft = $container.scrollLeft();

        var previousWidth = 0;
        var diff = curOffsetLeft + itemWidth - scrollLeft;
        var inWindow = diff > 0 && diff < containerWidth ? true : false;
        var curWidth = parseInt($curItem.width()) + parseInt($curItem.css('padding-right')) + parseInt($curItem.css('padding-left'));

        if( !inWindow ) {
            if( diff < 0 ) {
                $container.scrollLeft(curOffsetLeft - windowMargin);
            }else if( diff > containerWidth ) {
                $container.scrollLeft(curOffsetLeft - containerWidth + curWidth);
            }
        }
    }
}