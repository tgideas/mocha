function ScrollMore( _obj ) {
    this.container = $(_obj.container);
    this.page = 1;
    this.totalPage = -1;
    this.loadData = _obj.scrollFunc || null;
    this.init();
}

ScrollMore.prototype = {
    init: function() {
        this.initScroll();
    },
    initScroll: function() {
        var self = this;
        var $container = self.container.children('.mocha-scroll-more-list');

        $container.scroll(_.throttle(function(e) {
            e.stopPropagation();
            var divHeight = $(this).height();
            var nScrollHeight = $(this)[0].scrollHeight;
            var nScrollTop = $(this)[0].scrollTop;
                
            if(nScrollTop + divHeight + 1 >= nScrollHeight) {
                self.page++;
                $container.append(self.loadData());
            }
        }, 500));
    }
}