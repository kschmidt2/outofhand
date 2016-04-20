$(document).ready(function() {
  $('#fullpage').fullpage({

    //Navigation
    // menu: '#menu',
    // lockAnchors: false,
    // anchors: ['firstPage', 'secondPage'],
    // navigation: true,
    // navigationPosition: 'right',
    // navigationTooltips: ['First page', 'Second page', 'Third page', 'Fourth page', 'Fifth page'],      //have to figure out simplest way to customize this per page
    // showActiveTooltip: false,
    // slidesNavigation: true,
    // slidesNavPosition: 'bottom',
    // //
    // // //Scrolling
    // css3: true,
    // scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: false,
    // fitToSectionDelay: 1000,
    // scrollBar: false,
    // easing: 'easeInOutCubic',
    // easingcss3: 'ease',
    // loopBottom: false,
    // loopTop: false,
    // loopHorizontal: true,
    // continuousVertical: false,
    // normalScrollElements: '#element1, .element2',
    scrollOverflow: true,
    // touchSensitivity: 75,
    // normalScrollElementTouchThreshold: 5,
    // //
    // // //Accessibility
    // keyboardScrolling: true,
    // animateAnchor: true,
    // recordHistory: false,
    // responsiveWidth: 768,
    // //
    // // //Design
    // sectionsColor: ['#FFFFFF'],
    // controlArrows: false,
    // verticalCentered: true,
    // resize : false,
    // paddingTop: '1.5em',
    // paddingBottom: '3.5em',
    // fixedElements: '#header, #logo, #switch_language',
    responsiveWidth: 1100,
    // responsiveHeight: 0,

    //events
    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);
      if(index == 2){
                console.log("Section 2 loaded");
                $('#rice-sidebar').fadeIn(100);
                $('#rice-sidebar').animate({left: "0"}, 500);
                $('#hardy-sidebar').fadeIn(100);
                $('#hardy-sidebar').animate({right: "0"}, 500);
                $('#logo').fadeIn(500);
                $('.view-timeline-mobile').delay(500).fadeIn(100);
            }

    },
    onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);
            console.log("onLeave()");

            //after leaving section 5
            if(index == 2 && direction == 'up'){
                console.log("Leaving section 2!");
                $('#rice-sidebar').hide();
                $('#rice-sidebar').animate({left: "-18%"}, 500);
                $('#rice-sidebar').fadeOut(100);
                $('#hardy-sidebar').animate({right: "-18%"}, 500);
                $('#hardy-sidebar').fadeOut(100);
                $('#logo').fadeOut(100);
                $('.view-timeline-mobile').fadeOut(100);
            }
        },
  });
});
