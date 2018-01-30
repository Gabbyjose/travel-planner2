const express = require('express');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const app = express();
const path = require('path');
const db = require("./models");
const bodyParser = require("body-parser");
const Router = require('./router.js');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', Router);


app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.send(
    "You've done wrong, my friend. "+err.message
  );
});

const port = 3000;
app.listen(port, function() {
  console.log("The server is listening mildly on port", port);
  db.db
    .sync()
    .then(function() {
      console.log("Synchronated the database");
    })
    .catch(function(err) {
      console.error("Trouble right here on 5 Hanover Square, floor 25, temprature 10000 degrees", err, err.stack);
    });
});
