import "./style.scss";

var portraitImageSmall = document.querySelector('#portrait-image-loaded')
var portraitImageOriginal = document.querySelector('.portrait-image');


var style = portraitImageOriginal.currentStyle || window.getComputedStyle(portraitImageOriginal, false);
var backgroundImage = style.backgroundImage.slice(4, -1).replace(/["']/g, "");

var image = new Image();
image.onload = function () {
	portraitImageSmall.classList.add("hidden");
}
image.src = backgroundImage;


