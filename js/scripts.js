
// $(document).ready(function() {
// 	$('#fullpage').fullpage({
// 		autoScrolling: false,
// 		fitToSection: false,
//     responsiveWidth: 1100
// 	});

	// $('#main').scroll(function(){
	// 	$('#rice-sidebar').animate({left: "0"}, 500);
	// 	$('#hardy-sidebar').animate({right: "0"}, 500);
	// });
	// $('#main').mouseleave(function(){
	// 	$('#rice-sidebar').animate({left: "-18%"}, 100);
	// 	$('#hardy-sidebar').animate({right: "-18%"}, 100);
	// });

	// var targetOffset = $("#main").offset().top;
	//
	// var $w = $(window).scroll(function(){
	//     if ( $w.scrollTop() > targetOffset ) {
	// 			console.log("blergh");
	// 			$('#rice-sidebar').fadeIn(100);
	// 			$('#rice-sidebar').animate({left: "0"}, 500);
	// 			$('#hardy-sidebar').fadeIn(100);
	// 			$('#hardy-sidebar').animate({right: "0"}, 500);
	// 			$('#logo').show(100);
	// 			$('.view-timeline-mobile').show(100);
	// 		}
	// 		var $h = $(window).scroll(function(){
	// 		    if ( $h.scrollTop() == 0 ) {
	// 					console.log("blahhh");
	// 					$('#rice-sidebar').stop().css({left:"-18%"});
	// 					$('#hardy-sidebar').stop().css({right: "-18%"});
	// 					$('#logo').hide(100);
	// 					$('.view-timeline-mobile').hide(100);
	// 				}
	// 			});
	//
	// });

	// var homeOffset = $("#home").offset().top;
	//
	// var $h = $(window).scroll(function(){
	//     if ( $h.scrollTop() < homeOffset ) {
	// 			$('#rice-sidebar').animate({left: "-18%"}, 100);
	// 			$('#hardy-sidebar').animate({right: "-18%"}, 100);
	//     }
	// });

// });

$('#logo').affix({
    // offset: {
    //     top: 620
    // }
});
