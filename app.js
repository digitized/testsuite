var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var config = require('./config.js');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(__dirname+'/code/'+config.folder));
if( config.library ){
  var libStr = config.library.split('/');
  var libName = ( libStr[libStr.length-1] === '') ? libStr[libStr.length-2]:libStr[libStr.length-1];
  app.use('/'+libName, express.static(__dirname+'/code/'+config.library));
}

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/code/'+config.testPage));
});

app.listen( process.env.PORT || 3000,  function(){
    console.log("Server start on PORT: "+(process.env.PORT || 3000));
});

