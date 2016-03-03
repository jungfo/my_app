


// var express = require('express')
// var bodyParser = require('body-parser')
//
// var app = express()
//
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
//
// // parse application/json
// app.use(bodyParser.json({ type: 'application/*+json' }))
//
// app.use(function (req, res) {
//   console.log ('JF TEST');
//   console.log (req.body);
//   res.setHeader('Content-Type', 'application/json;charset=UTF8')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })
//
//
// app.post('/', function(req, res){
//   res.send(req.body);
// });
//app.listen(3000);

// var express = require('express')
// var bodyParser = require('body-parser')
//
// var app = express()
//
// // create application/json parser
// var jsonParser = bodyParser.json()
//
// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
// app.use(bodyParser.json({ type: 'application/json' }))
//
// // POST /login gets urlencoded bodies
// app.post('/login', urlencodedParser, function (req, res) {
//   console.log (req._body);
//   if (!req.body) return res.sendStatus(400)
//   res.send('welcome, ' + req.body.username)
// })
//
// // POST /api/users gets JSON bodies
// app.post('/api', jsonParser, function (req, res) {
//   console.log (req.body);
//   if (!req.body) return res.sendStatus(400)
//   // create user in req.body
// })
//
// app.listen(3000);





var app = require('express')();
var bodyParser = require('body-parser');
//var multer = require('multer'); // v1.0.5
//var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json

app.post('/profile', function (req, res, next) {
  console.log(req.body);
  console.log(req.body.test);
  res.json(req.body);
});
app.listen(3000);
