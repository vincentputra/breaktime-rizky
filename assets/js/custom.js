$(function(){
	function calc(el, w, h, b){
		if( b == "both" ) {
			$(window).on('load resize',function(){
				$(el).css({
					'width': '100%',
					'height': '100%'
				}).css({
					'width': '-='+ (w*2) +'px',
					'height': '-='+ (h*2) +'px'
				});
			});
		} else if( b == "left") {
			$(window).on('load resize',function(){
				$(el).css({
					'width': '100%',
					'min-height': h+'px'
				}).css({
					'width': '-='+ w +'px',
					'height':'auto'
				});
			});
		} else if( b == "center" ) {
			$(window).on('load resize',function(){
				$(el).css({
					'width': '100%',
					'min-height': h+'px'
				}).css({
					'width': '-='+ (w*2) +'px',
					'height':'auto'
				});
			});
		} else {
			return true;
		}
	}
	function calcWidth (el) {
		$(window).on('load resize',function(){
			$(el).each(function(){
				var actH = $(this).children('img').width();
				$(this).width(actH);
			});
		});
	}
	//Calculate width

	calcWidth('.calc-width');
	calc('.calc', 27, 22, "both");
	calc('.calc2', 27, 0, "left");
	calc('.calc3', 27, 0, "center");
	//Carousel
	$('.carousel').carousel({
		interval: 4000,
		pause: "hover"
	});	
	$('input.mask-input[type="radio"]').iCheck({
	    checkboxClass: 'icheckbox_polaris',
	    radioClass: 'iradio_polaris',
	    increaseArea: '-10%' // optional
	  });
});

//Mobile Menu Open

$(".menu-bars-xs").click(function(e){
	e.stopPropagation();
	$('nav.col-menu-xs').toggleClass('slide-down');
	$('body').toggleClass('slide-down');

	return false;
});

	$("nav.col-menu-xs").on("click", function (e) {
        e.stopPropagation();
    });
	
	$(document).click(function() { 
		$('nav.col-menu-xs').removeClass('slide-down');
		$('body').removeClass('slide-down');
	});