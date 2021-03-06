/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying;

var diceDOM = document.querySelector('.dice');


function initializeGame() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector(`#name-0`).textContent = 'Player 1';
    document.querySelector(`#name-1`).textContent = 'Player 2';
    document.querySelector(`.player-0-panel`).classList.remove('winner');
    document.querySelector(`.player-1-panel`).classList.remove('winner');
    document.querySelector(`.player-0-panel`).classList.remove('active');
    document.querySelector(`.player-0-panel`).classList.add('active');
    document.querySelector(`.player-1-panel`).classList.remove('active');


}

initializeGame();


document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //  3. update round score IF the rolled number is NOT 1
    if (dice !== 1) {
        // add to score
        roundScore += dice;
        document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
    } else {
        nextPlayer();
    }
    }
    


});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
    // add currentScore to Globalscore
    scores[activePlayer] += roundScore;

    //  Update UI
    document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];

    // CHeck if player won the game
    if (scores[activePlayer] >= 20) {
        document.querySelector(`#name-${activePlayer}`).textContent = 'WINNER';
        document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
        document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
        document.querySelector('.dice').style.display = 'none';
        gamePlaying = false;
    } else {
        nextPlayer();
    }
    }


});

document.querySelector('.btn-new').addEventListener('click', initializeGame);


function nextPlayer() {
            // next player
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
    
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
    
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
    
    
            // document.querySelector('.player-0-panel').classList.remove('active');
            // document.querySelector('.player-1-panel').classList.add('active');
        diceDOM.style.display = 'none';
}