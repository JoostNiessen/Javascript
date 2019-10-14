var score, lastScore, shotCount, res, turnCounter, playerCounter;

shotCount = 1;

gamestate = false;


turnCounter = 0;
playerCounter = 1; 

document.querySelector('.btn-roll').addEventListener('click', function() {
    turnCounter += 1;

    var dice1 = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);


    document.getElementById('dice-1').src = `img/dice-${dice1}.png`;
    document.getElementById('dice-2').src = `img/dice-${dice2}.png`;

    score = "" + dice1 + dice2 + "";

    console.log(`${dice1} 
    ${dice2}`);
    

    if (dice2 > dice1) {
        res = score.replace(dice1, dice2) - dice2 + dice1;
        document.getElementById("score").innerHTML = res;
    } else if (dice1 === dice2) {
        score = dice1 * 100;
        document.getElementById("score").innerHTML = score;       
    } else if (score == 21) {
        shotCount = shotCount + 1;
        document.getElementById("shot-count").innerHTML = shotCount;   
        document.getElementById("score").innerHTML = score;       
    } else if (res == 21) {
        shotCount = shotCount + 1;
        document.getElementById("shot-count").innerHTML = shotCount;   
        document.getElementById("score").innerHTML = score; 
    } else if (dice1 > dice2) {
        document.getElementById("score").innerHTML = score;
    }

    document.getElementById("turn-counter").innerHTML = turnCounter;  
    
    if (turnCounter == 3) {
        turnCounter = 0;
        playerCounter += 1;
        document.getElementById("player-counter").innerHTML = playerCounter;
    }
    
    if (playerCounter == 1) {
        document.querySelector('.bg-color').style.backgroundColor = 'pink';
    } else if (playerCounter == 2) {
        document.querySelector('.bg-color').style.backgroundColor = 'lightblue';
    } else if (playerCounter == 3) {
        document.querySelector('.bg-color').style.backgroundColor = 'lightgreen';
    } else if (playerCounter == 4) {
        document.querySelector('.bg-color').style.backgroundColor = 'yellow';
    } else if (playerCounter == 5) {
        document.querySelector('.bg-color').style.backgroundColor = 'blanchedalmond';
    }



})




