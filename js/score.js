var allParticipantScores = [];
var printScore = document.getElementById('your-score');
var kittyScore = localStorage.getItem('scorePersist')
// printScore.textContent = 'You got ' + kittyScore + ' kitties!';

var attributeImages = ['img/cucumber.gif','img/dog.jpg','img/litterbox.jpg','img/bath-cat.jpg','img/cat_on_walk.jpg','img/sweater_cat.jpg','img/catnip.jpg','img/magic_cat.gif'];

var imagePrint = document.getElementById('finalScoreImg');


function clearScoreArray() {
if (localStorage.totalScores) {
 allParticipantScores = [];
 allParticipantScores = JSON.parse(localStorage.scoresOfGamesPast);
} else {
  console.log('Local storage empty!! Initializing!');
}
};

clearScoreArray();

var previousScores = document.getElementById('previousScores');

function createList () {
for (var i = ((allParticipantScores.length) - 1); i > 0; i--) {
  var listScore = document.createElement('li');
  var date = new Date(allParticipantScores[i].scoreDate);
  listScore.textContent = date + ': your score was ' + allParticipantScores[i].additionCount;
  previousScores.appendChild(listScore);
}
}

createList ();

if (parseInt(kittyScore) === 0) {
  printScore.textContent = 'You got ' + kittyScore + ' kitties. You are a cucumber, you scare cats';
  var kittyImageElement = document.createElement('img');
  kittyImageElement.setAttribute('src', attributeImages[0]);
  imagePrint.appendChild(kittyImageElement);

} else if (parseInt(kittyScore) >= 1 & parseInt(kittyScore) <= 3 ) {
  printScore.textContent = 'You got ' + kittyScore + ' kitties. You are a dog person';
  var kittyImageElement = document.createElement('img');
  kittyImageElement.setAttribute('src', attributeImages[1]);
  imagePrint.appendChild(kittyImageElement);

} else if (parseInt(kittyScore) >= 3 & parseInt(kittyScore) <= 5) {
  printScore.textContent = 'You got ' + kittyScore + ' kitties. You are a litter box';
  var kittyImageElement = document.createElement('img');
  kittyImageElement.setAttribute('src', attributeImages[2]);
  imagePrint.appendChild(kittyImageElement);

} else if (parseInt(kittyScore) >= 6 & parseInt(kittyScore) <= 8) {
  printScore.textContent = 'You got ' + kittyScore + ' kitties. You are a cat taking a bath, you aren’t happy but you’re at least a cat.';
  var kittyImageElement = document.createElement('img');
  kittyImageElement.setAttribute('src', attributeImages[3]);
  imagePrint.appendChild(kittyImageElement);

} else if (parseInt(kittyScore) >= 8 & parseInt(kittyScore) <= 10) {
  printScore.textContent = 'You got ' + kittyScore + ' kitties. You are a cat on a walk';
  var kittyImageElement = document.createElement('img');
  kittyImageElement.setAttribute('src', attributeImages[4]);
  imagePrint.appendChild(kittyImageElement);

} else if (parseInt(kittyScore) >= 11 & parseInt(kittyScore) <= 13) {
  printScore.textContent = 'You got ' + kittyScore + ' kitties. You are a a cat wearing a holiday sweater';
  var kittyImageElement = document.createElement('img');
  kittyImageElement.setAttribute('src', attributeImages[5]);
  imagePrint.appendChild(kittyImageElement);

} else if (parseInt(kittyScore) >= 14 & parseInt(kittyScore) <= 19) {
  printScore.textContent = 'You got ' + kittyScore + ' kitties. You are a catnip';
  var kittyImageElement = document.createElement('img');
  kittyImageElement.setAttribute('src', attributeImages[6]);
  imagePrint.appendChild(kittyImageElement);
} else {
  printScore.textContent = 'You got ' + kittyScore + ' kitties. You are a cat magician!';
  var kittyImageElement = document.createElement('img');
  kittyImageElement.setAttribute('src', attributeImages[7]);
  imagePrint.appendChild(kittyImageElement);
};
