var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var fs = require('fs');

app.use(express.static('.'));

app.get('/api/book-data', function(req, res){
	fs.readFile('AsadokuBookLists20140818.json', function(err, data){
    if(err) { console.log(err) }
    // data = createDataObject(data);
    data = data.toString();
    res.end(data);
  })
})

app.listen(port);

function createDataObject(data){
  data.shift();
  var results = [];
  forEach(data, function(row){
    results.push({collection: row[0], story: row[1], author: row[2], extra: row[3]});
  })
  return results;
};

function forEach(arr, fn){
  for(var i = 0; i < arr.length; i++){
    fn(arr[i], i);
  }
};