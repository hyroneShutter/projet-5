const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Declarations des variables

let arrowLeft = document.querySelector(".arrow_left");

let arrowRight = document.querySelector(".arrow_right");

let bannerImg = document.querySelector(".banner-img");

let bannerTitle = document.querySelector(".banner-title");

let currentSlide = 0;

// Ecouteur d'evenement des fleches droite et gauche

arrowLeft.addEventListener("click", function () {
  previousSlide();
});

// Fleche gauche

arrowRight.addEventListener("click", function () {
  nextSlide();
});

/* Fonction de mise a jour drs images, textes
Fleche Droite */

function nextSlide() {
  currentSlide++;

  if (currentSlide === slides.length) {
    currentSlide = 0;
  }

  bannerImg.src = slides[currentSlide].image;
  bannerTitle.innerHTML = slides[currentSlide].tagLine;

  updateDots();
  console.log(bannerTitle, bannerImg);
  console.log("click fleche droite");
}

// Fleche Gauche

function previousSlide() {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  bannerImg.src = slides[currentSlide].image;
  bannerTitle.innerHTML = slides[currentSlide].tagLine;

  updateDots();
  console.log(bannerTitle, bannerImg);
  console.log("click fleche gauche");
}

// Fonction de creation et de suppression des bullets points

function updateDots() {
  const dotContainer = document.querySelector(".dots");

  while (dotContainer.firstChild) {
    dotContainer.removeChild(dotContainer.firstChild);
  }

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");

    dot.classList.add("dot");

    if (i === currentSlide) {
      dot.classList.add("dot_selected");
    }

    dotContainer.appendChild(dot);
  }
}

// Appel de la fonction qui nitialise les bullets points

updateDots();
console.log('mise a jour des point');
