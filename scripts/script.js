$(document).ready(function() {

	// Confirm javascript is enabled
	$('body').removeClass('no-js');
	$('body').addClass('js');

	// Expand and hide sub menus when sections are opened
    $('.main-nav > li').click(function() {
		if (!$(this).hasClass("active")) {
			$('.main-nav > li').removeClass('active');
	    	$('.sub-nav').slideUp("slow", function() {
	    	});
	    	$(this).next('.sub-nav').slideDown( "slow", function() {
	    	});
	    	$(this).addClass('active');
	    }
    });

    $('a[href^="#"]').on('click',function (e) {
    	e.preventDefault();
    	
    	var target = this.hash;
   		$target = $(target);
    	
    	var main = $('main');
    	var initial = main.scrollTop()

    	main.stop().animate({
    		'scrollTop': initial + $target.offset().top
    	}, 700, 'swing', function () {
    		window.location.hash = target;
    	});
    });


//    $('a[href^="#"]').on('click',function (e) {
//        e.preventDefault();
//
//        var target = this.hash;
//        $target = $(target);
//
//        $('main').stop().animate({
//            'scrollTop': $target.offset().top
//        }, 500, 'swing', function () {
//            window.location.hash = target;
//        });
//    });
});


$(window).load(function() {
	// Animate loader off screen
	$('#loader').addClass('hide');;
});