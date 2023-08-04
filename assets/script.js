const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// declarations variables
let arrowLeft = document.querySelector('.arrow_left');

let arrowRight = document.querySelector('.arrow_right');

let bannerImg = document.querySelector('.banner-img');

let bannerTitle = document.querySelector('.banner-title');

let dots = document.querySelector('.dots');

let currentSlide = 0;


// ecouteur d'evenement des fleches droite et gauche
arrowLeft.addEventListener("click", function() {
	previousSlide()
});

arrowRight.addEventListener("click", function() {
	nextSlide()
});


dots = slides.length;
console.log(dots);


function nextSlide(){
currentSlide++;
	if(currentSlide === slides.length){
		currentSlide = 0;
	}
	bannerImg.src = slides[currentSlide].image;
	bannerTitle.innerHTML = slides[currentSlide].tagLine;

	console.log(bannerTitle, bannerImg);
	console.log('click fleche droite')
};
  
function previousSlide(){
	currentSlide--;
	if(currentSlide < 0){
		currentSlide = slides.length - 1;
	}
	bannerImg.src = slides[currentSlide].image;
	bannerTitle.innerHTML = slides[currentSlide].tagLine;

	console.log(bannerTitle, bannerImg);
	console.log('click fleche gauche')
};

