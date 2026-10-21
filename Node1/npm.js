
// npm install moduleName ==> To Install Custom Module
// nmp install == npm i 

// ! To Install Global Package 
    // Use npm install -g moduleName 


    /*
        ! When You Use Module With npm 
        ====> two files and one directory (package-lock.json , package.json , moduel)
        ====> we didint push the folder ; Because It can be vere large
        ====> we only push (package.json) and the user display {npm install}
*/


// ! Validator moduel

/*
var validator = require("validator");

console.log(typeof validator);
console.log(validator);

console.log(validator.isInt("100"));
console.log(validator.isEmail("ahmed@gmail.com"));
*/



// ! meta data And package.json
// npm init 
// npm init -y ===> without questions(name , description , entrypoint , ...)

// npm install validtor --save