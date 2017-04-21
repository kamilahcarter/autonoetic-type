var AT = {

	onReady: function() {

		// Confirm javascript is enabled
		$('body').removeClass('no-js');
		$('body').addClass('js');

		// Expand and hide sub menus when sections are opened
		$('.main-nav > li').click(AT.activeMenu);

		// Scroll smoothly when clicking on links
    	$('a[href^="#"]').on('click', AT.smoothScroll);

    	$(window).resize(AT.resizeMain);

	},

    activeMenu:	function() {
    	// Only make changes if the section isn't already active
		if (!$(this).hasClass("active")) {
			// Remove active class from navigation
			$('.main-nav > li').removeClass('active');
			// Animate showing and hiding sections
	    	$('.sub-nav').slideUp("slow");
	    	$(this).next('.sub-nav').slideDown( "slow");
	    	// Add active calss to clicked link
	    	$(this).addClass('active');
	    }
    },

    smoothScroll: function (event) {
    	// Prevent default action
    	event.preventDefault();
    	// Store useful values
    	var target = this.hash;
   		$target = $(target);
    	var main = $('main');
    	var initial = main.scrollTop();
    	// Animate scrolling within the main element
    	main.stop().animate({
    		//Set the scrollTop value to be the initial value plus the offset of the target
    		'scrollTop': initial + $target.offset().top
    	}, 700, 'swing', function (target) {
    		// Set the window hash value to the target
    		window.location.hash = target;
    	});
    },

	resizeMain: function (lastWindowHeight) {
	    // Get the windows height and width
	    var thewindow = $(this)
	    var windowHeight = thewindow.height();
	    var windowWidth = thewindow.width();
	    // Get the height of the #main and #navelements
	    var main = parseInt($('main').css('height'));
	    var nav = parseInt($('nav').css('height'));
	    var smallBreakPoint = 400;
	    // Set the height of main to be equal to the height of nav
	    // If the window height is less then the nav height
	    // And the window width is larger than the small break point
	    if (windowHeight < nav && windowWidth > smallBreakPoint) {
	   		if (main != nav) {
			    $('main').css( 'height', nav + 'px' );
			}
	   	}
	   	// If the previous conditions aren't met unset the height
	    else {
	    	$('main').css( 'height', '');
    	}
	}

};

$(document).ready(AT.onReady);

//$(window).load(function() {
//	// Animate loader off screen
//	$('#loader').addClass('hide');;
//});