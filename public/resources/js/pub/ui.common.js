
var device_info;

;(function(win, doc){
  'use strict';

  var global = '$plugins';
  var namespace = 'netiveUI.plugins';
  var IS_PLAY_AUDIO = false;
  var btnClear = document.querySelectorAll('.btn_delete');
    btnClear.forEach(function(btn){
    btn.addEventListener('click', function(){
      btn.parentNode.querySelector('input').value = "";
    })
  })
  var clearInput = function(obj) {
    obj.parentNode.querySelector('input').value = ""
  }

  //global namespace
  if (!!win[global]) {
    throw new Error("already exists global!> " + global);
  } else {
    win[global] = createNameSpace(namespace, {
      uiNameSpace: function (identifier, module) {
        return createNameSpace(identifier, module);
      }
    });
  }
  function createNameSpace(identifier, module) {
    var name = identifier.split('.'),
              w = win,
              p;

    if (!!identifier) {
      for (var i = 0, len = name.length; i < len; i += 1) {
        (!w[name[i]]) ? (i === 0) ? w[name[i]] = {} : w[name[i]] = {} : '';
        w = w[name[i]];
      }
    }

    if (!!module) {
      for (p in module) {
        if (!w[p]) {
          w[p] = module[p];
        } else {
          throw new Error("module already exists! >> " + p);
        }
      }
    }
    return w;
  }

  netiveUI.plugins = {
    //accodian
    accodian: function() {
      $('.acco_list_wrap').each(function() {
        var $target = $(this),
            $lists = $target.find('.item_detail, .dep_list'),
            $item = $target.find('.btn_acco_more, .btn_dep_more');
        $item.on('click',function() {
          var $this = $(this),
              $itemView = $this.parent().next();
          $lists.each(function(i) {
            if($item.index($this) !== i) { // 클릭한 버튼 인덱스와 다른 버튼, 상세들 감추기
              $item.eq(i).removeClass('on');
              $lists.eq(i).slideUp(300);
            }
          });
          if($this.hasClass('on')) {
            $this.removeClass('on');
            $itemView.slideUp(300);
            $this.find('span').text('리스트 펼침');
          } else {
            $this.addClass('on');
            $itemView.slideDown(300);
            $this.find('span').text('리스트 닫힘');
          }
        });
      });
      // 기본 아코디언
      $('.acco_list_wrap').each(function() {
        var $target = $(this),
        $item = $target.find('.acco_btn');

        $item.on('click',function() {
          var $this = $(this),
              $itemView = $this.parents(".acco_item_head").next(),
              $accoLine = $this.parents(".acco_item_head");

          if($this.hasClass('on')) {
              $this.removeClass('on');
              setTimeout(function() {
                $this.parents('.acco_list_wrap.type_coupon .acco_item_head');
              }, 300);
              $accoLine.removeClass('active');
              $itemView.slideUp(300);
              $this.find('span').text('리스트 펼침');
          } else {
              $this.addClass('on');
              $this.parents('.acco_list_wrap.type_coupon .acco_item_head');
              $accoLine.addClass('active');
              $itemView.slideDown(300);
              $this.find('span').text('리스트 닫힘');
          }
        });
      });
      
      $('.acco_list_slide').each(function () {
        var $item = $(this).find('.acco_btn');

        $item.on('click', function () {
          var swiper = new Swiper(".type_check_slide", {
            slidesPerView: "auto",
            spaceBetween: 11,
            observer: true,
            observeParents: true
          });
        });
      });

      // 텍스트 없는 아코디언
      $('.acco_list_wrap').each(function() {
      var $target = $(this),
        $item = $target.find('.btn_txt');

        $item.on('click',function() {
          var $this = $(this),
            $itemView = $this.parents(".acco_item_head").next();
          if($this.hasClass('on')) {
            $this.removeClass('on');
            $itemView.slideUp(300);
          } else {
            $this.addClass('on');
            $itemView.slideDown(300);
          }
        });
      });
    },
    //tabmenu
    tabMenu: function() {
      $('.tab_menu').each(function(){
        var $this = $(this),
            $tab = $this.find('li.active'),
            $link = $tab.find('a'),
            $panel = $($link.attr('href'));

        $this.on('click', '.tab_control', function(e) {
          e.preventDefault();
          var $link = $(this),
              id = this.hash;

          if (id && !$link.is('.active')) {
            $panel.removeClass('active');
            $tab.removeClass('active');

            $panel = $(id).addClass('active');
            $tab = $link.parent().addClass('active');
          }
        });
      });
    },
    // 상단으로 이동 버튼
    topMove: function() {
      var srollTop = $('.scroll_nav_item .btn_top'),
          docHeight = $(document).height(),
          winHeight = $(window).height();
      $(window).scroll(function () {
        //스크롤 마지막에 도달했을 시
        if ($(window).scrollTop() + winHeight >= docHeight) {
          srollTop.fadeIn(); //스크롤탑 버튼
          srollTop.addClass('bottom')

          // navItem.fadeOut()
          // footerTxtbox.fadeOut()
        }
        else {
          //20210819 srollTop.fadeOut(); 삭제
          srollTop.removeClass('bottom')

          // navItem.fadeIn();
          // footerTxtbox.fadeIn()
        }


      });
      //scrolltop btn
      $(".scroll_nav_item .btn_top").click(function (){
          $('html, body').stop().animate({
              scrollTop : 0
          }, 200);
          $('.health_footer').removeClass('scroll');
          return false;
      });
    },
    //main modal
    mainModal: function() {
      let modalPopClose = $('.modal_wrap').find('.modal_close');
      // if( device_info === 'PC') {  /* 20240603 device구분 주석 처리 */
        $('#mainModal').css('display', '');
      // }                            /* 20240603 device구분 주석 처리 */
      modalPopClose.on('click',function() {
        $(this).parents('.modal_wrap').addClass('hidden');
          $("body").css("overflow", "visible");
      })
    },
    //pop alert
    popAlert: function(v) {
      /*
        알럿과 레이어 팝업 형태를 같이 사용함
        - 기본적으로 상하 중간에 떠야함
        - 내용이 많아져서 화면을 넘치는 경우가 생길 수 있음
          : 팝업의 최대 높이를 화면 높이의 90%로 설정
      */
      var $t = $(v),                        // 팝업
          $btnClose = $t.find('.ui-close'), // 팝업 내 닫기 버튼
          $tC = $t.children('.inner'),
          wH = window.innerHeight,          // 화면 높이값
          $body = $('body');

      $body.height(wH).css('overflow','hidden');
      $tC.css({'top': '50%'});
      $t.show();

      var $tH = $tC.innerHeight(),           // 팝업 높이값
          $half = $tH/2;

      if($tH >= wH * 0.9) {
        $tC.css({'height': wH * 0.9, 'overflow-y': 'auto'});
        $tH = $tC.innerHeight();
        $half = $tH/2;
      }

      $tC.css({'margin-top': '-' + $half + 'px'});
      setTimeout(function() {
        $t.addClass('actived');
      }, 150);

      $btnClose.off().on('click', function() {
        $t.removeClass('actived');
        $body.height('auto').css('overflow','visible');
        setTimeout(function() {
          $t.hide(300);
          $tC.removeAttr('style');
        }, 300);
      });
    },
    //pop toast
    popToast: function(v) {
      var $t = $(v),
          $btnClose = $t.find('.ui-close');

      $t.show().addClass('actived');

      $btnClose.off().on('click', function() {
        $t.removeClass('actived');
        setTimeout(function() {
          $t.hide(300);
        }, 300);
      });
    },
    popFull: function(v) {
      var $t = $(v),
      $btnClose = $t.find('.ui-close');
      var offset = $(window).scrollTop();
      console.log($t);
      if((typeof $t === 'object' || $t !== null)) {
        $(window).scrollTop(0);
        $t.show().addClass('actived');
        $("body").addClass('ov_hidden');
      }

      $btnClose.off().on('click', function() {
        $t.removeClass('actived');
        $(window).scrollTop(offset);
        $("body").removeClass("ov_hidden");
        console.log($t);
        // setTimeout(function() {
        //   $t.hide(100);
        // }, 100);
      });
    },
    findLayer: function(v) {
      var $t = $(v),
      $btnClose = $t.find('.ui-close');
      var offset = $(window).scrollTop();
      // console.log($t);
      if ($t.length === 0) {
        return; // No elements found for the selector, do not continue
        $t.show().addClass('actived');
      }
      if((typeof $t === 'object' || $t !== null)) {
        // $(window).scrollTop(0);
        $t.show().addClass('actived');
        $("body").addClass('ov_hidden');
      }

      $btnClose.off().on('click', function() {
        $t.removeClass('actived');
        // $(window).scrollTop(offset);
        // $t.show().removeClass('actived');
        $("body").removeClass("ov_hidden");
      });
    },
    popFully: function (v) {
      var $t = $(v),
      $btnClose = $t.find('.ui-close');
      var offset = $(window).scrollTop();
      if ((typeof $t === 'object' || $t !== null)) {
        console.log($t);
        $(window).scrollTop(0);
        $t.show().addClass('actived2');
        $("body").addClass('ov_hidden');
      }

      $btnClose.off().on('click', function () {
        var aa = netiveUI.plugins['popFull'];
        $t.removeClass('actived2');
        $(window).scrollTop(offset);
        console.log($t);
        if (aa.$t !== null) {
          $("body").addClass("ov_hidden");
        }
        setTimeout(function () {
          $t.hide(100);
        }, 100);
      });
    },
    //header
    // headerScroll: function() {
    //   var sc = $(window).scrollTop();
    //   if (sc > 0) {
    //     $(".header_wrap, .visit_cont .sticky_tab").addClass("scroll")
    //   } else {
    //     $(".header_wrap, .visit_cont .sticky_tab").removeClass("scroll")
    //   }
    // },
    //footer
    footer_nav: {
      $scrollElement: $('body, html'),
      $scrollTopPrev: [],
      $navi: null,
      className: 'scroll',
      classNameCaseHidden: 'case_hideen', //20210819
      classNameCaseBottom: 'case_bottom', //20210819
      $bubbleBox: null, //20210819
      scrollDirection: function() {
        // 스크롤 당시, 이전 scrollTop, 변경(현재) scrollTop의 크고 작음으로 scroll UP, DOWN 을 판단
        var o = this;
        // console.log(o.className);

        o.$scrollTopPrev.push(o.$scrollElement.scrollTop());
        if(o.$scrollTopPrev[0] >= o.$scrollElement.scrollTop()) {
          // console.log('UP');
          o.$navi.removeClass(o.className);
          o.$bubbleBox.removeClass(o.classNameCaseHidden); //20210819
        } else {
          // console.log('DOWN');
          o.$navi.addClass(o.className);
          o.$bubbleBox.addClass(o.classNameCaseHidden); //20210819
        }
      },
      scrollEffect: function() {
        var o = this;
        $(window).on('touchmove', function() {
          o.scrollDirection();
        });
        $(window).on('touchend', function() {
          o.$scrollTopPrev = [];
        });
        //20210819 스크롤 최하단 case 추가
        $(window).on('scroll', function() {
          // 스크롤을 끝까지 한 경우 체크
          if(window.innerHeight + o.$scrollElement.scrollTop() === o.$scrollElement.height()) {
            o.$navi.addClass(o.classNameCaseBottom);
          } else {
            o.$navi.removeClass(o.classNameCaseBottom);
          }
        });

      },
      //20210819
      footerNone: function() {
        var o = this;
        o.$bubbleBox.on('click', function () {
          $(this).addClass('none');
        });
      },
      init: function() {
        var o = this;
        o.$navi = $('.health_footer');
        o.$bubbleBox = $('.footer_bubbleBox'); //20210819

        o.scrollEffect();
        o.footerNone();
      }
    },
    //20210817 app 스크롤제어 (100vh)
    setScreenSize: function() {
      let vh = window.innerHeight * 0.01;

      document.documentElement.style.setProperty('--vh', `${vh}px`);
    },
    //checkbox all check
    allCheck: function() {
      let allCheck = $('.allCheck'),
          checkBox = $('[data-target-check]');

      allCheck.on('click', function(){
        $(this).parents('[data-check-parent]').find(checkBox).prop('checked', this.checked);
      });

      checkBox.on('click', function (){
        let checkedLen = $(this).parents('[data-check-parent]').find('[data-target-check]:checked').length,
            checkBoxLen = $(this).parents('[data-check-parent]').find(checkBox).length;

          if( checkedLen == checkBoxLen ) {
            $(this).parents('[data-check-parent]').find(allCheck).prop('checked',true);
          } else {
            $(this).parents('[data-check-parent]').find(allCheck).prop('checked',false);
          }
      });
    },
    //hover accor
    hoverAccor: function () {
      const hoverAccorTit = $('.hover_accor').find('li'),
            $winW = $(window).width();
      if($winW >768) {
        hoverAccorTit.on('mouseenter',function(e) {
          e.stopPropagation();
          if($(this).hasClass('active')) {          
            $(this).removeClass('active').find('.accor_cont').stop().hide();
          } else {
            $(this).addClass('active').find('.accor_cont').stop().show();
          }
        }).on('mouseleave',function() {
          $(this).removeClass('active').find('.accor_cont').stop().hide();
        })
      } else {
        hoverAccorTit.on('click',function(e) {
          let hoverAccorH = $(this).parents('.hover_accor_pos');
          hoverAccorH.css('height','auto');
          if($(this).hasClass('active')) {          
            $(this).removeClass('active').find('.accor_cont').stop().hide();
          } else {
            hoverAccorTit.removeClass('active').find('.accor_cont').stop().hide();
            $(this).addClass('active').find('.accor_cont').stop().show();
          }
        })
        
      }
    },
    hoverInfo: function () {
      const hoverAccorTit = $('.camp_info_wrap').find('li')
      $('#campus_map area').on({
        mouseenter: function () {
          $('.overlay' + this.className)
            .addClass('active')
            .siblings()
            .removeClass('active')
          hoverAccorTit
            .removeClass('active')
            .filter(`[data-floor='${this.className}']`)
            .addClass('active')
        },
        mouseleave: function () {
          $('.overlay' + this.className).removeClass('active')
          hoverAccorTit.removeClass('active')
        },
      })
      hoverAccorTit.on({
        mouseenter: function (e) {
          e.stopPropagation()
          hoverAccorTit.removeClass('active')
          $(this).addClass('active')
          $('.overlay' + this.dataset.floor)
            .addClass('active')
            .siblings()
            .removeClass('active')
        },
        mouseleave: function () {
          $(this).removeClass('active')
          $('.overlay' + this.dataset.floor).removeClass('active')
        },
      })
    },
  };

  $.fn.uiCheckAll = function() {
    return this.each(function() {
      $plugins.uiCheckAll = {
        gTarget: null,
        gAllObj: null,
        gItemObj: null,
        gLength: null,
        gCheckedLength: 0,
        checkAllFn: function(v) {
          var o = this,
              $t = $(v),
              $boolean = $t.is(':checked'),
              $parent = $t.parent();

          o.gItemObj.prop('checked', $boolean);
          if($boolean) {
            o.gCheckedLength = o.gLength;
          } else {
            o.gCheckedLength = 0;
          }
        },
        checkItemFn: function(v) {
          var o = this,
              $t = $(v),
              $boolean = $t.is(':checked'),
              $parent = $t.parent();

          if($boolean) {
            o.gCheckedLength = o.gCheckedLength + 1;
          } else {
            o.gCheckedLength = o.gCheckedLength - 1;
          }

          if(o.gCheckedLength === o.gLength) {
            o.gAllObj.prop('checked', true);
          } else {
            o.gAllObj.prop('checked', false);
          }
        },
        init: function(v) {
          var o = this;
          o.gTarget = $(v);
          o.gAllObjParent = o.gTarget.find('.ui-allBtn');
          o.gAllObj = o.gAllObjParent.find('input[type=checkbox]');
          o.gItemObjParent = o.gTarget.find('.ui-checkList');
          o.gItemObj = o.gItemObjParent.find('input[type=checkbox]');
          o.gLength = o.gItemObj.length;

          // 전체 체크, 체크 해제
          o.gAllObj.on('click.allChk', function() {
            o.checkAllFn(this);
          });

            // 개별 체크
          o.gItemObj.on('click.itemChk', function() {
            o.checkItemFn(this);
          });
        }
      }
      $plugins.uiCheckAll.init(this);
    });
  }
  // tooltip
  $.fn.uiToolTip = function () {
    return this.each(function () {
      var $t = $(this),
        _parent = '.ui-tooltip-wrap',
        _tooltip = '.toolTip',
        _edge = '.toolTip > i',
        _closeBtn = '.typeModalClose',
        $parent = $t.closest(_parent),
        $tootip = $t.closest(_parent).find(_tooltip),
        $edge = $t.closest(_parent).find(_edge),
        $closeBtn = $tootip.find(_closeBtn),
        $mob = $('html').hasClass('ui-m'),
        edgePos = '30px',
        $winW = $(window).width(),
        whiteSpace = 32; // 모바일에서 툴팁의 좌우 여백

      $t.on('click', function () {

        if ($tootip.is(':visible')) return;

        $tootip.show();
        if ($tootip.offset().left + $tootip.innerWidth() > $(window).width()) { // 툴팁의 offset left 값 + 가로값이 브라우자 가로폭보도 큰경우, 즉 화면을 넘어간 경우
          $tootip.css('right', '-' + edgePos);
          $edge.css('right', edgePos);
        } else {
          if ($mob) {
            // $tootip 위치 잡기
            console.log($winW, $tootip.offset().left, Math.floor($tootip.offset().left) + whiteSpace);
            $tootip.css({
              'width': $winW - (whiteSpace * 2),
              'left': Math.floor(whiteSpace - $tootip.offset().left) + 'px',
            });
            $edge.css('left', $t.offset().left - $tootip.offset().left);
          } else {
            $tootip.css('left', '-' + edgePos);
            $edge.css('left', edgePos);
          }
        }
        setTimeout(function () {
          $parent.addClass('active');

        }, 100);

        $closeBtn.off().on('click', function () {
          $parent.removeClass('active');
          setTimeout(function () {
            $tootip.removeAttr('style');
            $edge.removeAttr('style');
            $t.focus();
          }, 100);
        });
      });
    });
  }

  // 공통 약관 전체선택
  $.fn.uiCheckSubAll = function() {
    return this.each(function() {
      $plugins.uiCheckSubAll = {
        gTarget: null,
        gAllObj: null,
        gItemObj: null,
        gLength: null,
        gCheckedLength: 0,
        checkAllConditionFn: function() {
          var o = this;
          if(o.gCheckedLength === o.gLength) {
            o.gAllObj.prop('checked', true);
          } else {
            o.gAllObj.prop('checked', false);
          }
        },
        checkAllFn: function(v) { // 전체 체크
          var o = this,
            $t = $(v),
            $boolean = $t.is(':checked'),
            $parent = $t.parent();

          o.gItemSubObjParent = o.gTarget.find('.item_detail .item');
          o.gItemSubObj = o.gItemSubObjParent.find('input[type=checkbox]');

          o.gItemObj.prop('checked', $boolean);
          o.gItemSubObj.prop('checked', $boolean);

          if($boolean) {
            o.gCheckedLength = o.gLength;
          } else {
            o.gCheckedLength = 0;
          }
        },
        checkItemFn: function(v) { // 개별 체크
          var o = this,
            $t = $(v),
            $boolean = $t.is(':checked'),
            $parent = $t.parent();

          // 개별 서브
          o.gItemSubObjParent = $t.parent('.item').next('.item_detail').find('.item');
          o.gItemSubObj = o.gItemSubObjParent.find('input[type=checkbox]');

          o.gItemSubObj.prop('checked', $boolean);

          if($boolean) {
            o.gCheckedLength = o.gCheckedLength + o.gItemSubObj.length + 1;
          } else {
            o.gCheckedLength = o.gCheckedLength - o.gItemSubObj.length - 1;
          }

          o.checkAllConditionFn();
        },
        checkItemSubFn: function(v) { // 개별 서브 체크
          var o = this,
            $t = $(v),
            $boolean = $t.is(':checked'),
            $parent = $t.closest('.item_detail').find('.item'),
            $obj = $parent.find('input[type=checkbox]'),
            $objLength = $obj.length,
            $objCheckedLength = $parent.find('input[type=checkbox]:checked').length,
            $allObj = $t.closest('.item_detail').prev('.item').find('input[type=checkbox]');

          if($boolean) {
            o.gCheckedLength = o.gCheckedLength + 1;
          } else {
            o.gCheckedLength = o.gCheckedLength - 1;
          }

          if($objLength === $objCheckedLength) {
            o.gCheckedLength = o.gCheckedLength + 1;
            $allObj.prop('checked', true);
          } else {
            if($allObj.prop('checked')) {
              o.gCheckedLength = o.gCheckedLength - 1;
            }
            $allObj.prop('checked', false);
          }

          o.checkAllConditionFn();
        },
        init: function(v) {
          var o = this;
          o.gTarget = $(v);

          // 전체
          o.gAllObjParent = o.gTarget.find('.item_head');
          o.gAllObj = o.gAllObjParent.find('input[type=checkbox]');

          // 개별
          o.gItemObjParent = o.gTarget.find('.item_cont > .item');
          o.gItemObj = o.gItemObjParent.find('input[type=checkbox]');

          // 개별 서브
          o.gItemSubObjParent = o.gTarget.find('.item_detail .item');
          o.gItemSubObj = o.gItemSubObjParent.find('input[type=checkbox]');

          o.gLength = o.gItemObj.length + o.gItemSubObj.length;

          // 전체 체크, 체크 해제
          o.gAllObj.on('click.allChk', function() {
            o.checkAllFn(this);
          });

          // 개별 체크
          o.gItemObj.on('click.itemChk', function() {
            o.checkItemFn(this);
          });

          // 개별 서브 체크
          o.gItemSubObj.on('click.itemSubChk', function() {
            o.checkItemSubFn(this);
          });
        }
      }
      $plugins.uiCheckSubAll.init(this);
    });
  }

  $plugins.pageReload = {
    $touchTarget: null,
    $scrollTarget: $('body, html'),
    startX: null,
    startY: null,
    endX: null,
    endY: null,
    activeCondition: 200,
    touchStart: function () {
      var o = this;
      o.$touchTarget.on('touchstart.reload', function (event) { //20210818 reload 변경
        if (!o.$scrollTarget.scrollTop()) {
          o.startX = event.originalEvent.changedTouches[0].pageX;
          o.startY = event.originalEvent.changedTouches[0].pageY;
        }
      });
    },
    touchMove: function () {
      var o = this;

      o.$touchTarget.on('touchmove.reload', function (event) { //20210818 reload 변경
        if (!o.$scrollTarget.scrollTop()) { // 취소는 안됨
          o.endX = event.originalEvent.changedTouches[0].pageX;
          o.endY = event.originalEvent.changedTouches[0].pageY;

          if (o.endY - o.startY > o.activeCondition) {
            $('.ui-reload').addClass('active');
          } else {
            $('.ui-reload').removeClass('active');
          }
        }
      });

    },
    touchEnd: function (callback) {
      var o = this;

      o.$touchTarget.on('touchend.reload', function (event) { //20210818 reload 변경
        if ($('.ui-reload').hasClass('active')) {
          o.endX = event.originalEvent.changedTouches[0].pageX;
          o.endY = event.originalEvent.changedTouches[0].pageY;

          if (o.endY - o.startY > o.activeCondition) {
            if (typeof callback === 'function') {
              callback();
            }
          }
        }
      });
    },
    // 20210818 destroy case 추가
    destroy: function () {
      var o = this;

      o.$touchTarget.off('touchstart.reload');
      o.$touchTarget.off('touchmove.reload');
      o.$touchTarget.off('touchend.reload');


    },
    init: function (callback) {
      var o = this;
      o.$touchTarget = $('.health_wrap');

      if (!$('.ui-reload').length) $('.health_container').before('<div class="ui-reload"></div>');

      // 배경색이 있는 경우 체크
      if (o.$touchTarget.hasClass('type_bg_purple') || o.$touchTarget.hasClass('type_bg_gray')) {
        $('.ui-reload').addClass('bgColor');
      }

      o.touchStart();
      o.touchMove();
      o.touchEnd(callback);
    }
  }

  //run
  $(doc).ready(function() {
    // $plugins.device.deviceClass();
    // $plugins.device.osClass();

    netiveUI.plugins.accodian(); //아코디언
    netiveUI.plugins.tabMenu(); //tabmenu
    netiveUI.plugins.topMove();
    netiveUI.plugins.footer_nav.init();
    netiveUI.plugins.setScreenSize(); //20210817 100vh
    netiveUI.plugins.allCheck();

    $('.typeInfo').uiToolTip();

    $plugins.pageReload.init(function() { //touch end 이후 실행될 내용 작성
      location.reload();
    });

    //20210818 배너 close btn
      $('.banner_area .close_btn').click(function () {
        $('.banner_area_wrap').fadeOut();
      });


    //header scroll
    $(window).scroll(function () {
      // netiveUI.plugins.headerScroll();

      //20210818 bannerFn
      if ($('.health_header').hasClass('scroll')) {
        $('.banner_area').addClass('fixed');
      } else {
        $('.banner_area').removeClass("fixed")
      }
    });

    $(window).resize(function () {
      netiveUI.plugins.setScreenSize(); //20210817 100vh
    });
  });

})(window, document);

