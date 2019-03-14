var app = require('express')();

app.get("/", function(req, res){
    res.send("<h1>Hello World</h1>");
});

app.listen(5000, function(){
    console.log("Server has launched on ");
});