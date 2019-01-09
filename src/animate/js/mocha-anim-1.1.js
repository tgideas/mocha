// dialog
function MochaDialog() {
  this.effects = [
    'fade',
    'scale',
    'newspaper',
    'slide-in-top',
    'slide-in-left',
    'slide-in-right',
    'slide-in-bottom',
    'expand-horiz',
    'expand-vert',
    'sticky-top',
    'sticky-bottom',
    'rotate-top',
    'rotate-bottom',
    'elastic-flip',
    'bounce-zoom'
  ];
  this.init();
}

MochaDialog.prototype = {
  init: function() {
    var self = this;

    $('a[data-toggle=modal]').on('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      
      var effect = $(this).attr('data-effect');
      $('.mocha-modal').addClass(effect).addClass('show').removeClass('hiding');
      $('body').addClass('modal-open');
      $('body').addClass('modal-' + effect);
      
      var h = $('.modal-dialog').height();
      $('.modal-dialog').css({
        'margin-top': '-' + parseInt(h / 2) + 'px'
      });
    });
    
    $('.mocha-modal').on('click', function(e) {
      $('.mocha-modal').removeClass('show').addClass('hiding');
      
      setTimeout(function() {
        for(var i = 0; i < self.effects.length; i++) {
          $('.mocha-modal').removeClass(self.effects[i]);
          $('body').removeClass('modal-' + self.effects[i]);
        }
        $('.mocha-modal').removeClass('hiding');
        $('body').removeClass('modal-open');
      }, 250);
    });
  }
}

//nav nav-slide
function MochaNavSlide() {
  this.init();
}

MochaNavSlide.prototype = {
  init: function() {
    $('.mocha-nav').addClass('mocha-nav-transition');
    this.bind();
  },
  bind: function() {
    $(".mocha-nav-slide").bind("touchstart", function(e) {
      if ($(".mocha-nav-list-open").length) {
          $(".mocha-nav-list").removeClass("mocha-nav-list-open");
          $(".mocha-nav-slide").removeClass("mocha-nav-slide-close");
          $("body").unbind("touchmove", false);
          $(".mocha-nav-box").removeClass("mocha-nav-box-big");
      } else {
          $(".mocha-nav-list").addClass("mocha-nav-list-open");
          $(".mocha-nav-slide").addClass("mocha-nav-slide-close");
          $("body").bind("touchmove", false);
          $(".mocha-nav-box").addClass("mocha-nav-box-big");
      }
      e.preventDefault(); 
    }, false);

    $("body").bind("touchend", function() {
      if (window.scrollY >= 90) {
          $(".mocha-navigation-scheme4").addClass("mocha-nav-fixed");
      } else {
          $(".mocha-nav-fixed").removeClass("mocha-nav-fixed");
      }
    }, false);
  }
}

//nav nav-poker
function MochaNavPoker() {
  this.init();
}

MochaNavPoker.prototype = {
  init: function() {
    this.bind();
  },
  bind: function() {
    $(".mocha-nav-slide").bind("touchstart", function(e) {
      if ($(".mocha-nav-content-open").length) {
          $(".mocha-navigation-scheme2-content").removeClass("mocha-nav-content-open");
          $(".mocha-nav-slide").removeClass("mocha-nav-slide-close");
          $("body").unbind("touchmove", false);
          $(".mocha-nav-box").removeClass("mocha-nav-box-big");
      } else {
          $(".mocha-navigation-scheme2-content").addClass("mocha-nav-content-open");
          $(".mocha-nav-slide").addClass("mocha-nav-slide-close");
          $("body").bind("touchmove", false);
          $(".mocha-nav-box").addClass("mocha-nav-box-big");
      }
      e.preventDefault(); 
    }, false);
  }
}

//search search-anim1
function MochaSearch() {
  this.init();
}

MochaSearch.prototype = {
  init: function() {
    this.bind();
  },
  bind: function() {
    function expand() {
      $(".search").toggleClass("close");
      $(".input").toggleClass("square");
      if ($('.search').hasClass('close')) {
        $('input').focus();
      } else {
        $('input').blur();
      }
    }
    $('.mocha-search-bar-anim1-button').on('click', expand);
  }
}

//tab
function MochaTab() {
  this.init();
}

MochaTab.prototype = {
  init: function() {
    this.bind();
  },
  bind: function() {
    $('.mocha-tab-controller').on('click', '.mocha-tab-controller-item', function() {
      var $this = $(this),
        index = $(this).index(),
        $parent = $this.closest('.mocha-tab'),
        $content = $parent.children('.mocha-tab-content');
    
      $(this).addClass('current-tab').siblings().removeClass('current-tab');
      $content.find('.mocha-tab-content-item').eq(index).addClass('tab-active').siblings().removeClass('tab-active');
    });
  }
}