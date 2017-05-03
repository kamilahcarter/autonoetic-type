var AT = {

	onReady: function() {

		// CHECK JAVASCRIPT
		// Confirm javascript is enabled
		$('body').removeClass('no-js');
		$('body').addClass('js');


		// ACTIVATE INITIAL SECTION
		// Set initial active section
		if (window.location.hash) {
			var target = window.location.hash;
			var navLink = $('a[href^="' + target + '"]')
			var navigation = navLink.parent().parent();
			if (navigation.hasClass('main-nav')) {
				navLink.parent().addClass('active');
			}
			else if (navigation.hasClass('sub-nav')) {
				//navLink.parent().addClass('current');
				navLink.parent().parent().prev().addClass('active');
			}
		}
		else {
			var navLink = $('a[href="#autonoetic-type"]')
			navLink.parent().addClass('active');
		}

		$('.main-nav > li.active').next('.sub-nav').addClass('open')

		// Scroll smoothly when clicking on links
    	$('a[href^="#"]').on('click', AT.smoothScroll);

    	// Expand and hide sub menus when sections are opened
		// $('.main-nav > li').click(AT.activeMenu);

    	$(window).resize(AT.resizeMain);

    	// Active main menu sections
    	$('main').scroll(AT.mainNavSelection);

	},

    smoothScroll: function (event) {
    	// Prevent default action
    	event.preventDefault();
    	// Store useful values
    	var target = this.hash;
   		$target = $(target);
    	var main = $('main');
    	var position = main.scrollTop();
    	// Update the activeMenu
    	//AT.activeMenu( $('a[href^="' + target + '"]').parent() );
    	// Animate scrolling within the main element
    	main.stop().animate({
    		//Set the scrollTop value to be the initial value plus the offset of the target
    		'scrollTop': position + $target.offset().top
    	}, 700, 'swing', function () {
    		// Set the window hash value to the target
    		window.location.hash = target;
    	});
    },

     activeMenu: function( newActiveMenu ) {
		// Animate showing and hiding sections
	    $('.sub-nav.open').slideUp('slow');
	    $('.sub-nav.open').removeClass('open');
    	// Remove active class from navigation
		$('.main-nav > li').removeClass('active');
	    // Add active class to clicked link
	   	newActiveMenu.next('.sub-nav').slideDown("slow");
	   	newActiveMenu.next('.sub-nav').addClass('open');
	    newActiveMenu.addClass('active');
    },

    mainNavSelection: function () {
    	var activeId = $('.main-nav > li.active a').attr('href');
    	var target = $(activeId);
    	var targetTop = target.offset().top;
    	var targetBottom = targetTop + target.height();
    	var windowHeight = $(window).height();
    	// console.log('Target ' + activeId + "	Top " + targetTop + "	Bottom " + targetBottom);
    	
    	//if ( $('main').scrollTop() >= $('main').height() - windowHeight) 
    	if (targetTop < 0 && targetBottom < windowHeight / 2) {
    		var nextActiveMenu = $('.active').nextAll('.main-nav > li:visible').first();
    		AT.activeMenu(nextActiveMenu);
       	}
       	else if (targetTop > windowHeight / 2 ) {
       		var prevActiveMenu = $('.active').prevAll('.main-nav > li:visible').first();
       		AT.activeMenu(prevActiveMenu);
       	}
    },

	resizeMain: function () {
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