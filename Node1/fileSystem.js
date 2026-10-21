
// ! We Will Learn With FileSystem Module 

var fileSystem = require("fs");

//console.log(typeof fileSystem);
//console.log(fileSystem);

// The Defult Function In Module Is Async ==> more Eff
// Streams ==> [read , write , doplex(read and write) , transform(read from one to another)]


/*
    ! Sync Syntax : 
        moduleName.functionName(param);
    ! Async Syntax :
        moduleName.functionName(param , function (...) {
            code ...
        });
 */

 // 1- Read : 

 /*
 console.log("start Reading");
 var result = fileSystem.readFileSync("file.txt", "UTF-8");
 console.log(result);
 console.log("End Reading")
 */

 /*
console.log("start Reading");
fileSystem.readFile("file.txt" , "UTF-8",function(error , data){
    if(! error)
        console.log(data);
    else
        console.log(error);
});
console.log("End Reading");
*/

// 2- Write

/*
 console.log("start Writeing");
 fileSystem.writeFileSync("file.txt" , "My Name Is Ahmed\n");
 console.log("End Writeing");
 */

 /*
 console.log("start Writeing");
 fileSystem.writeFile("file.txt" , "My Name Is Ali\n" , function(error) {
    if(error)
        console.log("Error..");
    else 
        console.log("Writeing Done")
 });
 console.log("End Writeing");
 */


 // 3- Append

 
 /*
 console.log("start Writeing");
 fileSystem.appendFileSync("file.txt" , "My Name Is Osama\n");
 console.log("End Writeing");
 */
 
/*
 console.log("start Writeing");
 fileSystem.appendFile("file.txt" , "My Name Is Sara\n" , function(error) {
    if(error)
        console.log("Error..");
    else 
        console.log("Appending Done")
 });
 console.log("End Writeing");

 */

 /*
  ! Let's Learn Streming ==
    
    var myStream = moduleName.createStream(param , [options  : start , end , encoding , highWaterMater]);
    myStream.on("Action" , function() {}); 
    Action == Events
 */


    /*
var readStream = fileSystem.createReadStream("filf;olgke.txt");

//console.log(typeof readStream);
// console.log(readStream);

readStream.setEncoding("UTF-8");
readStream.highWaterMark = 1;

readStream.on("data",function(data){          
        console.log(data)
});

readStream.on("error",function(error){          
        console.log(error)
});
 

readStream.on("end",function(){          
        console.log("End...")
});

*/
 
var writerStrem = fileSystem.createWriteStream("file.txt");
console.log(writerStrem);


