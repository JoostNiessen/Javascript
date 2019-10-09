var year, yearJohn, yearJoost;
now = 2018;
ageJohn = 28;
ageMark = 33;


// Math Operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 4);
console.log(now / 10);

// Logical Operator
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// Typeof Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);

/************************************
// Operator precedence
*/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

x *= 2;
console.log(x);

/*************************************
 * CODING CHALLENGE
 */

// BMI = mass / height^2 = mass / (height * height)
// mass in kg and height in meters

var markHeight = 1.95;
var markMass = 80;

var johnHeight = 1.85;
var johnMass = 85;

var BodyMassIndexMark = markMass / (markHeight * markHeight);
var BodyMassIndexJohn = johnMass / (johnHeight * johnHeight);


var higherBMI = BodyMassIndexMark > BodyMassIndexJohn;

console.log(higherBMI);

if (higherBMI = false) {
  console.log("Marks BMI is higher than John's");
} else {
  console.log("Marks BMI is LOOOOOW ASL");
}


var firstName = "John";
var civilStatus = "single";

if (civilStatus === "Married") {
  console.log(firstName + " is Married!!");
} else {
  console.log(firstName + " will hopefully marry sometime in his miserable life");
}


var isMarried = true;
if (isMarried) {
  console.log(firstName + " is Married!!");
} else {
  console.log(firstName + " will hopefully marry sometime in his miserable life");
}


/****************************
 * Boolean Logic
 */

var firstName = "John";
var age = 30;

if (age < 13) {
  console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man.');
} else {
  console.log(firstName + " is a man");
}


/*********************************
 * The Ternary Operator and Switch Statements
 */

var firstName = "John";
var age = 22;

age >= 18 ? console.log(firstName + " drinks beer.") :
  console.log(firstName + " drinks juice.");

var drink = age >= 18 ? "beer" : "juice";
console.log(`${firstName} may only drink ${drink}`);

if (age >= 18) {
  var drink = "beer";
  console.log(firstName + ' may drink ' + drink);
} else {
  var drink = 'juice';
  console.log(firstName + ' may drink ' + drink);
}

// Switch Statements

var job = 'cop';
switch (job) {
  case 'teacher':
    console.log(firstName + ' teaches kids to code');
    break;
  case 'BAKER ':
    console.log(firstName + ' bakes the bread');
    break;
  case 'debugger':
    console.log(firstName + ' he is a bee dugger');
    break;
  default:
    console.log(firstName + ' Does completely shit');
}


var firstName = "John";
var age = 10;

switch (true) {
  case age < 13:
    console.log(firstName + " is a boy.");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager.");
    break;
  case age >= 20 && age < 30:
    console.log(firstName + " is a young man.");
    break;
  default:
    console.log(firstName + " is a man");
}

/***********************************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN
// Truthy values: NOT falsy values

var height;
height = 23;

if (height || height === 0) {
  console.log('defined');
} else {
  console.log('NOT NOT defined');
}

// equality Operators
height = 23;

if (height == '23') {
  console.log('the == operator does type coersion');
}

/*************************
 * CODING CHALLENGE
 */

var JohnGame1, JohnGame2, JohnGame3;
var MarkGame1, MarkGame2, MarkGame3;

JohnGame1 = 105;
JohnGame2 = 125;
JohnGame3 = 103;

MarkGame1 = 116;
MarkGame2 = 94;
MarkGame3 = 123;

var JohnAverage = (JohnGame1 + JohnGame2 + JohnGame3) / 3;
var MarkAverage = (MarkGame1 + MarkGame2 + MarkGame3) / 3;

switch (true) {
  case JohnAverage > MarkAverage:
    console.log('John won with an average of: ' + JohnAverage + ' compared to the ' + MarkAverage + ' of Mark');
    break;
  case MarkAverage > JohnAverage:
    console.log('Mark won with an average of: ' + MarkAverage + ' compared to the ' + JohnAverage + ' of John');
    break;
  case MarkAverage === JohnAverage:
    console.log('Mark and John both had an average of: ' + MarkAverage);
    break;
  default:
}

