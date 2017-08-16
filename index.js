var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


app.get('/', function (req,res) {
    res.render('index'); /*todo*/
  });

  app.get('/signup', function (req,res) {
      res.render('signup'); /*todo*/
    });

app.get('/nav', function (req,res) {
  res.render('skin'); /*todo*/
  // get data from moongo and pass it to view
  // Todo.find({}, function (err,data) {
  //   if(err) throw err;
  // });
});
