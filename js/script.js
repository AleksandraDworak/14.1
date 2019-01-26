//Komentarz mentora: - popraw formatowanie
//- zamiast inserAdjacentHtml wystarczyloby appendChild
//- dla lepszej wydajnosci - zamiast dodawać kazdy element w pętli do DOM za kazdym razem - 
//dodaj je do siebie w pamięci i wsadź do DOM raz, po pętli


var templateItem = document.getElementById('template-carousel-item').innerHTML;	

Mustache.parse(templateItem);
var items = '';
var results = document.getElementById('carousel');	
for(var i = 0; i < cellData.length; i++){
	items += Mustache.render(templateItem, cellData[i]);
};
results.insertAdjacentHTML("beforeend", items);
	
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