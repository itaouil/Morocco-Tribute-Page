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
	var stickyNavBottom = $('nav').offset().bottom;
	
	/* Map nav toggle */
	var mapNav = $('#glimpse-section').offset().bottom;

	//Define Function (navbar sticky header)
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
	
	//Define Function (map nav toggle)
	var navMapToggle = function(){

		if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $('#map-nav').addClass('nav-toggle');
			$('#glimpse-nav').removeClass('nav-toggle');
		}
		
		else {
			$('#map-nav').removeClass('nav-toggle');
		}

	};

	stickyNav();
	navMapToggle();

	$(window).scroll(function() {
		stickyNav();
		navMapToggle();
	});





});