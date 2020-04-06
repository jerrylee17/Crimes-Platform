var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");
<<<<<<< HEAD
<<<<<<< HEAD
var postAPIRouter = require("./routes/post");
var postColAPIRouter = require("./routes/postCollection");
=======
var postAPIRouter = require("./routes/post");
>>>>>>> Added api for getting post data
var app = express();

require('./firebase.js');

=======
var app = express();

>>>>>>> CORS and express boilerplate
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);
<<<<<<< HEAD
<<<<<<< HEAD
app.use('/post', postAPIRouter)
app.use('/postCol',  postColAPIRouter)
=======
>>>>>>> CORS and express boilerplate
=======
app.use('/post', postAPIRouter)
>>>>>>> Added api for getting post data
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
