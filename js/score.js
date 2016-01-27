var printScore = document.getElementById('your-score');
var kittyScore = localStorage.getItem('scorePersist')
// printScore.textContent = 'You got ' + kittyScore + ' kitties!';

var scoreAttributeImages = [];
var attributeImages = ['cucumber.gif','dog.jpg','litterbox.jpg','bath-cat.jpg','sweater_cat.jpg','catnip.jpg','magic_cat.gif'];

function loadAttributeImages () {
  for(var i = 0; i < attributeImages.length; i += 1) {
      scoreAttributeImages[i] = new Image();
      scoreAttributeImages[i].src = 'img/' + scoreAttributeImages[i];
      scoreAttributeImages[i].alt = 'Attribute type #' + (i);
      }
    }

loadAttributeImages();
var imagePrint = document.getElementById('finalScore');

if (parseInt(kittyScore) === 0) {
  printScore.textContent = 'You got ' + kittyScore + ' kitties. You are a cucumber, you scare cats';
  imagePrint.textContent = scoreAttributeImages[0];
} else if (parseInt(kittyScore) >= 1 & parseInt(kittyScore) <= 3 ) {
  printScore.textContent = 'You got ' + kittyScore + ' kitties. You are a dog person';
} else if (parseInt(kittyScore) >= 3 & parseInt(kittyScore) <= 5) {
  printScore.textContent = 'You got ' + kittyScore + ' kitties. You are a litter box';
} else if (parseInt(kittyScore) >= 6 & parseInt(kittyScore) <= 8) {
  printScore.textContent = 'You got ' + kittyScore + ' kitties. You are a cat taking a bath, you aren’t happy but you’re at least a cat.';
} else if (parseInt(kittyScore) >= 8 & parseInt(kittyScore) <= 10) {
  printScore.textContent = 'You got ' + kittyScore + ' kitties. You are a cat on a walk';
} else if (parseInt(kittyScore) >= 11 & parseInt(kittyScore) <= 13) {
  printScore.textContent = 'You got ' + kittyScore + ' kitties. You are a a cat wearing a holiday sweater';
} else if (parseInt(kittyScore) >= 14 & parseInt(kittyScore) <= 19) {
  printScore.textContent = 'You got ' + kittyScore + ' kitties. You are a catnip';
} else {
  printScore.textContent = 'You got ' + kittyScore + ' kitties. You are a cat magician!';
};
