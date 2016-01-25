'use strict';
var randomNumber1, randomNumber2;

var printQuestion = document.getElementById('printQuestion');
//function that gives randomNumber1 and randomNumber2 random content between 0-11
function getRandomNumber () {
    randomNumber1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    randomNumber2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    console.log('randomNumber1 is ' + randomNumber1 + '  randomNumber2 is ' + randomNumber2);
    printQuestion.textContent = randomNumber1 + ' + ' + randomNumber2 + ' =';
}
getRandomNumber();


var element = document.getElementById('submitAnswer');

//event handler for the answer submission form
function questionRandomizer(event) {
	console.log(event); // so you can see what the comment is
	event.preventDefault(); //stop the default behavior of the submit event
  //store the new inputs as new objects for ease of use
  var answer = parseFloat(event.target.answer.value);

  if (answer === (randomNumber1 + randomNumber2)) {
    console.log('Great job!');
    kittyCounter += 1
    event.target.answer.value = null;
    getRandomNumber();
  }
    else {
        console.log('not the right answer')
        event.target.answer.value = null;
        getRandomNumber();
  }
}
//event listener for the answer form
element.addEventListener('submit', questionRandomizer);
