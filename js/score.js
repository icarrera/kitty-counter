var printScore = document.getElementById('your-score');
var kittyScore = localStorage.getItem('scorePersist')
printScore.textContent = 'You got ' + kittyScore + ' kitties!';
