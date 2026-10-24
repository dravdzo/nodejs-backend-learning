
var express = require("express") ;

// console.log(typeof express); 
// console.log(express);

var server = express() ;

// console.log(typeof server); // factor method
// console.log(server);

server.listen(8080 , function() {
    console.log("Hello Server")
}) ; // listen in http module can't take a call back function


// server.get("/" , function(req , res) {
//     res.send("Hi Iam Ahmed");
//     res.end(); // end optional
// });

 // ! you can repalce get to (put , post , delete) ===> app


 /* 
    1- res.redirect();
    2- res.sendfile();
    3- res.json();
    4- res.status();
 */

// https://localhost:8080/home/x : url
// https://localhost:8080/home/?name:x : Get
// https://localhost:8080/home : Post

// ! Url : 

server.get("/product/:id/productName/:name/productPrice/:price" , function(req,res) {
    res.json( {
        id : req.params.id ,
        name : req.params.name ,
        price : req.params.price
    })
    res.end("Json Sended")
});


/* 

        ! to Slve Cros Problem
            use : var x = require("cros");
                  app.use(cros({orgin : *}))  
 */

    