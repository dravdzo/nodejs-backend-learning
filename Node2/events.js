
// ! How To Create your own Event

var event = require("events");
var util = require("util");


/*
// console.log(typeof event);
// console.log(event);

//  console.log(typeof event.EventEmitter);
//  console.log(event.EventEmitter)

var myEvents = new event.EventEmitter() ;

// console.log(typeof myEvents);
// console.log(myEvents);
*/

/*
function Persone(){
   this.myEevent = new event.EventEmitter();
    this.addPersone = function(){
        this.myEevent.emit("AddedPersone")
    }
}
*/

util.inherits(Persone , event)

function Persone(){
    this.addPersone = function(){
        this.emit("AddedPersone")
    }
}


module.exports = Persone



