// // Array Exercises

// var people = ["Greg", "Mary", "Devon", "James"];

// for (i = 0; i < people.length; i++) {
//     console.log(people[i]);
//     if (people[i] === "Mary") {
//         break;
//     }
// }

// people.shift();
// people.pop();

// people.unshift("Matt");
// people.push("Joost");

// people.splice(2, 1, 'Elix', 'Artie');

// var withBob = people + ", Bob";

// console.log(withBob);

// console.log(people.indexOf("Foo"));

// console.log(people);

/******************************************************************
 * Review on arays
 *  */ 

// var colors = ["red", "blue", "pink", "green", "yellow"];

// colors[4] = "ultraviolet";

// var fourthColor = colors[4];

// colors.push("grey");
// colors.push("lightBlue");
// colors.push("cyan");
// colors.unshift("purple");

// console.log(colors.length);


// console.log('now its: ' + colors.length);

// for (i = 0; i < colors.length; i++) {
//     var position = colors.indexOf(colors[i]);
//     console.log(position + ', ' + colors[i]);
    
// }

// var position = colors.length - 1;

// var lastColor = colors[position];

// console.log(lastColor);


// console.log(colors);




/******************************************************************
 * Review on object
 *  */ 

// var myPenguin = {
//     name: "Alfred",
//     origin: "Zig and Puce",
//     creator: "Alain Saint Orge",
//     note: "Children's book about a housepainter who ends up with a flock of penguins."
// }

// myPenguin.canFly = false;

// myPenguin.chirp = function() { 
//     console.log("CHIRP CHIRP I AM A PENGUIN");  
// }

// myPenguin.sayHello = function() { 
//     console.log("Hi I am a penguin and my name is: " + this.name);
// }

// myPenguin.name = "Penguin McPenguinFace";

// myPenguin.fly = function() {
//     if (this.canFly == true) {
//         console.log("I can fly, bro");
//     } else {
//         console.log("I can't fly, bro...");
//     }
// }

// for (key in myPenguin) {
//     console.log(key);
// }

// for (key in myPenguin) {
//     console.log(myPenguin[key]);
// }


// myPenguin.canFly = true;

// myPenguin.sayHello();

// myPenguin.fly();


/******************************************************************
 * Arrays in Objects
 *  */ 


var myPenguin = {
    name: "Alfred",
    origin: "Zig and Puce",
    creator: "Alain Saint Orge",
    note: "Children's book about a housepainter who ends up with a flock of penguins."
}

myPenguin.canFly = false;

myPenguin.chirp = function() { 
    console.log("CHIRP CHIRP I AM A PENGUIN");  
}

myPenguin.sayHello = function() { 
    console.log("Hi I am a penguin and my name is: " + this.name);
}

myPenguin.name = "Penguin McPenguinFace";

myPenguin.fly = function() {
    if (this.canFly == true) {
        console.log("I can fly, bro");
    } else {
        console.log("I can't fly, bro...");
    }
}

myPenguin.favoriteFoods = ['apples', 'oranges', 'fish'];

console.log(myPenguin.favoriteFoods[1]);

myPenguin.firstFavFood = myPenguin.favoriteFoods[0];

myPenguin.favoriteFoods.push('peanuts');

console.log(myPenguin.favoriteFoods.length);

var position = myPenguin.favoriteFoods.length - 1;

myPenguin.favoriteFoods[position] = 'pineapple';

myPenguin.lastFavoriteFood = myPenguin.favoriteFoods[position];

console.log(myPenguin.lastFavoriteFood);

console.log(myPenguin.favoriteFoods);

for (i = 0; i < myPenguin.favoriteFoods.length; i++) {
    console.log(myPenguin.favoriteFoods[i]);
    
}

/*************************
 * Objects in Objects
 */

 myPenguin.outfit = {
     hat: 'Baseball cap',
     shirt: 'hawaiian shirt',
     pants: 'cargo pants',
     shoes: 'clown shoes'
 }

 var penguinHatType = myPenguin.outfit.hat; // makes a copy of the variable stored, not a reference


myPenguin.outfit.accessory = 'pocket watch';

myPenguin.outfit.hat = 'top hat'; 


console.log(penguinHatType); // this will print the stored copy, not actual value

delete(myPenguin.outfit.pants);

console.log(myPenguin);

for (property in myPenguin.outfit) {
    console.log(myPenguin.outfit[property]);  
}

/********************
 * Objects in Arrays
 */

//  pre made penguin objects copied from the website

var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
  };
  
  var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    }
  };
  
  var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    }
  };

var penguins = [gunter, ramon, fred];

console.log(penguins[0]);

var secondPenguin = penguins[1];

console.log(penguins[2].name);

penguins.push(myPenguin);

console.log(penguins.length);

penguins[0].sayHello();

for (i = 0; i < penguins.length; i++) {
    console.log(penguins[i].name);    
}

for (i = 0; i < penguins.length; i++) {
    console.log(penguins[i].sayHello());    
}

for (i = 0; i < penguins.length; i++) {
    penguins[i].numberOfFeet = 2;    
}

for (i = 0; i < penguins.length; i++) {
    if(penguins[i].canFly == true) {
        console.log(penguins[i].name + " can fly!");        
    } else {
        console.log(penguins[i].name + " cant fly :(");
    }
}











