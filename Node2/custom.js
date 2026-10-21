

// var array = [] ;
// var index = 0 ; 

// function addToArray(ele){
//     array[index++] = ele ; 
// }

// function sum(){
//     return array.reduce((a,b) => a+b);
// }


// module.exports.addToArray = addToArray ;
// module.exports.sum = sum ; 

// // console.log(module.exports)

function array(){
    index = 0 ;
    this.arr = [];
    this.addToArray = function (ele) {    this.arr[index++] = ele ;  }
    this.sum = function ()  {return this.arr.reduce((a,b) => a+b);}
}

module.exports = array