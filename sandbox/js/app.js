'use strict';

var imageArray = [];
var imageNameArray = ['kittyimg1.png', 'kittyimg2.jpg', 'kittyimg3.png',
                      'kittyimg4.png', 'kittyimg5.png', 'kittyimg6.png',
                      'kittyimg7.png'];
for(var i = 0; i < imageNameArray.length; i += 1) {
  imageArray[i] = new Image();
  imageArray[i].src = 'img/' + imageNameArray[i];
  imageArray[i].onload = function() {
    console.log(i, imageArray[i]);
    this.alt = 'Kitty #' + (i + 1);
  }
}

function randomCatImage() {
  var arrLength = imageArray.length;
  return imageArray[Math.floor(Math.random() * arrLength)];
}

function randomCatNapSpot() {
  var topOfRange = 300;
  return Math.floor(Math.random() * topOfRange);
}


var canvasPort = document.getElementById('viewport');
var ctx = canvasPort.getContext('2d');

var iHazNewKittehImage = randomCatImage();
// iHazNewKittehImage.onload = function() {
//   loadKitteh(iHazNewKittehImage)
// }

function loadKitteh(iHazKittehImage) {
  console.log(iHazKittehImage);
  ctx.drawImage(iHazKittehImage, 0, 0, 100, 100);
}


function iHazFunkshunNow() {
  loadKitteh(iHazNewKittehImage);
}
