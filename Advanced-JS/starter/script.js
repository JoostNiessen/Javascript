// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// }

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }


// Person.prototype.calculateAge = function() {
//     console.log(2016-this.yearOfBirth);
// }

// Person.prototype.lastName = 'Smith';

// var john = new Person('John', 1990, 'teacher');

// var jane = new Person('Jane', 1969, 'teacher');

// console.log(jane);

var personProto = {
    calculateAge: function() {
        console.log(2016 - yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';


var jane = Object.create(personProto, {
    name: { value: 'jane'},
    yearOfBirth: { value: 1969 },
    job: { value: 'designer'} 
})
