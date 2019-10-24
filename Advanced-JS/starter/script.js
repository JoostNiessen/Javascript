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

// Primitives vs Objects

var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);      
    }
}

var number = 'apenkut';

var monique = Object.create(personProto, {
    name: { value: 'Monique'},
    zipCode: { value: '6060QQ' },
    lastName: { value: 'Fetcher' }
})

var marcel = Object.create(personProto);
marcel.name = 'Marcel';
marcel.zipCode = '5050ZZ';
marcel.lastName = 'Spencer';

