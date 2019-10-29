// var john = {
//     name: 'john',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     var age;
// }

// Person.prototype.calculateAge = function() {
//     age = 2016 - this.yearOfBirth;
//     console.log(age);
// }

// Person.prototype.isElder = function() {
//     if (age > 50) {
//         console.log(this.name + ' is Old');      
//     } else {
//         console.log(this.name + ' is Young');    
//     }
// }

// Person.prototype.nationality = 'Polish';

// var henk = new Person('Henk', 1965, 'Streetmaker');
// var jos = new Person('Jos', 1970, 'IT-specialist');
// var maria = new Person('Maria', 1980, 'Teacher');

// maria.calculateAge();

// maria.isElder();


// var personProto = {
//     calculateAge: function() {
//         console.log(2016 - this.yearOfBirth);      
//     }
// }


// var monique = Object.create(personProto, {
//     name: { value: 'Monique'},
//     zipCode: { value: '6060QQ' },
//     lastName: { value: 'Fetcher' }
// })

// var marcel = Object.create(personProto);
// marcel.name = 'Marcel';
// marcel.zipCode = '5050ZZ';
// marcel.lastName = 'Spencer';


// //  Primitives and Objects
// var a = marcel.lastName;

// var a = "master";

// // var a = marcel;
// marcel.lastName = 'Fish';

// console.log(a);


var years = [1990, 1998, 1956, 2005, 1990];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) 
    {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81)  {
        return Math.round(206.9 - (0.67 * el));
    } else {
         return - 1;       
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);

var maxHeart = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(maxHeart);


function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you explain what UX means');
        }
     } else if (job === 'teacher') {
            return function(name) {
                console.log('What subject do you teach, ' + name);
            }          
        } else {
            return function(name) {
                console.log('Hello ' + name + ', what do you do?');  
            }
        }
    }
 
 var teacherQuestion = interviewQuestion('teacher');
 teacherQuestion('John');

 interviewQuestion('designer')('Brenda');

//   TRY SELF SECTION
var billPrice = 15;

(function chooseCourses(courseAmount) {
    if(courseAmount === 'one') {
        return function(personsAmount)  {
            billPrice * personsAmount;
            console.log('The bill will at least be ' + billPrice);
        }
    } else if (courseAmount === 'two') {
        return function(personsAmount) {
            billPrice += (5 * personsAmount);
            console.log('The bill will at least be ' + billPrice);
            
        }
    } else if (courseAmount === ' three') {
        return function(personsAmount) {
            billPrice += (10 * personsAmount)
            console.log('The bill will at least be ' + billPrice);

        }
    } else {
        console.log('We only have three courses'); 
    }
})('two')(2);
