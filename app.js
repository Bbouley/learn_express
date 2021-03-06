var express = require('express'),
  app = express();

var http = require('http');
var request = require('request');

var url = 'http://omdbapi.com/?i=tt0241527';

dataArray = [];

app.get('/', function(req, res){
  http.get(url, function(response){
    response.setEncoding('utf8');
    response.on('data', function(data){
      dataArray.push(data);
    });
    response.on('end', function(data){
      http.get(url, function(res){
        res.setEncoding('utf8');
        res.on('data', function(data){
          dataArray.push(data);
        });
      });
    });
  }); res.render('index', {name: dataArray.toString()});
});

// http.get(url, function(response, err, next){
//   response.setEncoding('utf8');
//   response.on('data', function(data){
//     dataArray.push(data);
//     console.log(dataArray);
//   });
// });



// var vegetables = [
//         "Carrots",
//         "Cucumber",
//         "Peas"
//          ];

// app.get("/", function (req, res) {
//   res.render('index', {name: 'Elie'});
// });

// app.get("/vegetables", function (req, res) {
//   //send all the veggies
//   res.send(vegetables.join(", "));
// });

app.set('view engine', 'ejs');

app.listen(3000, function () {
  console.log("Go to localhost:3000/");
});

// app.get('/hello/:name', function(req, res){
//   res.send('hello' + req.params.name);
// });

// app.get('/hi', function(req, res){
//   var name = req.query.name;
//   res.send('hello, '+ name);
// });
