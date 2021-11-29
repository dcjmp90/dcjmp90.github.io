

;(function () {

	
	
	'use strict';
	const width  = window.innerWidth || document.documentElement.clientWidth || 
		document.body.clientWidth;
	const height = window.innerHeight|| document.documentElement.clientHeight|| 
		document.body.clientHeight;
	
	
	var nums = ["55%", "90%", "65%", "80%", "75%", "68%", "45%","60%","90%"];
	var btn = $('#button');
	var bars = $('#wrap');
	$("body").css("min-hieght",height);
	$("body").css("height", height);
	$(document).ready(function (){
		var clicks = 1;
		$(".blog-entry").hide();
		$(".blog-entry").slice(0, 3).show();
		if ($(".blog-entry:hidden").length != 0) {
			$("#loadMore").show();
		}		
		$("#loadMore").on('click', function (e) {
			e.preventDefault();
			$(".blog-entry:hidden").slice(0, 3).slideDown();
			clicks+=1;
			if ($(".blog-entry:hidden").length == 0) {
				$("#loadMore").fadeOut('slow');
			}
		});
		var owl = $('.owl-carousel');
		owl.owlCarousel({
			items:1,
			loop:false,
			autoplay:true,
			autoplayTimeout:2150,
			slideSpeed: 800,
			mouseDrag: true,
			paginationSpeed: 500,
			autoplayHoverPause:true,
		
		});
		


		$("#clickedone").click(function (){
			var icon = $("#iconone");
			var color = icon.css("background").split(")")[0]+")";
			console.log()
			if (color == "rgb(128, 0, 128)") {
				icon.css("background", "#f15a22");
			} else {
				icon.css("background", "rgb(128, 0, 128)");
			}
		});
		$("#clickedtwo").click(function (){
			var icon = $("#icontwo");
			var color = icon.css("background").split(")")[0]+")";
			console.log()
			if (color == "rgb(20, 200, 10)") {
				icon.css("background", "#f15a22");
			} else {
				icon.css("background", "rgb(20, 200, 10)");
			}
		});
		$("#clickedthree").click(function (){
			var icon = $("#iconthree");
			var color = icon.css("background").split(")")[0]+")";
			console.log()
			if (color == "rgb(200, 20, 10)") {
				icon.css("background", "#f15a22");
			} else {
				icon.css("background", "rgb(200, 20, 10)");
			}
		});
		$("#clickedfour").click(function (){
			var icon = $(".numfour");
			var color = icon.css("background").split(")")[0]+")";
			console.log()
			if (color == "rgb(20, 10, 20)") {
				icon.css("background", "#f15a22");
			} else {
				icon.css("background", "rgb(20, 10, 20)");
			}
		});
		$("#clickedfive").click(function (){
			var icon = $("#iconfive");
			var color = icon.css("background").split(")")[0]+")";
			console.log()
			if (color == "rgb(20, 10, 200)") {
				icon.css("background", "#f15a22");
			} else {
				icon.css("background", "rgb(20, 10, 200)");
			}
		});
		$("#clickedsix").click(function (){
			var icon = $(".numsix");
			var color = icon.css("background").split(")")[0]+")";
			console.log()
			if (color == "rgb(20, 10, 20)") {
				icon.css("background", "#f15a22");
			} else {
				icon.css("background", "rgb(20, 10, 20)");
			}
		});
	});

	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
		
	});



	btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '300');
	});

	bars.on('inview', function(event, isInView) {
		if (isInView) {
			console.log("its in view");
		  // element is now visible in the viewport
		  var elems = $('.bar');
		  var counter = 0;
		  elems.each(function(elem){
			elem.animate({'width':nums[counter]}, "4s","ease");
			console.log(elem);
			console.log(counter);
			counter++;
		  });
		} else {
		  // element has gone out of viewport
		  
		  var elems = $('.bar');
		  var counter = 0;
		  elems.forEach(function(elem){
			elem.animate({'width':"0%"}, "4s","ease");
			console.log(elem);
			console.log(counter);
			counter++;
		  });
		}
	  });
	




	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};


	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};


	var counterWayPoint = function() {
		if ($('#colorlib-counter').length > 0 ) {
			$('#colorlib-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Animations
	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var burgerMenu = function() {

		$('.js-colorlib-nav-toggle').on('click', function(event){
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');	
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');	
			}
		});



	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
			
	    	}
	    	
	    }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
			
	    	}
		});

	};

	var clickMenu = function() {

		$('#navbar a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top - 55
			    	}, 500);
			   }

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-colorlib-nav-toggle').removeClass('active');
		    }

		    event.preventDefault();
		    return false;
		});


	};

	// Reflect scrolling in navigation
	var navActive = function(section) {

		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};

	var navigationSection = function() {

		var $section = $('section[data-section]');
		
		$section.waypoint(function(direction) {
		  	
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};






	var sliderMain = function() {
		
	  	$('#colorlib-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	};

	var stickyFunction = function() {

		var h = $('.image-content').outerHeight();

		if ($(window).width() <= 992 ) {
			$("#sticky_item").trigger("sticky_kit:detach");
		} else {
			$('.sticky-parent').removeClass('stick-detach');
			$("#sticky_item").trigger("sticky_kit:detach");
			$("#sticky_item").trigger("sticky_kit:unstick");
		}

		$(window).resize(function(){
			var h = $('.image-content').outerHeight();
			$('.sticky-parent').css('height', h);


			if ($(window).width() <= 992 ) {
				$("#sticky_item").trigger("sticky_kit:detach");
			} else {
				$('.sticky-parent').removeClass('stick-detach');
				$("#sticky_item").trigger("sticky_kit:detach");
				$("#sticky_item").trigger("sticky_kit:unstick");

				$("#sticky_item").stick_in_parent();
			}
			

			

		});

		$('.sticky-parent').css('height', h);

		//$("#sticky_item").stick_in_parent();

	};

	$(window).load(function() {
		$('.flexslider').flexslider({
		  animation: "slide"
		});
	  });
	  
	var owlCrouselFeatureSlide = function() {
		$('.owl-carousel').owlCarousel({
			animateOut: 'fadeOut',
		   animateIn: 'fadeIn',
		   autoplay: true,
		   loop:true,
		   margin:0,
		   nav:true,
		   dots: false,
		   autoHeight: true,
		   items: 1,
		   navText: [
		      "<i class='icon-arrow-left3 owl-direction'></i>",
		      "<i class='icon-arrow-right3 owl-direction'></i>"
	     	]
		})
	};

	// Document on load.
	$(function(){
		fullHeight();
		counter();
		counterWayPoint();
		contentWayPoint();
		burgerMenu();

		clickMenu();
		// navActive();
		navigationSection();
		// windowScroll();


		mobileMenuOutsideClick();
		sliderMain();
		stickyFunction();
		owlCrouselFeatureSlide();
	});


}());

