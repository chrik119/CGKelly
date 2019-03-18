var port = process.env.PORT || 3000;
var app = require('express')();

app.get("/", function(req, res){
    res.send("<h1>Hello World V2</h1>");
});

app.listen(port, function(){
    console.log("Server has launched on ");
});