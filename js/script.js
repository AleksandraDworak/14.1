
var templateItem = document.getElementById('template-carousel-item').innerHTML;	

	Mustache.parse(templateItem);
	

	var results = document.getElementById('carousel');
	for(var i = 0; i < cellData.length; i++){

		results.insertAdjacentHTML('beforeend', Mustache.render(templateItem, cellData[i]));
	};
	
	
var flkty = new Flickity('.carousel');

var previousButton = document.querySelector('.restart');
previousButton.addEventListener( 'click', function() {
  flkty.selectCell( 0, true, true )
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});