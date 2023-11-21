const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// * On crée un événement: lorsque on clique sur les flèches, cela gère le changement d'images dans le carrousel. * //

let flecheLeft = document.getElementById("move_left");
flecheLeft.addEventListener("click", () => {
	console.log("Glisser vers l'image à gauche")
});

let flecheRight = document.getElementById("move_right");
flecheRight.addEventListener("click", () => {
	console.log("Glisser vers l'image à droite")
});




