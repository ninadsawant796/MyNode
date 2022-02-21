var express = require('express'); 
var app = express();
var fs = require('fs'); 


app.get('/getUsers', function(req, res){
    fs.readFile(__dirname + "/" + "mydata.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); 
    });
})

var user = {
    "user5": {
        "id":5,
        "firstname":"Viddesh",
        "lastname":"Sawant",
        "email":"viddesh@gmail.com"
      },
} 

app.post('/addUser', function(req, res){
    fs.readFile(__dirname + "/" + "mydata.json", 'utf8', function(err, data){
        data = JSON.parse(data);
        data["user5"] = user["user5"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

app.get('/:id', function (req, res) {
    // First retrieve existing user list
    fs.readFile( __dirname + "/" + "mydata.json", 'utf8', function (err, data) {
       var users = JSdON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })

 var id = 3;
 app.delete('/deleteUser', function (req, res) {
    // First retrieve existing users
    fs.readFile( __dirname + "/" + "mydata.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 3];
        
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })
var server = app.listen(3001, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})

