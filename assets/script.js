// * Tableau pour le carrousel avec les images et le texte. * //

const slides = [
	{
		"image": "assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// * Ici se trouvent les variables globales. * //

const bulletsPoints = document.querySelector(".dots");
let index = 0;
let flecheLeft = document.getElementById("move_left");
let flecheRight = document.getElementById("move_right");
let img = document.querySelector(".banner-img");
let textImg = document.querySelector("#banner p");


// * On ajoute les bullets points dans le carrousel * //

function apparitionPoints() {
	for (let i = 0; i < slides.length; i++) {
		let dot = document.createElement("div");
		dot.classList.add("dot");
		bulletsPoints.appendChild(dot);
		if (i == index) {
			dot.classList.add("dot_selected")
		} else {
			dot.classList.remove("dot_selected")
		}
	}
}
apparitionPoints()


// * Changement d'images et de texte et changement de point actif au clic droit. * //

function clicDroite() {
	flecheRight.addEventListener("click", () => {
		const slidePoints = document.querySelectorAll(".dots .dot");
		slidePoints[index].classList.remove("dot_selected");
		index++
		if (index > slides.length - 1) {
			index = 0;
		}
		slidePoints[index].classList.add("dot_selected");
		textImg.innerHTML = slides[index].tagLine;
		img.src = slides[index].image;
	})
}
clicDroite()


// * Changement d'images et de texte et changement de point actif au clic gauche. * //

function clicGauche() {
	flecheLeft.addEventListener("click", () => {
		const slidePoints = document.querySelectorAll(".dots .dot");
		slidePoints[index].classList.remove("dot_selected");
		index--
		if (index < 0) {
			index = slides.length - 1;
		}
		slidePoints[index].classList.add("dot_selected");
		textImg.innerHTML = slides[index].tagLine;
		img.src = slides[index].image;
	})
}
clicGauche()