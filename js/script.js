
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