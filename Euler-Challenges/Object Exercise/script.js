/*** THE RECIPE LIST ******'
 * Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
On separate lines (one console.log statement for each), log the recipe information so it looks like:
Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa
 */

var Recipe = function(title, servings, ingredients) {
    this.title = title;
    this.servings = servings;
    this.ingredients = ingredients;
}

var mole = new Recipe('Mole', 2, ['cinnamon', 'cumin', 'cocoa']);

console.log(mole.title);
console.log(mole.servings);

for (i = 0; i < mole.ingredients.length; i++) {
    console.log(mole.ingredients[i]);    
}


/***** THE READING LIST 
 * Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
 */

var Book = function(title, author, alreadyRead) {
    this.title = title;
    this.author = author;
    this.alreadyRead = alreadyRead;
}

var book1 = new Book('Harry Potter: Philosopher Stone', 'JK Rowling', true);
var book2 = new Book('De Bokkerijders', 'Ton van Reen', true);
var book3 = new Book('50 Shades of Grey', 'Kluun', false);
var book4 = new Book('The Old Man and the Sea', 'Dick Trom', false);

var bookArray = [book1, book2, book3, book4];

for (i = 0; i < bookArray.length; i++) {
    // console.log(bookArray[i].title + ', written by; ' + bookArray[i].author);  

    if (bookArray[i].alreadyRead == true) {
        console.log('You already read: ' + bookArray[i].title + ' by: ' + bookArray[i].author);
    } else {
        console.log('You still have to read: ' + bookArray[i].title + ' by: ' + bookArray[i].author);
    }
}

/***** RECONSTRUCTION OF THE GIVEN SOLUTION */

var books = [
    { 
        title: 'Harry Potter: Philosopher Stone',
        author: 'JK Rowling',
        alreadyRead: true
    },
    {
        title: 'De Bokkerijders',
        author: 'JTon van Reen',
        alreadyRead: true
    },
    {
        title: '50 Shades of Grey',
        author: 'Kluun',
        alreadyRead: false
    },
    {
        title: 'The old Man and the Sea',
        author: 'Dick Trom',
        alreadyRead: false
    }
];

for (i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = book.title + ', written by: ' + book.author;

    if (book.alreadyRead == true) {
        console.log('You have already read ' + bookInfo);
        
    } else {
        console.log('Not read yet: ' + bookInfo);
    }
}