function showToast(text, args = {}) {
  const selectedToast = toasts;
  if (!manager.ready) {
    manager.addJob({text: text, args: args, workingID: selectedToast});
    return;
  }
  manager.currentWorkingID = selectedToast;

  args.duration = args.duration || 3000;
  args.background = args.background || "#232323";
  args.color = args.color || "#fff";
  args.borderRadius = args.borderRadius || "0px";

  $("body").append(`
    <div style="background: ${args.background}; color: ${args.color}; border-radius: ${args.borderRadius};" data-toast-id="${toasts}" class="toast">
      ${text}
    </div>
  `);

  $(".toast").map((i) => {
    manager.ready = false;
    if (i !== selectedToast) {
      $(".toast").eq(i).animate({
        "margin-top": "+=" + parseInt($(`[data-toast-id="${selectedToast}"]`).height() + (15 * 2) + 15 + 5) + "px"
      }, 300);

      setTimeout(() => {
        manager.removeJob(selectedToast);
      }, 300);
    }else {
      setTimeout(() => {
        $(".toast").eq(i).animate({
          "margin-top": "25px"
        }, 300);

        setTimeout(() => {
          manager.removeJob(selectedToast);
        }, 300);
      }, 150);
    }
  });

  setTimeout(() => {
    $(`[data-toast-id="${selectedToast}"]`).animate({
      "margin-right": "-" + parseInt($(`[data-toast-id="${selectedToast}"]`).width() + (15 * 2) + 38) + "px"
    }, 300);

    if (selectedToast !== toasts) {
      $(".toast").map((i) => {
        if (i < selectedToast) {
            setTimeout(() => {
              $(".toast").eq(i).animate({
              "margin-top": "-=" + parseInt($(`[data-toast-id="${selectedToast}"]`).height() + (15 * 2) + 15 + 5) + "px"
              }, 300);
          }, 300);
        }
      });
    }
    setTimeout(() => {
      $(`[data-toast-id="${selectedToast}"]`).css("display", "none");
    }, 300);
  }, args.duration);
  toasts++;
}

