let john = {
  name: "John",
  sayHi: function() {
    alert("Hi buddy!");
  }
};

john.sayHi(); // Hi buddy!

let str = "Hello";

alert( str.toUpperCase() ); // HELLO


let n = 1.23456;

alert( n.toFixed(2) ); // 1.23

let str1 = "Hello";

str.test = 5; // (*)

alert(str.test);

let a = +prompt("The first number?", "");
let b = +prompt("The second number?", "");

alert( a + b );