
const express = require("express");
const app = express();

app.listen(7070 , function() {
    console.log("Iam Get Server");
})

app.get("/" , function(req,res){
    res.sendFile(__dirname + "/" + "Get.html");

});

app.get("/data" , function(req,res) {
    res.json(req.query)
})