window.addEventListener("DOMContentLoaded", (event) => {
  const fileInput = document.getElementById("file-input");
  const fileList = document.getElementById("files-list");

  if (fileInput) {
    fileInput.addEventListener('change', handleFiles, false);
    fileList.innerHTML = "";
  }

  function handleFiles() {
    for (i of fileInput.files) {
      const reader = new FileReader();
      const listItem = document.createElement("li");
      const fileName = i.name;
      // let fileSize = (i.size / 1024).toFixed(1);
      listItem.innerHTML = `<p>${fileName}</p><button type="button" class="btn_del"><span class="blind">삭제</span></button>`;
      // if (fileSize >= 1024) {
      //   fileSize = (fileSize / 1024).toFixed(1);
      //   listItem.innerHTML = `<p>${fileName}</p><p>${fileSize}MB</p>`;
      // }
      fileList.appendChild(listItem);
    }
  }
});


$('.container').each(function(){
  if ($(this).hasClass('full')) {
    $('.header_wrap').addClass('col_wh')
  }
})

$(document).ready(function () {
  var boxDraw = $(".education_line, .block_wrap, .about_typo, .txt_ani");
  if (boxDraw.length) {
    var boxDrawTop = boxDraw.offset().top;
  }
  var windowHeight = $(window).height();

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if ( scroll >= ( boxDrawTop - windowHeight )) {
      boxDraw.addClass("active");
    } else {
      boxDraw.removeClass("active");
    }
  });
  //20240115 헤더 띠배너 추가
  const tmoBnr = $('.tmo_banner');

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(!tmoBnr.hasClass('hidden')){
      if(scroll > tmoBnr.outerHeight()){
        $('.header_wrap').addClass('fixed')
      }else if(scroll < tmoBnr.outerHeight() + 300){
        $('.header_wrap').removeClass('fixed')
      }      
    }
  })
  tmoBnr.find('.modal_close').click(function(){
    $(this).parent('.tmo_banner').addClass('hidden')
  })
});

