let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

let message = "Hello!";
let phrase = message;

let user1 = {
  name: "John"
};

let user2 = { name: "John" };

let admin = user; // copy the reference

let a = {};
let b = {}; // two independent objects

alert( a == b ); // false

let user3 = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("Hello!");
};

user3.sayHi(); // Hello!

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Error: Cannot read property 'name' of undefined

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

alert( user.ref().name ); // John

