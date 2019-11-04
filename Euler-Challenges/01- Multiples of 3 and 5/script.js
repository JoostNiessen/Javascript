var n;
var totalNumber;
var variableNumber;
var multiples= [];
var sumOfMultiples = 0;

function getMultiples(variableNumber) {
    n = Math.floor(9 / variableNumber);
    console.log("n: " + n);  
    return n;
}

function putInArray(x){
    var result = 0;
    for (i = 0; i < n; i++) {
        result += x;
        multiples.push(result);
    }
}


function getSumOfMultiples() {
    for (i = 0; i < multiples.length; i++) {  

        singleValue = multiples[i];
        sumOfMultiples += singleValue;
    }
    console.log(sumOfMultiples);

}



getMultiples(3);

putInArray(3);


console.log(multiples);

getSumOfMultiples();


// console.log(three + five);







// get the multiples below 10 from 5 or 3
// var five = Math.floor(9 / 5);
// var three = Math.floor(9 / 3);

// put these in an array


// sum up the array