var header = new Headroom(document.querySelector(".header_wrap"), {
  tolerance: 5,
  offset : 100,
  classes: {
    initial: "header_wrap",
    pinned: "pin_up",
    unpinned: "pin_down"
  }
});
header.init();

function visitSwiper() {
  let itemWid = $(".slide_item").outerWidth(),
    itemH = $(".slide_item").outerHeight(),
    mleft = 0,
    clone = $(".slide_wrapper").children().clone(),
    timer = setInterval(move, 30);

  $(".visit_list").height(itemH);
  clone.appendTo(".slide_wrapper");
  $(".visit_list").on("mouseenter", function () {
    clearInterval(timer);
  });
  $(".visit_list").on("mouseleave", function () {
    timer = setInterval(move, 30);
  });

  function move() {
    mleft -= 2;
    if (mleft < -itemWid) {
      $(".slide_wrapper .slide_item").first().appendTo(".slide_wrapper");
      mleft = 0;
      itemWid = $(".slide_item").outerWidth();
    }
    $(".slide_wrapper").css({ left: mleft });
  }
}

AOS.init({
  disable: false, // 'phone', 'tablet', 'mobile'
});

var ui = {
	init: function(){
		if($('.sticky_wrap').length) {this.activeSticky.init()} // sticky 활성화
    if($('.more_con').length)  {this.contDetailView.init()}
	},
  
	gnb_dropdown : {
		gnbWrap : '.header_wrap',
		gnbboxWrap : '.header_wrap .gnb_wrap',
		gnbLink : '.gnb_box .gnb_item',
		gnbDepth : '.gnb_box .depth2',
		sticky : '.sticky_wrap',
		stickylink : '.sticky_link',
		init: function(){
			var _this = this;
			_this.event();
		},
		event : function($this){
			var _this = this;
			var setTime = null;
			
			$(this.gnbLink).not('.is-entered').on('mouseenter focusin click', function(){
				clearTimeout(setTime);
				$(this).parents('.header_wrap').addClass('on');
				$(this).addClass('is-active').find('button').attr({'aria-expanded':'true', 'aria-selected': 'true'});
				$(this).siblings().removeClass('is-active').find('button').attr({'aria-expanded':'false', 'aria-selected': 'false'});
			}).addClass('is-entered');

			$(this.gnbWrap).not('.is-leaved').on('mouseleave focusout', function(){
				var $this = $(this);
				var $gnbLink = $(this).find('.gnb_item');
				setTime = setTimeout(function(){ 
					$gnbLink.removeClass('is-active');

					//스크롤하던 중일땐 open 클래스 삭제하지 않음.
					if($('body').hasClass('scroll')){ 
						return false;
					}
					$gnbLink.parents('.header_wrap').removeClass('on');
				});
			}).addClass('is-leaved');

			
			var stickyTop = 0, stickyH = 0;
			$(window).on('scroll', function(){
				var scrT = $(this).scrollTop();

				if( $(_this.sticky).length > 0 ) {
					stickyTop = $(_this.sticky).offset().top;
					stickyH = $(_this.stickylink).outerHeight();
				};

				if(scrT > 0){
					$(_this.gnbWrap).addClass('scroll');

					if( $(_this.sticky).length > 0 ) {
						if(stickyTop <= scrT) {
							$(_this.sticky).removeClass('flex').addClass('on').css({'padding-top':stickyH+'px'});
							$(_this.gnbWrap).addClass('sticky');
						} else if(stickyTop - 120 <= scrT){
							$(_this.sticky).addClass('on flex').css({'padding-top':stickyH+'px'});
							$(_this.gnbWrap).removeClass('sticky');
							
						} else {
							$(_this.sticky).removeClass('on flex').attr('style','');
							$(_this.gnbWrap).removeClass('sticky');
						}
					};
				}else{
					$(_this.gnbWrap).removeClass('scroll');
				}

				scrL = scrT;
			})
		},
		scrolled : function($this) {
			
		},
		down : function(stickyTop, updown){
			var _this = this;
			if( !$(_this.gnbWrap).hasClass('down') && updown ){
				updown = false;
				$(_this.stickylink).stop().stop().animate({top : '0px'}, 500);
				$(_this.gnbWrap).stop().stop().animate({top : '-120px'}, 500);
				$(_this.gnbWrap).addClass('down');
			};
		},
		up : function(stickyTop, updown){
			var _this = this;
			if( $(_this.gnbWrap).hasClass('down') && updown ){
				updown = false;
				$(_this.stickylink).stop().stop().animate({top : '120px'}, 500, function(){
					$(this).css('top', '');
				});
				$(_this.gnbWrap).stop().stop().animate({top : '0px'}, 500, function(){
					$(this).css('top', '');
					updown = true;
				});
				$(_this.gnbWrap).removeClass('down');
			}
		}
	},
  activeSticky : {
    header : '.header_wrap',
    sticky : '.sticky_wrap',
    stickylink : '.sticky_link',
    target : '.sticky_link .tab_menu',
    anchor : '.anchor-scroll',
    init: function() {
      var _this = this;
            var lastScrollTop = 0;
      var headerH = $(_this.stickylink).outerHeight();
      var delta = 5;
      var tabCurrent = null;

      // Scroll Event
            $(window).on('scroll', function(){
                var scrollt = $(document).scrollTop();

                if(Math.abs(lastScrollTop - scrollt) <= delta) return;
                if (scrollt > lastScrollTop){
                    //dowm
                    _this.down(headerH);
          tabCurrent = null;
                } else {
                    // upscroll code
                    _this.up(headerH, tabCurrent);
          tabCurrent = null;
                }
                lastScrollTop = scrollt;
            })

            //Click Event
            $(_this.target).find('button').on('click', function(){
                _this.click($(this), headerH);
            })

      $(_this.target).find('a').on('click', function(){
        tabCurrent = $(this).parents('.tab').index();
            })
    },
    down : function(headerH){
      var _this = this;

            $(this.anchor).each(function(idx){
                var $this = $(this);
                var $curruntTop = $this.offset().top;
                var sitemapScrTop = $(window).scrollTop();
                var winH = $(window).height();
                var totalH = $('.container').outerHeight();
    
                if( sitemapScrTop + winH >= totalH - headerH - 10 ){
                    $(_this.target).find('li').last().addClass('on').siblings('li').removeClass('on');
                    return false;
                }else{
                    if($curruntTop - headerH -10 <= sitemapScrTop) {
                        $this.addClass('active');
                        $(_this.target).find('li').eq(idx).addClass('on').siblings('li').removeClass('on');
                    }
                };
            })
    },
    up : function(headerH, tabCurrent){
      var _this = this;

            $(this.anchor).each(function(idx){
                var $this = $(this);
                var $curruntTop = $this.offset().top;
                var upheight = $curruntTop - headerH - 10;
                var sitemapScrTop = $(window).scrollTop();

                if($curruntTop > 0 && upheight > sitemapScrTop && $this.hasClass('active')){
                    if( idx - 1 < 0 ) {
                        return false
                    }else{
                        $(this).removeClass('active');
                        // $(_this.target).find('li').eq(idx - 1).addClass('on').siblings('li').removeClass('on')
            if(tabCurrent !== null){
              $(_this.target).find('li').eq(tabCurrent).addClass('on').siblings('li').removeClass('on');
            } else {
              $(_this.target).find('li').eq(idx - 1).addClass('on').siblings('li').removeClass('on');
            }

          }
                }
            })
    },
    click : function($this, headerH){
      var _this = this;
            var idx = $this.parents('li').index();
            var offsetT = $(_this.anchor).eq(idx).offset().top;
            var scrollT = offsetT - headerH;

            $('html, body').stop().animate({scrollTop : scrollT}, 600);
    }
  },
  contDetailView : {
		init : function(){
			var _this = this;
			_this.event();
		},
		event : function(){
			$('.btn_detail').on('click', function(){
				var contBox = $(this).parent('.toggle_more');
				
				if(contBox.hasClass('on')) {
          contBox.removeClass('on');
          contBox.find('.more_con').slideUp(100);
        } else {
          contBox.addClass('on');
          contBox.find('.more_con').slideDown(100);
        }
			})
		}
	}
}