//  PART 2 with a SWITCH
//
// var JohnGame1, JohnGame2, JohnGame3;
// var MarkGame1, MarkGame2, MarkGame3;
// var MelissaGame1, MelissaGame2, MelissaGame3;
//
// JohnGame1 = 105; // 105 to make average
// JohnGame2 = 125;
// JohnGame3 = 103;
//
// MarkGame1 = 116;
// MarkGame2 = 94;
// MarkGame3 = 123;
//
// MelissaGame1 = 97;
// MelissaGame2 = 134;
// MelissaGame3 = 105;
//
// var JohnAverage = (JohnGame1 + JohnGame2 + JohnGame3) / 3;
// var MarkAverage = (MarkGame1 + MarkGame2 + MarkGame3) / 3;
// var MelissaAverage = (MelissaGame1 + MelissaGame2 + MelissaGame3) / 3;
//
// switch (true) {
//   case JohnAverage > MarkAverage && JohnAverage > MelissaAverage:
//       console.log('John won with an average of: ' + JohnAverage + ' compared to the ' + MarkAverage + ' of Mark and the ' + MelissaAverage + ' of melissa');
//     break;
//   case MarkAverage > JohnAverage && JohnAverage > MelissaAverage:
//       console.log('Mark won with an average of: ' + MarkAverage + ' compared to the ' + JohnAverage + ' of John and the ' + MelissaAverage + ' of melissa');
//     break;
//   case MarkAverage === JohnAverage && MelissaAverage:
//       console.log('Mark and John both had an average of: ' + MarkAverage);
//     break;
//   default:
// }

//PART 3 with a IF else


var JohnGame1, JohnGame2, JohnGame3;
var MarkGame1, MarkGame2, MarkGame3;
var MelissaGame1, MelissaGame2, MelissaGame3;

JohnGame1 = 105; // 105 to make average
JohnGame2 = 105;
JohnGame3 = 105;

MarkGame1 = 105;
MarkGame2 = 105;
MarkGame3 = 105;

MelissaGame1 = 105;
MelissaGame2 = 105;
MelissaGame3 = 105;

var JohnAverage = (JohnGame1 + JohnGame2 + JohnGame3) / 3;
var MarkAverage = (MarkGame1 + MarkGame2 + MarkGame3) / 3;
var MelissaAverage = (MelissaGame1 + MelissaGame2 + MelissaGame3) / 3;

if (JohnAverage > MarkAverage && JohnAverage > MelissaAverage) {
  console.log("John won with " + JohnAverage + ' points');
} else if (MarkAverage > JohnAverage && MarkAverage > MelissaAverage) {
  console.log("Mark won with " + MarkAverage + ' points');
} else if (MelissaAverage > JohnAverage && MelissaAverage > MarkAverage) {
  console.log("Melissa won with " + MelissaAverage + ' points');
} else {
  console.log('They all have the same');
}

/************************************
 * Functions
 */

function calculateAge(birthYear) {
  return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageJane = calculateAge(1998);
var ageMike = calculateAge(1943);

console.log(ageJohn, ageJane, ageMike);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement < 0) {
    console.log(firstName + ' is already retired');
  } else {
    console.log(firstName + ' retires in ' + retirement + ' years');
  }
}

yearsUntilRetirement(1940, 'John')

/************************************
 * Function Statements and Expressions
 */

var whatDoYouDo = function whatDoYouDo(job, firstName) {
  switch (job) {
    case 'teacher':
      return firstName + ' teaches kids how to code';
    case 'driver':
      return firstName + ' drives around in a cab';
    case 'designer':
      return firstName + ' designs beautiful websites';
    default:
      return ' does something else';
  }
}

console.log(whatDoYouDo('teacher', 'Josh'));


/***********************************8
 * Arrays
 */

var names = ['John', 'Mark', 'Jane']; // regular array
var years = new Array(1990, 1969, 1948); // also an array

console.log(names.length); // returns 3

// Mutate array data
names[1] = 'Ben'; // change value of [1]
names[names.length] = 'Mary' // adds mary to [3]

// Different datatypes
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('Blue'); // adds item to end of array
john.unshift('Mr.'); // adds item to beginning of array

john.pop(); // remove last
john.shift(); // remove first
console.log(john.indexOf(1990)); // returns place of object back

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);

// Coding CHALLENGE
var tipList = [];
var billList = [];


function getTip(billPrice) {
  if (billPrice < 50) {
    tipAmount = billPrice * 0.2;
    fullPrice = billPrice + tipAmount;

    tipList.push(tipAmount);
    billList.push(fullPrice);
  } else if (billPrice > 50 && billPrice < 200) {
    tipAmount = billPrice * 0.15;
    fullPrice = billPrice + tipAmount;

    tipList.push(tipAmount);
    billList.push(fullPrice);
  } else {
    tipAmount = billPrice * 0.15;
    fullPrice = billPrice + tipAmount;

    tipList.push(tipAmount);
    billList.push(fullPrice);
  }
}


