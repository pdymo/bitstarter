var express = require('express');
var app = express.createServer(express.logger());

var fs=require('fs');


//var theText="Hi!";
var infil ='index.html';
var theText = fs.readFileSync(infil, 'utf8');
//fs.readFileSync('index.html');
//theText=fs.readFileSync('index.html','utf8')
//, function (err, data) {
 //   if (err) throw err;
 //   theText= data;
//})
//; 


app.get('/', function(request, response) {
  response.send(theText);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});




//fs.writeFileSync(outfile, fmt(firstnprimes(n)));


