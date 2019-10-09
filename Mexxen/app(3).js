var score, lastScore, shotCount;

shotCount = 1;


document.querySelector('.btn-roll').addEventListener('click', function() {
    var dice1 = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);


    document.getElementById('dice-1').src = `img/dice-${dice1}.png`;
    document.getElementById('dice-2').src = `img/dice-${dice2}.png`;

    score = "" + dice1 + dice2 + "";



    if (dice2 > dice1) {
        var res = score.replace(dice1, dice2) - dice2 + dice1;
        document.getElementById("score").innerHTML = res;
    } else if (dice1 === dice2) {
        score = dice1 * 100;
        document.getElementById("score").innerHTML = score;       
    } else if (score == 21 || score == 12) {
        shotCount = shotCount + 1;
        document.getElementById("shot-count").innerHTML = shotCount;   
        document.getElementById("score").innerHTML = score;       
    } else if (dice1 > dice2) {
        document.getElementById("score").innerHTML = score;
    }

  



    

    

    
})