getTip(23);

console.log(tipList);
console.log(fullPrice);

// Coding Challenge try 2

var billOne = 124;
var billTwo = 48;
var billThree = 232;

function calculateTip(bill) {
  if (bill <= 50) {
    return bill * 0.2;
  } else if (bill > 50 && bill <= 200) {
    return bill * 0.15;
  } else {
    return bill * 0.10;
  }
}

var tipOne = calculateTip(billOne);
var tipTwo = calculateTip(billTwo);
var tipThree = calculateTip(billThree);

var totalTips = [tipOne, tipTwo, tipThree];
var totalBills = [(tipOne + billOne), (tipTwo + billTwo), (tipThree + billThree)];

console.log('The individual tips are ' + totalTips[0] + ', ' + totalTips[1] + ' and ' + totalTips[2]);
console.log(totalBills);


// Jonas his wway   f

function tipCalc(bill) {
  var percentage;
  if (bill < 50) {
    percentage = .2;
  } else if (bill > 50 && bill < 200) {
    percentage = .15;
  } else {
    percentage = .1;
  }
  return bill * percentage;
}

var bills = [124, 48, 268];
var tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];
console.log('The individual tips are ' + tips[0] + 'this one ' + tips[1] + "  " + tips[2]);



/*******************************************
 * Objects and properties
 */

var john = {
  firstName: 'John', // key : value
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Emily'],
  job: 'teacher',
  isMarried: false
};

console.log(john.firstName); // Dot notation use the key name instant
console.log(john['lastName']); // Brackets use the key name as a string

var x = 'birthYear';

john[x] = 1892;
john.birthYear = 1200;
john.isMarried = true;

console.log(john);

// Empty object notation

var jane = new Object(); // create new empty object

jane.firstName = 'Jane';
jane.birthYear = 1980;
jane['lastName'] = 'Smith';
console.log(jane);


/*************************************
 * Objects and Methods
 */

var john = {
  firstName: 'John', // key : value
  lastName: 'Smith',
  birthYear: 1990,
  calcAge: function() {
    this.age = 2018 - this.birthYear;
  }
};

john.calcAge();

console.log(john);



// First stage, get calc from external function call

var samu = {
  firstName: 'Samu', // key : value
  lastName: 'Smith',
  birthYear: 1940,
  calcAge: function(birthYear) {
    return 2018 - birthYear;
  }
};

console.log(samu.calcAge(1940));


// Second stage, get calc from inside the method in the Object by using 'this.'

var samu = {
  firstName: 'Samu', // key : value
  lastName: 'Smith',
  birthYear: 1940,
  calcAge: function() {
    return 2018 - this.birthYear;
  }
};

console.log(samu.calcAge());


// Third stage, assign outcome to new variable inside the method
// by declaring a variable with 'this.


var samu = {
  firstName: 'Samu', // key : value
  lastName: 'Smith',
  birthYear: 1940,
  calcAge: function() {
    this.age = 2018 - this.birthYear; // Stage 3.2: we create age and assign the outcome to it
  }
};

// samu.age = samu.calcAge(); // Stage 3.1: we now add a property to the object and pass the outcome of the function inside

samu.calcAge(); // Stage 3.2.1: and call the calcAge() function

console.log(samu)


/**************************************
 * Coding Challenge
 */

var john = {
  fullName: 'John Smith',
  mass: 65,
  height: 1.75,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
}

var mark = {
  fullName: 'Mark Webber',
  mass: 89,
  height: 1.85,
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
}

// john.;
// mark.calcBMI();

function calculateBMI() {
  if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI: ' + john.BMI);
  } else if (john.BMI === mark.BMI) {
    console.log(john.fullName + ' and ' + mark.fullName) + ' both have the same BMI';
  } else {
    console.log(mark.fullName + ' has a higher BMI: ' + mark.BMI);
  }
}

calculateBMI();



/********************************
 * Loops and iterations
 */

for (var i = 0; i < 10; i++) {
  console.log(i);
}


var john = ['John', 'Smith', 1990, 'designer', false];
// Not handy way
console.log(john[0]);
console.log(john[1]);
console.log(john[2]);
console.log(john[3]);

for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

var i = 0;
while (i < john.lenght) {
  console.log(john[1]);
  i++;
}


// continue and break Statements
var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') continue; // breaks on statement
  console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== 'string') break; //exits the loop on breakpoint
  console.log(john[i]);
}