$(window).each(function(){
	ui.init();
});

let st = 0, //스크롤 초기값
  colorTargetis = $(this), // this 타겟
  ww = $(window).width(), // 윈도우 너비
  last_scrollTop = 0;
  
function gnbAction() {
  const header = $("header");
  let menu_btn = $(".btn_gnb_menu"),
    gnbList = $(".gnb_new");

  menu_btn.toggleClass("active");

  if (gnbList.hasClass("active")) {
    gnbList.removeClass("active");
    $("body").addClass('ov_hidden');
  } else {
    setTimeout(function () {
      gnbList.addClass("active");
    }, 100);
  }

  header.toggleClass("active");
  $("body").toggleClass('ov_hidden');
  return false;
}

function gnbListToggle(event) {
  let $this = $(event),
    depth_01 = $this.parent(".depth_01"),
    depth_02 = depth_01.find(".depth_02");
    other = depth_01.siblings(".depth_01");
    (other_depth_02 = other.find(".depth_02")),
    (all_depth_02 = $(".gnb_menu").find(".depth_02")),
    (href = $this.data("href"));

  if (ww >= 1264) {
    location.href = href;
  } else {
    if (depth_02.length == 0) {
      //depth2 가 없을 경우
      location.href = href;
    } else {
      // depth2가 있을 경우
      if (depth_01.hasClass("active")) {
        depth_02.stop().slideUp(function () {
          depth_01.removeClass("active");
          depth_02.removeAttr("style").removeClass("active");
        });
      } else {
        depth_01.addClass("active");
        depth_02.stop().slideDown().addClass("active");
        other_depth_02.slideUp(function () {
          other.removeClass("active");
          other_depth_02.removeAttr("style");
        });
      }
    }
  }
}

function m_footerToggle() {
  $(".footer_wrap .inner").toggleClass("on");
}

function m_famToggle() {
  $(".footer_wrap .family_site").toggleClass("on");
}

//240524 추가
$('.com_soon span').mouseover(function(){
  $(this).text('Coming Soon');
});
$('.com_soon span').mouseout(function(){
  $(this).text('Taejae Future Education Forum 2024');
});

//240611 추가
$('.com_soon_ko span').mouseover(function(){
  $(this).text('Coming Soon');
});
$('.com_soon_ko span').mouseout(function(){
  $(this).text('제2회 태재미래교육포럼(2024)');
});