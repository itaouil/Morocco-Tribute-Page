//When window is loaded (images included)
$( window ).on( "load", function() {
	
	/* Google Map map */
	initMap();
	
	function initMap() {
		
		var morocco = {lat: 31.669746, lng: -7.973328};
		var moroccoAsWell = {lat: 27.125286, lng: -13.162500};
		
    var map = new google.maps.Map(document.getElementById('googleMap'), {
			zoom: 5,
			center: morocco
		});
        
		var marker = new google.maps.Marker({
			position: morocco,
      map: map
    });
		
		var marker = new google.maps.Marker({
			position: moroccoAsWell,
      map: map
    });
		
	}
	
	/* Sticky Header on scroll */
	var stickyNavTop = $('nav').offset().top;
	var stickyNavBottome = $('nav').offset().bottom;
	
	/* Toggle Nav Section */
	var destinationsNavTop = $('#destinations-section');
	
	/* Toggle Nav Section */
	var mapNavTop = $('#map-section');
	
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