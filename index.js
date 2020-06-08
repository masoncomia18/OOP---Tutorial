// OBJECT LITERALS-----------------------------------------------------------
/*
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};

circle.draw();


// FACTORY FUNCTION----------------------------------------------------------
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);
circle.draw();

// CONSTRUCTOR FUNCTION------------------------------------------------------
function Circle(radius) {
  this.radius = radius; // "this" refers to the object
  this.draw = function () {
    this.console.log("draw");
  };
}

const another = new Circle(1); // "new" creates a new instance of the object
// The "new" operator creates:
// - a new empty object,
// - sets "this" to point to that new object
// - lastly, it will return that object from the constructor function


// CREATING OBJECTS WITH THE "new" KEYWORD-----------------------------------
let book = new Object();
//properties
book.title = "The Healing Power of Breath";
book.price = 15.99;
book.author = "Mason Comia";
//methods
book.getInfo = function () {
  return `${this.title} is priced at ${this.price}, and was written by ${this.author}`;
};


// CREATING OBJECTS WITH OBJECT LITERALS----------------------------------------
let book = {
  //properties
  title: "The Healing Power of Breath",
  price: 15.99,
  authors: ["Mason Comia", "TJ Saddy"],
  //multi-word properties
  "publication date": "October 18th, 1994",
  //methods
  getInfo: function () {
    let result = `${this.title} is priced at ${this.price},
    and was written by
    ${this.authors[0]}
    and ${this.authors[1]}`;
    console.log(result);
  },
};
book.getInfo();
console.log(book["publication date"]);
*/

// CREATING OBJECTS WITH FUNCTIONS (CONSTRUCTOR)--------------------------------
//constructor function (we're building objects and methods) also referred to as a blueprint
function book(title, author, description, price) {
  //properties
  this.title = title;
  this.author = author;
  this.description = description;
  this.price = price;
  //method (external function)
  // this.getInfo = getBookInfo;

  //method (internal function)
  this.getInfo = function () {
    //recreated everytime you instantiate this object
    return `${this.title} was written by ${this.author}. It's ${this.description} and is priced at ${this.price}`;
  };
}

// //using a function outside of the book object
// function getBookInfo() {
//   return `${this.title} was written by ${this.author[0]} and ${this.author[1]}.
//   It's ${this.description} and is priced at ${this.price}`;
// }

//instance 1
let bookOne = new book(
  "The Outsiders",
  "Mason Comia",
  "This is a brief description",
  15.99
);
const bookOneInformation = bookOne.getInfo();
console.log(bookOne);
console.log(bookOneInformation);

//instance 2
let bookTwo = new book(
  "The Wanderers",
  "John Do",
  "This is a brief description",
  12.99
);
const bookTwoInformation = bookTwo.getInfo();
console.log(bookTwo);
console.log(bookTwoInformation);
