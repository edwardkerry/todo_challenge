
var express = require('express');
var path = require('path');
var app = express();

var rootpath = path.join(__dirname, 'app');

app.set('port', (process.env.PORT || 8080));

app.use(express.static(rootpath));

  app.get('/', function(req, res){
    res.sendFile(rootpath + '/index.html');
  });

app.listen(app.get('port'), function(){
console.log('Listening on port', app.get('port'));
});
