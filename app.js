var express = require('express');
var i18n = require("i18n");
var paypal = require('paypal-rest-sdk');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var validator = require('express-validator');
var MongoStore = require('connect-mongo')(session);
var helpers = require('handlebars-helpers')();
var dateHelper = require('handlebars-dateformat');
var uuidV1 = require('uuid/v1');
var uuidV4 = require('uuid/v4');

var index = require('./routes/index');
var userRoute = require('./routes/user');
var mailRoute = require('./routes/mail');
var adminRoute = require('./routes/admin');

var app = express();

mongoose.connect('localhost:27017/shopping');
require('./config/passport');
// view engine setup
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs', helpers: helpers}));
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(session({
  secret: 'mysupersecret', 
  resave: false, 
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: { maxAge: 180 * 60 * 1000 }
}));
i18n.configure({
    locales:['en', 'de'],
    directory: __dirname + '/locales',
    defaultLocale: 'en',
    cookie: 'i18n',
    extension: '.json'
});
app.use(i18n.init);
paypal.configure({
  'mode': 'sandbox', //sandbox or live 
  'client_id': '',
  'client_secret': ''
});
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next) {
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  res.locals.cookies = req.cookies;
  next();
});

app.use('/mail', mailRoute);
app.use('/user', userRoute);
app.use('/admin', adminRoute);
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

// expressHbs.registerHelper('times', function(n, block) {
//     var accum = '';
//     for(var i = 0; i < n; ++i)
//         block.data.index = i;
//         block.data.first = i === 0;
//         block.data.last = i === (n - 1);
//         accum += block.fn(this);
//     return accum;
// });

module.exports = app;
