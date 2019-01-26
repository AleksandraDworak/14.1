'use strict';
(function(){

var templateItem = document.getElementById('template-carousel-item').innerHTML;	
Mustache.parse(templateItem);
var results = document.getElementById('carousel');
var items= '';
	for(var i = 0; i < cellData.length; i++){
		items += Mustache.render(templateItem, cellData[i]) 	
	};
results.insertAdjacentHTML('beforeend', items);
	
var flkty = new Flickity('.carousel');
var restartButton = document.querySelector('.restart');
restartButton.addEventListener( 'click', function() {
	flkty.selectCell( 0, true, true )
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
	progress = Math.max( 0, Math.min( 1, progress ) );
	progressBar.style.width = progress * 100 + '%';
});

window.initMap = function() {
    var firstSlide = {lat: 52.408086, lng: 16.905217};
    var map = new google.maps.Map(
    	document.getElementById('map'), {zoom: 12, center: firstSlide});
	var marker = new google.maps.Marker({position: firstSlide, map: map});

	for(var i = 0; i < cellData.length; i++){
		var marker = new google.maps.Marker({
			position: {lat:Number(cellData[i].coords.lat), lng: Number(cellData[i].coords.lng)}, 
			map: map
		});
	};
}

})();