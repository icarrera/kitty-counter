var printScore = document.getElementById('your-score');
var kittyScore = localStorage.getItem('scorePersist')
// printScore.textContent = 'You got ' + kittyScore + ' kitties!';

var attributeImages = ['img/cucumber.gif','img/dog.jpg','img/litterbox.jpg','img/bath-cat.jpg','img/sweater_cat.jpg','img/catnip.jpg','img/magic_cat.gif'];

var imagePrint = document.getElementById('finalScoreImg');

if (parseInt(kittyScore) === 0) {
  printScore.textContent = 'You got ' + kittyScore + ' kitties. You are a cucumber, you scare cats';
  var kittyImageElement = document.createElement('img');
  kittyImageElement.setAttribute('src', attributeImages[0]);
  imagePrint.appendChild(kittyImageElement);

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
