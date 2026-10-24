
const express = require("express");
const app = express();

// const bodyParser = require("body-parser");
// const urlencodedParser = bodyParser.urlencoded();

app.use(express.urlencoded())

app.listen(6060 , function() {
    console.log("Iam Post Server");
})

app.get("/" , function(req,res ){
    res.sendFile(__dirname + "/" + "Post.html");
});

app.post("/data"  ,function(req,res) {
    res.json(req.body)
})

