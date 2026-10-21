
// var custom1 = require("./custom");

// // console.log(typeof custom1);
// // console.log(custom1)

// custom1.addToArray(10);
// custom1.addToArray(20);
// custom1.addToArray(30);
// custom1.addToArray(40);

// console.log(custom1.sum())


// var custom2 = require("./custom");


// custom2.addToArray(100);
// custom2.addToArray(200);
// custom2.addToArray(300);
// custom2.addToArray(400);

// console.log(custom2.sum()) ==> 1000 not 1100


// ! to solve this problem use oop and export the class


var custom= require("./custom");

console.log(typeof custom);
console.log(custom)

var custom1 = new custom()

custom1.addToArray(10);
custom1.addToArray(20);
custom1.addToArray(30);
custom1.addToArray(40);

console.log(custom1.sum())


var custom2 = new custom()


custom2.addToArray(100);
custom2.addToArray(200);
custom2.addToArray(300);
custom2.addToArray(400);

console.log(custom2.sum())

 // ! important note 
 // module.exports = Cart; ===> const Cart = require("./cart"); ===> const cart = new Cart();
 // module.exports.Cart = Cart; ===> const CartModule = require("./cart"); ===> const cart = new CartModule.Cart();