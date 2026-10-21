// NodeJs Create The Server
// Other Programming lang like php need the server


/*
var httpModule = require("http");
//console.log(httpModule);

var server = httpModule.createServer();
// console.log(typeof server);
// console.log(server);

server.on("request" , function(req , res) {
    // res.write("<h1>Hi Iam Http Moduel</h1>");
    // res.write("<h1>Hi Iam Ahmed</h1>");

    res.write(req.url);
    res.end();
});

server.listen(4000);

*/



// ! Exsampel With Routing

/*
var httpModuel = require("http");

var server = httpModuel.createServer(function (req , res) {

    var url = req.url ;
    switch(url) {
        case "/":
            res.write("<h1>Home</h1>");
            break;
        case "/about":
            res.write("<h1>About</h1>");
            break ;
        case "/contact":
            res.write("<h1>contact</h1>");
            break;
        default : 
            res.write("<h1>Inavlid Page</h1>");
            //res.writeHead(404);
            // res.end("Not Found");
    }

    res.end();
});


server.listen(5000);

*/

//   res.setHeader("Access-Control-Allow-Origin", "*"); : To slove Cors problem

const http = require("http");

const products = [
  {
    id: 1,
    name: "Laptop"
  },
  {
    id: 2,
    name: "Phone"
  }
];

const server = http.createServer((req, res) => {
  if (req.url === "/products" && req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    }); // ==> Response Head

    res.end(JSON.stringify(products));

    return;
  }

  res.writeHead(404);
  res.end("Not Found");
});

server.listen(3000);


// ! The Api Send Like : http//:port/url/.../.../...