
// Use SmorThing Lile ES6
function one(x, y) {
    this.x = x;
    this.y = y;
}

function two(x, y) {
    one.call(this, x, y); // to inherit proprties
}


var util = require("util");
util.inherits(two, one); // to inherit methods 

// or extends in ES6

var obj = new two(10, 20);

console.log(obj.x); // 10
console.log(obj.y); // 20


// ! can do format like templet laterial