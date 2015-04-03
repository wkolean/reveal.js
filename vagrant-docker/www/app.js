var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    mongoose = require('mongoose');

app.set('port', process.env.PORT || 8888);


mongoose.connect('mongodb://mongo:27017/local');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));


var Schema = mongoose.Schema;
var hitSchema = new Schema({
  timestamp: {type:Date, default:Date.now}
});
var Hit = mongoose.model('Hit', hitSchema);



app.get('/', function(req, res) {
  var hit = new Hit();
  hit.save(function (err, hit) {
    if (err) return res.send(err);
  });

  Hit.count(function (err, hits) {
    if (err) return res.send(err);
    res.send('Hello from docker!<br />' + hits);
  });

  //res.send('Hello from docker!<br />' + hit.timestamp);

});

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});