'use strict';
var imageArray = [];
var imageNameArray = ['img/kittyimg1.png', 'img/kittyimg2.jpg', 'img/kittyimg3.png'];
var userScore = localStorage.getItem('scorePersist');
if (userScore) {
  kittyCounter = JSON.parse(userScore);
} else {
  localStorage.setItem('scorePersist',JSON.stringify(kittyCounter));
}
// the code below will display the user's score, but needs the local storage component in place to be functional.

var kittyCounter = 0;
var randomNumber1, randomNumber2;
document.getElementById("answer").focus();
var gameInput = document.getElementById('gameInput');

var printQuestion = document.getElementById('printQuestion');
//function that gives randomNumber1 and randomNumber2 random content between 0-11
function getRandomNumber () {
    randomNumber1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    randomNumber2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    catRandom = Math.floor(Math.random() * (imageNameArray.length - 0 )) + 0;
    console.log("catRadom" + catRandom);
    console.log('randomNumber1 is ' + randomNumber1 + '  randomNumber2 is ' + randomNumber2);
    printQuestion.textContent = randomNumber1 + ' + ' + randomNumber2 + ' =';
}
getRandomNumber();



// var kittyimg1 = new Image(100, 100);
// kittyimg1.src = 'img/kittyimg1.png';
// kittyimg1.alt = 'alt';
// var kittyimg2 = new Image(100, 100);
// kittyimg2.src = 'img/kittyimg2.jpg';
// kittyimg2.alt = 'alt';

var element = document.getElementById('submitAnswer');

//event handler for the answer submission form
function questionRandomizer(event) {
	console.log(event); // so you can see what the comment is
	event.preventDefault(); //stop the default behavior of the submit event
  //store the new inputs as new objects for ease of use
  var answer = parseFloat(event.target.answer.value);
//if/else statement, judges whether the input is correct
if (answer === (randomNumber1 + randomNumber2)) {
    console.log('Great job!');
    kittyCounter += 1;
    var kittyImageHook = document.getElementById('kittyMeow');
        var kittyImageElement = document.createElement('img');
    kittyImageElement.setAttribute("src", imageNameArray[catRandom]);
      kittyImageElement.setAttribute("class", "correctAnswer");
    //append element to kittyMeow
    console.log("kitty appeared");
    kittyImageHook.appendChild(kittyImageElement);
    event.target.answer.value = null;
    localStorage.setItem('scorePersist',JSON.stringify(kittyCounter));
    getRandomNumber();
   }
    else {
        console.log('not the right answer')
        event.target.answer.value = null;
        localStorage.setItem('scorePersist',JSON.stringify(kittyCounter));
        getRandomNumber();
      }
  }
//event listener for the answer form
element.addEventListener('submit', questionRandomizer);
//hides input and question display for the games until game starts
gameInput.style.visibility = 'hidden';

var counter = ''
//countdown to game start
var handleCountdown = function(){
(function(){
    counter = 4;
  setInterval(function() {
    counter--;
    if (counter > -1) {
      startGame.style.visibility = 'hidden';
      var span = document.getElementById('countdownCounter');
      span.innerHTML = counter;
    }
    if (counter === 0) {
      gameInput.style.visibility = 'visible';
      document.getElementById("answer").focus();
      span.innerHTML = 'GO!';
    }
    if (counter < 0) {
      countdownCounter.style.visibility = 'hidden';
      clearInterval(counter);
    }
  }, 1000);
})();
}

// function that reps the link to score.html
var showScoreLink = function(){
  var scoreLink = document.getElementById('scoreLink');
  scoreLink.style.visibility = 'hidden';
}
showScoreLink();
//game timer
var handleGameClock = function() {
  (function() {
    var gameCounter = 25;
    showScoreLink();
    setInterval(function() {
      gameCounter--;
      var gameClock = document.getElementById('gameClock');
      gameClock.innerHTML = gameCounter;
      if (gameCounter > 20) {
        gameClock.style.visibility = 'hidden';
        };
      if (gameCounter === 20) {
        gameClock.style.visibility = 'visible'
      }
      if (gameCounter === 0) {
        gameClock.innerHTML = 'Time\'s Up!';
        gameInput.style.visibility = 'hidden';
        clearInterval(gameCounter);
      };
      if (gameCounter === -1) {
        gameClock.style.visibility = 'hidden';
        scoreLink.style.visibility = 'visible';
        clearInterval(gameCounter);
      };
    }, 1000);
  })();
};

var hideInstructions = function(){
  var instruct = document.getElementById('instructions');
  instruct.style.visibility = 'hidden'
}


var button = document.getElementById('startGame');
startGame.addEventListener('click', handleCountdown);
startGame.addEventListener('click', handleGameClock);
startGame.addEventListener('click', hideInstructions);