// Mini coding challenge to loop backwards: First Try
for (var i = john.length; i >= 0; i--) {
  console.log(john[i]);
}

// Mini Coding challenge official answer
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}

// CODING CHALLENGE 5

// billOne = 124;
// billTwo = 48;
// billThree = 268;
// billFour = 180;
// billFive = 43;

// var billList = {
//   _billAmount: [124, 48, 268, 180, 43]
// }
//
//
// var _billAmount = billList.billAmount;
//
// console.log(_billAmount);
//
// var tipList = {
//   calcTip: function() {
//     for (var i = 0; i < _billAmount.length; i++) {
//       _billAmount[i]
//       var percentage;
//       if (_billAmount < 50) {
//         percentage = 0.2;
//       } else if (_billAmount >= 50 && _billAmount < 200) {
//         percentage = 0.15;
//       } else {
//         percentage = 0.1;
//       }
//       var berekening =  percentage * _billAmount;
//     }
//
//   }
// }
//
// tipList.calcTip();

//
// var john = {
//   fullName: 'John Smith',
//   bills: [124, 48, 268, 180, 43],
//   calcTips: function() {
//     this.tips = [];
//     this.finalBills = [];
//
//     for (var i = 0; i < this.bills.lenght; i++) {
//       bills[i]
//       // determine percentage on the tipping rules
//
//       var percentage;
//       if (this.bills[i] < 50) {
//         percentage = 0.2;
//       } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
//         percentage = 0.25;
//       } else {
//         percentage = 0.1;
//       }
//       return this.bills[i] * percentage;
//     }
//   }
// }

// when using bills, you access a not defined property
//  when using this.bills you access the Array
//  when using this.bills[i] you access the current position the loop is going through


// var john = {
//   fullName: 'John Smith',
//   bills: [124, 48, 268, 180, 42],
//   calcTips: function() {
//       this.tips = [];
//       this.finalValues = [];
//
//       for (var i = 0; i < this.bills.lenght; i++) {
//         // determine percentage on the tipping rules
//
//         var percentage;
//         var bill = this.bills[i];
//
//         if (bill < 50) {
//           percentage = .2;
//         } else if (bill >= 50 && bill < 200) {
//           percentage = .15;
//         } else {
//           percentage = .1;
//         }
//
//         this.tips[i] = bill * percentage;
//         this.finalValues[i] = bill + percentage * bill;
//       }
//
//     }
//   }
//
// john.calcTips();
//
// console.log(john);
//
//

var john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {

      var bill = this.bills[i];
      var percentage;

      if (bill < 50) {
        percentage = .2;
      } else if (bill >= 50 && bill < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }
      // add results to the corresponing Arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + percentage * bill;
    }
  }
}


console.log(john);

var mark = {
  fullName: 'John Smith',
  bills: [77, 375, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {

      var bill = this.bills[i];
      var percentage;

      if (bill < 100) {
        percentage = .2;
      } else if (bill >= 100 && bill < 300) {
        percentage = .15;
      } else {
        percentage = .25;
      }
      // add results to the corresponing Arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + percentage * bill;
    }
  }
}

mark.calcTips();


function calcAverage() {
    var sum;
    var sumMark;
    var johnTips = john.tips;
    var markBills = mark.finalValues;

    for (var i = 0; i < johnTips.length; i++) {
      sum = johnTips[i] += sum;
    }

    console.log(johnTips);

    console.log(sum);

    // var averageJohn = sumJohn / johnTips.length;

    // console.log(averageJohn);

}

function calcAverage() {
  var johnTips = john.tips;
  var totalJohn = 0;

  var markTips = mark.tips;
  var totalMark = 0;

  for (var i = 0; i < johnTips.length; i++) {
    totalJohn = totalJohn + johnTips[i];
  }

  for (var i = 0; i < markTips.length; i++) {
    totalMark = totalMark + markTips[i];
  }

  var averageJohn = totalJohn / johnTips.length;
  var averageMark = totalMark / markTips.length;

  if (averageJohn > averageMark) {
    console.log("John paid more tips than Mark: " + averageJohn);
  } else {
    console.log("Mark paid more: " + averageMark);
  }
}


function calcAverage(tips) {
  var total = 0;

  for (var i = 0; i < tips.length; i++) {
    total = total + tips[i];
  }

  return total / tips.length;
}


john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

if (john.average > mark.average) {
  console.log("John is a poor guy");
} else {
  console.log("John is a moneymachine");
}
