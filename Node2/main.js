
var Persone = require("./events");

// console.log(typeof Persone);
// console.log(Persone);

// var p = new Persone();

// console.log(typeof p);
// console.log(p)


var p1 = new Persone();
var p2 = new Persone();

// p1.myEevent.on("AddedPersone" , () => console.log ("new Persone Added"));
// p2.myEevent.on("AddedPersone" , () => console.log ("new Persone Added"));

p1.on("AddedPersone" , () => console.log ("new Persone Added"));
p2.on("AddedPersone" , () => console.log ("new Persone Added"));

p1.addPersone();
p2.addPersone();



// ! If You Want To call The Event Without His Parent
// p1.on("AddedPersone" , () => console.log ("new Persone Added")); ==> Not p1.myEevent.on("AddedPersone" , () => console.log ("new Persone Added"));
// You Must Extend From events or EventEmiter
