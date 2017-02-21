//When window is loaded (images included)
$( window ).on( "load", function() {

	/* Google Map map */
	initMap();

	function initMap() {

		var morocco = {lat: 31.669746, lng: -7.973328};

		var map = new google.maps.Map(document.getElementById('googleMap'), {
			zoom: 5,
			center: morocco
		});

		var marker = new google.maps.Marker({
			position: morocco,
			map: map
		});

	}

	/* Sticky Header on scroll */
	var stickyNavTop = $('nav').offset().top;

	//Define Function
	var stickyNav = function(){

		var scrollTop = $(window).scrollTop();

		if (scrollTop > stickyNavTop) {
			$('nav').addClass('sticky');
			$('#glimpse-nav').addClass('nav-toggle');
		}

		else {
			$('nav').removeClass('sticky');
			$('#glimpse-nav').removeClass('nav-toggle');
		}

	};

	stickyNav();

	$(window).scroll(function() {
		stickyNav();
	});





});